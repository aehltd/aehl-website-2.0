export default function AehlKylinBanner() {
  return (
    <div className="relative flex w-full justify-center overflow-hidden h-[60vh] text-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/aehl/image/upload/v1724428455/image4-1_va07bo.jpg')",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="absolute inset-0 bg-slate-500 opacity-25"></div>
      <div className="relative z-10 flex flex-col w-full h-full items-center justify-center p-16 space-y-16">
        <img
          src="https://res.cloudinary.com/aehl/image/upload/v1724428464/%E5%A4%A7%E7%99%BD%E8%89%B2.jpg_voicgv.png"
          alt="Logo"
          className="w-full md:w-3/4 drop-shadow-2xl"
        />
        <h1 className="text-white font-semibold drop-shadow-2xl">
          The Future of Livestreaming Ecommerce
        </h1>
      </div>
    </div>
  );
}
