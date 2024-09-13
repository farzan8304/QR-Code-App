import { useContext } from "react";
import QRCodeContext from "../context/QRContext";

const UrlSection = () => {
  const qrCodeContext = useContext(QRCodeContext);

  const handleQrCodeGenerator = () => {
    if (!qrCodeContext.url) {
      return;
    }
    qrCodeContext.setQrIsVisible(true);
  };

  const handleUrlChange = (e) => {
    const newUrl = e.target.value;
    qrCodeContext.setUrl(newUrl);
    if (!newUrl) {
      qrCodeContext.setQrIsVisible(false);
    }
  };
  return (
    <div className="h-full flex flex-col md:gap-5 gap-3">
      <textarea
        className="w-full h-full resize-none py-2 px-3 rounded-md bg-black/50 text-white outline-none border-2  focus:border-cyan-600 border-red-600"
        placeholder="Enter a URL ..."
        value={qrCodeContext.url}
        onChange={handleUrlChange}
      ></textarea>
      <button
        className="w-full border-2 border-red-600 rounded-md text-red-600 transition-all delay-75 hover:border-cyan-600 hover:bg-cyan-600/15 hover:text-cyan-600 md:p-2 p-1 md:text-xl text-lg font-semibold"
        onClick={handleQrCodeGenerator}
      >
        Generate
      </button>
    </div>
  );
};

export default UrlSection;
