export default function AehlUsBanner() {
  return (
    <div
      className="relative flex flex-col justify-center items-center text-center h-[60vh] bg-center bg-cover w-full "
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/aehl/image/upload/v1724430440/img1.c6bbf8d2_jabqxm.png)",
      }}
    >
      <img
        className="Static w-2/3"
        src="https://res.cloudinary.com/aehl/image/upload/v1724428464/%E5%A4%A7%E7%99%BD%E8%89%B2.jpg_voicgv.png"
        alt="AEHL US"
      />

      <h2
        className="Static w-3/4 text-white md:text-3xl text-2xl font-semibold drop-shadow-lg mt-4 tracking-wider"
        style={{
        }}
      >
        Next Generation Infrastructure to Power{" "}
        <span className="text-green">AI</span>
      </h2>
    </div>
  );
}
