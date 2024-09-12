export default function AehlKylinBanner() {
  return (
    <div
    className="relative flex flex-col justify-center items-center text-center h-[65vh] bg-center bg-cover w-full "
    style={{
      backgroundImage:
        "url(https://res.cloudinary.com/aehl/image/upload/v1724428455/image4-1_va07bo.jpg)",
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
      The <span className="text-sky">Future</span> of Livestreaming Ecommerce
    </h2>
  </div>
  );
}
