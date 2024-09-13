const Test = () => {
  return (
    <div className="h-screen [background:radial-gradient(100%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      {/* <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"> */}
      <div className=" h-96 w-96 bg-white/5 backdrop-blur-lg flex items-center justify-center">
        <h1 className="text-white text-4xl">Blurred Background</h1>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Test;
