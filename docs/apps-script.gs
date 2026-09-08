/**
 * LASTRO — recebe leads do site e grava no Google Sheets.
 *
 * Instalação
 * 1. Na planilha: Extensões → Apps Script. Cole este arquivo inteiro.
 * 2. Projeto → Configurações → Propriedades do script → adicione:
 *      TOKEN = <a mesma string que vai em SHEETS_TOKEN na Vercel>
 *    (NÃO deixe o token escrito no código — o /exec é público.)
 * 3. Implantar → Nova implantação → tipo "App da Web"
 *      Executar como .......: Eu
 *      Quem pode acessar ...: Qualquer pessoa
 *    Copie a URL /exec → é o SHEETS_WEBHOOK_URL.
 *
 * Toda vez que editar o script, crie uma NOVA implantação (ou "Gerenciar
 * implantações" → editar → versão "Nova"), senão o /exec continua servindo
 * a versão antiga.
 */

var COLUNAS = [
  "recebidoEm",
  "nome",
  "empresa",
  "email",
  "provedor",
  "gasto",
  "mensagem",
  "origem",
];

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    // duas submissões simultâneas podem escrever na mesma linha sem isto
    lock.waitLock(20000);

    var corpo = JSON.parse(e.postData.contents);
    var esperado = PropertiesService.getScriptProperties().getProperty("TOKEN");

    if (!esperado || corpo.token !== esperado) {
      return json({ ok: false, error: "unauthorized" });
    }

    var aba = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

    // cabeçalho na primeira execução
    if (aba.getLastRow() === 0) {
      aba.appendRow(COLUNAS);
      aba.getRange(1, 1, 1, COLUNAS.length).setFontWeight("bold");
      aba.setFrozenRows(1);
    }

    aba.appendRow(
      COLUNAS.map(function (c) {
        return corpo[c] || "";
      })
    );

    return json({ ok: true });
  } catch (err) {
    console.error(err);
    return json({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

// GET serve só para conferir que a implantação está no ar
function doGet() {
  return json({ ok: true, status: "lastro lead endpoint" });
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
