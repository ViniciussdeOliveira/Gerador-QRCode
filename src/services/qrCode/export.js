import QRCode from "qrcode";
import path from "path";
import fs from "fs";

async function exportQrCode(text, options = {}) {
  const { type = "png", output = "qrcode.png" } = options;

  const outputPath = path.resolve(process.cwd(), output);

  try {
    if (type === "svg") {
      const svg = await QRCode.toString(text, { type: "svg" });
      fs.writeFileSync(outputPath, svg);
    } else {
      await QRCode.toFile(outputPath, text, {
        type: "png",
        width: 300,
        errorCorrectionLevel: "H",
      });
    }
    return { success: true, path: outputPath };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

export default exportQrCode;
