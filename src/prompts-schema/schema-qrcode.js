import chalk from "chalk";

const promptSchemaQRCode = [
  {
    name: "link",
    description: chalk.yellow("Digite o link para gerar o QR CODE"),
    required: true,
  },
  {
    name: "type",
    description: chalk.yellow("Escolha entre o tipo de QRCode (1- NORMAL ou 2- TERMINAL)"),
    pattern: /^[1-2]$/,
    message: chalk.red.italic("Escolha apenas entre 1 e 2"),
    required: true,
  },
  {
    name: "exportFile",
    description: chalk.yellow("Digite o nome do arquivo (ou 'Sim' para salvar como qrcode.png, deixe vazio para não exportar)"),
    required: false,
  },
  {
    name: "exportType",
    description: chalk.yellow("Se exportar, escolha o formato (png/svg)"),
    pattern: /^(png|svg)?$/,
    message: chalk.red.italic("Escolha apenas entre png ou svg"),
    required: false,
  },
];

export default promptSchemaQRCode;