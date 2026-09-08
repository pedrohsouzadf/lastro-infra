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
const AVISO    = 'contato@lastro.cloud';
const ABA      = 'leads';

function doPost(e) {
  try {
    const d = JSON.parse(e.postData.contents);

    if (d.token !== TOKEN) {
      return json({ ok: false, error: 'unauthorized' });
    }

    const planilha = SpreadsheetApp.openById(SHEET_ID);
    // getSheetByName devolve null se a aba não existir — sem isto, o
    // appendRow estoura e o lead é perdido por causa do nome de uma aba.
    const aba = planilha.getSheetByName(ABA) || planilha.insertSheet(ABA);

    if (aba.getLastRow() === 0) {
      aba.appendRow(['data', 'nome', 'empresa', 'email', 'provedor', 'gasto', 'mensagem', 'origem']);
      aba.getRange(1, 1, 1, 8).setFontWeight('bold');
      aba.setFrozenRows(1);
    }

    aba.appendRow([
      new Date(),
      d.nome     || '',
      d.empresa  || '',
      d.email    || '',
      d.provedor || '',
      d.gasto    || '',
      d.mensagem || '',
      d.origem   || 'landing'
    ]);

    // O e-mail é secundário: se a cota do MailApp estourar ou o endereço
    // falhar, o lead JÁ está na planilha e a resposta tem que ser ok.
    // Sem este try/catch, o site mostraria erro, a pessoa reenviaria,
    // e a planilha ficaria com linhas duplicadas.
    try {
      MailApp.sendEmail({
        to: AVISO,
        subject: `Novo lead Lastro — ${d.empresa || d.nome}`,
        body: `${d.nome} · ${d.empresa}\n${d.email}\n\n`
            + `Provedor: ${d.provedor}\nGasto mensal: ${d.gasto}\n\n${d.mensagem || ''}`
      });
    } catch (mailErr) {
      console.error('lead gravado, e-mail falhou:', mailErr);
    }

    return json({ ok: true });
  } catch (err) {
    console.error(err);
    return json({ ok: false, error: String(err) });
  }
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
