import React from "react";
import { useNavigate } from "react-router-dom";
import landingImage from "../assets/3D.jpg";
import logoImage from "../assets/companylogo/大白色.png";
import ceoImage from "../assets/board/weilai-zhang.png";
import { Button } from "antd";

const HomePage = () => {
  const navigate = useNavigate();

  const handleNavToUS = () => {
    navigate("/aehl-us/overview");
  };

  const handleNavToKylin = () => {
    navigate("/aehl-kylin/overview");
  };

  return (
    <div id="container" className="container">
      <div className="relative flex w-full h-[75vh] justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-sm"
          style={{
            backgroundImage: `url(${landingImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="absolute inset-0 bg-slate-500 opacity-25"></div>
        <div className="relative z-10 flex flex-col w-full h-full items-center p-16 justify-end">
          <img src={logoImage} alt="logo" className="w-3/4 drop-shadow-2xl" />
          <h2 className="mt-16 text-white font-semibold drop-shadow-lg">
            A Beacon of Innovation in an Evolving Energy and Technology
            Landscape
          </h2>
        </div>
      </div>
      {/* <div
        className="bg-local flex flex-col w-full items-center"
        style={{
          backgroundImage:
            "url('https://www.aehlus.com/png/img12.f4ed389f.png')",
          backgroundSize: "cover",
        }}
      > */}
      <div className="row text-center">
        <h1>Mission Statement</h1>
        <h2>
          “To provide exceptional value to our customers in growing and evolving
          business segments driven by our commitment, passion and world-class
          talent.”
        </h2>
      </div>
      {/* </div> */}
      <div
        className="bg-local flex flex-col w-full items-center"
        style={{
          backgroundImage:
            "url('https://www.aehlus.com/png/img12.f4ed389f.png')",
          backgroundSize: "cover",
        }}
      >
        <div className="grid grid-cols-2 w-full py-8 3xl:py-16 4xl:py-20">
          <div className="col-span-1 flex justify-end">
            <div className="halfrow pt-32">
              <div className="flex flex-col p-8 bg-white shadow-lg rounded-xl">
                <h1 className="mb-4">A New Energy Solution for AI</h1>
                <p>
                  With data centers based in Texas, we are an emerging energy
                  supply business that aims to provide a low-cost solution to
                  the rapidly growing needs of both AI and cryptocurrency
                  sectors.
                </p>
                <div className="mr-auto mt-4">
                  <Button type="primary" size="large" onClick={handleNavToUS}>
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="border flex h-full items-center justify-center bg-white">
              AEHL US Energy Image
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 w-full py-8 3xl:py-16 4xl:py-20">
          <div className="col-span-1">
            <img
              src="https://images.squarespace-cdn.com/content/65f5178b7e5b446365b2d70a/449012af-b66b-4de0-b1a8-3d3e85b9196d/24990dd2bc453748013327e58d39340.jpg?content-type=image%2Fjpeg"
              alt="kylin img"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="halfrow col-span-1 flex justify-end items-end mt-32">
            <div className="flex flex-col p-8 bg-white shadow-lg rounded-xl">
              <h1 className="mb-4">The Live Streaming Commerce Frontier</h1>
              <p>
                Operating in China as Kylin Cloud, we aim to provide a one-stop
                solution in the rapidly growing field of livestream e-commerce.
                With over 600 billion RMB in annual transaction volume, we are
                at the very forefront of this revolution.
              </p>
              <div className="ml-auto mt-4">
                <Button type="primary" size="large" onClick={handleNavToKylin}>
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center">
      <div className="row">
        <div className="flex space-x-16">
          <div>
            <h1 className="mb-4">CEO Message</h1>
            <p className="text-slate-600">
              We primarily operate in two exciting business segments. I believe
              that there is a prosperous future ahead for the development of
              innovative energy solutions. The boom in the AI industry as well
              as cryptocurrency mining has led to a gap in the power supply and
              we believe that we can develop a cost-effective structure to
              bridge this gap. In terms of livestreaming ecommerce, Kylin Cloud
              serves as a beacon of innovation. We're not just providing a
              service, we're creating an environment where smaller influencers
              and brands thrive, bringing a much needed democratization to this
              sphere. I am confident that we will redefine the landscape of both
              of these evolving landscapes thereby deliver significant value to
              our shareholders.
            </p>
          </div>
          <img
            src={ceoImage}
            alt="ceo"
            className="w-1/4 object-cover rounded-md drop-shadow-md"
          />
        </div>
        <div className="flex flex-col items-end mt-8">
          <h3>Weilai "Will" Zhang</h3>
          <h3>AEHL Chairman and CEO</h3>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HomePage;
