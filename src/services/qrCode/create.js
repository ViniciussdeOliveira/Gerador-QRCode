import prompt from "prompt";
import promptSchemaQRCode from "../../prompts-schema/schema-qrcode.js";
import handle from "./handle.js";

async function createQRCode() {
  prompt.get(promptSchemaQRCode, async (err, result) => {
    if (err) {
      console.log("Erro ao coletar dados do usuário");
      return;
    }

    await handle(null, {
      link: result.link,
      type: result.type,
      exportFile: result.exportFile || null,
      exportType: result.exportType || "png",
    });
  });
}

export default createQRCode;
