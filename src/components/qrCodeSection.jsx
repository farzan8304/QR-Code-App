import { useContext } from "react";
import QRCode from "react-qr-code";
import * as htmlToImage from "html-to-image";
import QRCodeContext from "../context/QRContext";

function QrCodeSection() {
  const qrCodeContext = useContext(QRCodeContext);

  const downloadQRCode = () => {
    const node = qrCodeContext.qrCodeRef.current;
    const { fileType } = qrCodeContext;

    const downloadImage = (dataUrl) => {
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = `qr-code.${fileType}`;
      link.click();
    };

    const handleError = (error) => {
      console.error("Error generating QR code:", error);
    };

    switch (fileType) {
      case "png":
        htmlToImage.toPng(node).then(downloadImage).catch(handleError);
        break;
      case "jpeg":
        htmlToImage.toJpeg(node).then(downloadImage).catch(handleError);
        break;
      case "svg":
        htmlToImage.toSvg(node).then(downloadImage).catch(handleError);
        break;
      default:
        console.error("Unsupported file type:", fileType);
    }
  };

  return (
    <div className="h-full flex flex-col md:gap-5 gap-3">
      <section className="bg-white/15 w-full h-full flex items-center justify-center rounded-md">
        {qrCodeContext.qrIsVisible && (
          <div className="" ref={qrCodeContext.qrCodeRef}>
            <QRCode className="lg:size-64 size-52 " value={qrCodeContext.url} />
          </div>
        )}
      </section>
      <div className="flex gap-3 w-full">
        <button
          className="w-full border-2 border-red-600 rounded-md text-red-600 transition-all delay-75 hover:border-cyan-600 hover:bg-cyan-600/15 hover:text-cyan-600 md:p-2 p-1 md:text-xl text-lg font-semibold"
          onClick={downloadQRCode}
        >
          Download
        </button>

        <select
          className="outline-none border-2 bg-transparent border-red-600 rounded-md text-red-600 transition-all delay-75 hover:border-cyan-600 hover:bg-cyan-600/15 hover:text-cyan-600 px-1 md:text-xl text-lg font-semibold"
          value={qrCodeContext.fileType}
          onChange={(e) => qrCodeContext.setFileType(e.target.value)}
          disabled={!qrCodeContext.qrIsVisible}
        >
          {["png", "jpeg", "svg"].map((type) => (
            <option key={type} value={type} className="text-black">
              {type.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default QrCodeSection;
