export default function HomePageBanner() {
  return (
    <div
      className="relative flex justify-center items-center text-center w-full h-[60vh] bg-cover"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/aehl/image/upload/v1724428460/3D_dohdwm.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2
        className="absolute md:text-3xl text-2xl inline-block w-3/4 text-white font-semibold drop-shadow-lg"
        style={{
          top: "80%",
          transform: "translateY(-50%)",
        }}
      >
        A Beacon of Innovation in an Evolving Energy and Technology Landscape
      </h2>
    </div>
  );
}
