/**
 * LASTRO — recebe leads do site, grava no Sheets e avisa por e-mail.
 *
 * Implantar: Implantar → Nova implantação → App da Web
 *   Executar como .......: Eu
 *   Quem pode acessar ...: Qualquer pessoa
 * A URL /exec é o SHEETS_WEBHOOK_URL do site.
 *
 * IMPORTANTE: ao editar este arquivo, crie uma NOVA implantação.
 * Salvar não muda o que a URL /exec serve.
 */

const SHEET_ID = '1A7-3JJwe2e8NKh-6_E_7GUvEpP0IFF4f0rQxOqPeIyA';
const TOKEN    = 'mxPMYfz_qR4ox6tPwDnTr11UrFn6dXPM';
const AVISO    = 'pedrohsouzadf@gmail.com';
const ABA      = 'leads';

/**
 * Ordem canônica das colunas.
 *
 * A linha é montada pelo CABEÇALHO da planilha, nunca por posição fixa.
 * Assim, acrescentar um campo aqui basta: o script cria a coluna que
 * faltar e continua gravando certo nas linhas antigas. Com appendRow de
 * posição fixa, adicionar um campo no meio desalinharia tudo que já
 * estava gravado.
 */
const COLUNAS = [
  'data',
  'nome',
  'empresa',
  'email',
  'provedor',
  'gasto',
  'operadores',
  'mensagem',
  'origem'
];

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    // Dois envios simultâneos podem disputar a mesma linha sem isto.
    lock.waitLock(20000);

    const d = JSON.parse(e.postData.contents);

    if (d.token !== TOKEN) {
      return json({ ok: false, error: 'unauthorized' });
    }

    const planilha = SpreadsheetApp.openById(SHEET_ID);
    // getSheetByName devolve null se a aba não existir — sem isto, o
    // appendRow estoura e o lead é perdido por causa do nome de uma aba.
    const aba = planilha.getSheetByName(ABA) || planilha.insertSheet(ABA);

    const cabecalho = garanteCabecalho(aba);

    const valores = {
      data:       new Date(),
      nome:       d.nome       || '',
      empresa:    d.empresa    || '',
      email:      d.email      || '',
      provedor:   d.provedor   || '',
      gasto:      d.gasto      || '',
      operadores: d.operadores || '',
      mensagem:   d.mensagem   || '',
      origem:     d.origem     || 'landing'
    };

    aba.appendRow(cabecalho.map(function (coluna) {
      return valores[coluna] !== undefined ? valores[coluna] : '';
    }));

    // O e-mail é secundário: se a cota do MailApp estourar ou o endereço
    // falhar, o lead JÁ está na planilha e a resposta tem que ser ok.
    // Sem este try/catch, o site mostraria erro, a pessoa reenviaria,
    // e a planilha ficaria com linhas duplicadas.
    try {
      MailApp.sendEmail({
        to: AVISO,
        subject: `Novo lead Lastro — ${d.empresa || d.nome}`,
        body: `${d.nome} · ${d.empresa}\n${d.email}\n\n`
            + `Provedor: ${d.provedor}\n`
            + `Gasto mensal: ${d.gasto}\n`
            + `Quem opera a infra: ${d.operadores}\n\n`
            + `${d.mensagem || ''}`
      });
    } catch (mailErr) {
      console.error('lead gravado, e-mail falhou:', mailErr);
    }

    return json({ ok: true });
  } catch (err) {
    console.error(err);
    return json({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

/**
 * Devolve o cabeçalho da aba, criando-o na primeira execução e
 * acrescentando à direita qualquer coluna de COLUNAS que ainda não
 * exista. Nenhuma coluna é movida ou removida — o histórico continua
 * alinhado.
 */
function garanteCabecalho(aba) {
  if (aba.getLastRow() === 0) {
    aba.appendRow(COLUNAS);
    aba.getRange(1, 1, 1, COLUNAS.length).setFontWeight('bold');
    aba.setFrozenRows(1);
    return COLUNAS.slice();
  }

  const atual = aba
    .getRange(1, 1, 1, aba.getLastColumn())
    .getValues()[0]
    .map(function (celula) { return String(celula).trim(); });

  const faltando = COLUNAS.filter(function (coluna) {
    return atual.indexOf(coluna) === -1;
  });

  if (faltando.length) {
    aba.getRange(1, atual.length + 1, 1, faltando.length)
       .setValues([faltando])
       .setFontWeight('bold');
    return atual.concat(faltando);
  }

  return atual;
}

// Abrir a /exec no navegador deve mostrar este JSON — é o teste de que a
// implantação está no ar antes de mexer no site.
function doGet() {
  return json({ ok: true, status: 'lastro lead endpoint' });
}

function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
