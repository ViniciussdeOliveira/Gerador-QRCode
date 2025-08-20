import qr from "qrcode-terminal";
import chalk from "chalk";
import exportQrCode from "./export.js";

async function handle(err, result) {
  if (err) {
    console.log("Erro na aplicação");
    return;
  }

  let { link, type, exportFile, exportType } = result;
  exportType = exportType?.toLowerCase() || "png";

  if (exportFile && ["sim", "s", "yes", "y"].includes(exportFile.toLowerCase())) {
    exportFile = `qrcode.${exportType}`;
  }

  if (exportFile && !exportFile.includes(".")) {
    exportFile = `${exportFile}.${exportType}`;
  }

  if (exportFile) {
    const res = await exportQrCode(link, {
      type: exportType,
      output: exportFile,
    });

    if (res.success) {
      console.log(chalk.green(`QR Code salvo em: ${res.path}`));
    } else {
      console.log(chalk.red(`Erro ao exportar: ${res.error}`));
    }
  } else {
    const isSmall = type == 2;
    qr.generate(link, { small: isSmall }, (qrcode) => {
      console.log(chalk.green("QR Code gerado com sucesso:\n"));
      console.log(qrcode);
    });
  }
}

export default handle;
