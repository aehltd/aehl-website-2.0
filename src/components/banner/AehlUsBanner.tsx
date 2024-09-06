export default function AehlUsBanner() {
  return (
    <div className="relative flex w-full justify-center overflow-hidden h-[60vh] text-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/aehl/image/upload/v1724430440/img1.c6bbf8d2_jabqxm.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="relative z-10 flex flex-col w-full h-full items-center p-16 justify-center">
        <img
          src="https://res.cloudinary.com/aehl/image/upload/v1724428464/%E5%A4%A7%E7%99%BD%E8%89%B2.jpg_voicgv.png"
          alt="Logo"
          className="w-full md:w-3/4 drop-shadow-2xl"
        />
        <h1 className="mt-16 text-white font-bold drop-shadow-2xl tracking-wider">
          Next Generation Infrastructure to Power{" "}
          <span className="text-green">AI</span>
        </h1>
      </div>
    </div>
  );
}
