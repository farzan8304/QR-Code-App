import QrCodeSection from "./qrCodeSection";
import UrlSection from "./urlSection";

const QRCodeApp = () => {
  return (
    <main className="relative h-screen w-screen bg-slate-950 text-white">
      <template className="p-4 absolute flex flex-col justify-center items-center bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#212121_1px,transparent_1px),linear-gradient(to_bottom,#212121_1px,transparent_1px)] bg-[size:24px_32px]">
        <h1 className="lg:text-5xl md:text-3xl text-xl font-semibold mb-4 xl:w-2/3 lg:w-4/5 w-full bg-blue-950/5 border border-blue-600/20 backdrop-blur-sm rounded-md md:p-5 p-2 text-center">
          QR Code Generator
        </h1>
        <section className="grid md:grid-cols-2 grid-cols-1 gap-4 lg:h-3/5 md:h-3/4 h-full xl:w-2/3 lg:w-4/5 w-full">
          <div className="md:row-span-8 bg-blue-950/5 border border-blue-600/20 backdrop-blur-sm rounded-md md:p-5 p-3">
            <UrlSection />
          </div>
          <div className="row-span-8 bg-blue-950/5 border border-blue-600/20 backdrop-blur-sm rounded-md md:p-5 p-3">
            <QrCodeSection />
          </div>
        </section>
      </template>
    </main>
  );
};

export default QRCodeApp;
