export default function HomePageBanner() {
  return (
    <div
      className="relative flex flex-col bg-midnight justify-center items-center text-center h-[65vh] bg-center bg-cover w-full "
      style={{
        // backgroundImage:
        //   "url(https://res.cloudinary.com/aehl/image/upload/v1724428460/3D_dohdwm.jpg)",
      }}
    >
            <img
        className="Static w-2/3"
        src="https://res.cloudinary.com/aehl/image/upload/v1724428464/%E5%A4%A7%E7%99%BD%E8%89%B2.jpg_voicgv.png"
        alt="AEHL US"
      />
      <h2
        className="Static inline-block w-3/4 text-white md:text-3xl text-xl font-semibold drop-shadow-lg bottom-20"
        // style={{
        //   top: "75%",
        // }}
      >
        A Beacon of Innovation in an Evolving Energy and Technology Landscape
      </h2>
    </div>
  );
}
