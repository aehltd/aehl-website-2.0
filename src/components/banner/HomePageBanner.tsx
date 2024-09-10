export default function HomePageBanner() {
  return (
    <div
      className="relative flex justify-center items-center text-center h-[60vh] bg-center bg-cover w-full "
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/aehl/image/upload/v1724428460/3D_dohdwm.jpg)",
      }}
    >
      <h2
        className="absolute inline-block w-3/4 text-white md:text-3xl text-xl font-semibold drop-shadow-lg bottom-20"
        // style={{
        //   top: "75%",
        // }}
      >
        A Beacon of Innovation in an Evolving Energy and Technology Landscape
      </h2>
    </div>
  );
}
