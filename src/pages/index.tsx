import React from "react";
import { useNavigate } from "react-router-dom";
import landingImage from "../assets/3D.jpg";
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
      <div
        className="bg-local flex w-full h-[75vh] justify-center"
        style={{
          backgroundImage: `url(${landingImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex w-full h-full items-end p-16 justify-center">
          {/**Image Text Content */}
          <h2 className="text-white font-semibold drop-shadow-lg">
            A Beacon of Innovation in an Evolving Tech Landscape
          </h2>
        </div>
      </div>
      <div
        className="bg-local flex flex-col w-full items-center"
        style={{
          backgroundImage:
            "url('https://www.aehlus.com/png/img12.f4ed389f.png')",
          backgroundSize: "cover",
        }}
      >
        <div className="row text-center">
          <h1>Mission Statement</h1>
          <h2>
            “To provide exceptional value to our customers in growing and
            evolving business segments driven by our commitment, passion and
            world-class talent.”
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-2 w-full py-8 3xl:py-16 4xl:py-20">
        <div className="col-span-1 flex justify-end">
          <div className="halfrow pt-32">
            <h1 className="mb-4">A New Energy Solution Tailored for AI</h1>
            <p className="w-4/5">
              With data centers based in Texas, we are an emerging energy supply
              business that aims to provide a low-cost solution to the rapidly
              growing needs of both AI and cryptocurrency sectors.
            </p>
            <div className="mr-auto mt-4">
              <Button type="primary" size="large" onClick={handleNavToUS}>
                Learn More
              </Button>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="border flex h-full items-center justify-center">
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
        <div className="halfrow col-span-1 flex flex-col justify-end items-end mt-32">
          <h1 className="mb-4 text-end">
            The Live Streaming Commerce Frontier
          </h1>
          <p className="w-5/6 text-end">
            Operating in China as Kylin Cloud, we aim to provide a one-stop
            solution in the rapidly growing field of livestream e-commerce. With
            over 600 billion RMB in annual transaction volume, we are at the
            very forefront of this revolution.
          </p>
          <div className="ml-auto mt-4">
            <Button type="primary" size="large" onClick={handleNavToKylin}>
              Learn More
            </Button>
          </div>
        </div>
      </div>
      {/**
         * <div className="flex w-full justify-end relative">
          <img
            src="https://images.squarespace-cdn.com/content/65f5178b7e5b446365b2d70a/449012af-b66b-4de0-b1a8-3d3e85b9196d/24990dd2bc453748013327e58d39340.jpg?content-type=image%2Fjpeg"
            alt="kylin img"
            className="absolute top-0 left-0 w-1/2 h-full object-cover"
          />

          <div className="flex flex-col w-1/2 text-end ml-auto relative z-10">
            <h1>The Live Streaming Commerce Frontier</h1>
            <p>
              Operating in China as Kylin Cloud, we aim to provide a one-stop
              solution in the fast-growing field of livestream e-commerce.
              With over 600 billion RMB in annual transaction volume, we
              are at the very forefront of this revolution.
            </p>
            <div className="mx-auto mt-4">
              <Button type="primary" size="large">Learn More</Button>
            </div>
          </div>
        </div>
         */}
      {/* <div className="row">
        <h1>About Us</h1>
        <p>
          Antelope Enterprise Holding Limited (“Antelope Enterprise”) primarily
          consists of two business segments, an energy supply business based in the United States and a
          livestreaming ecommerce business based in China.
        </p>
      </div>
      <div className="flex row space-x-8">
        <div>
          <h2>Energy Supply Business</h2>
          <p>
            We are aiming to launch energy supply business through AEHL US,
            formerly known as Million Star US Inc. AEHL US has taken preliminary
            steps in developing this business including engaging a broker to
            source natural gas from natural gas provider in Texas and the
            procurement of electricity generators.
          </p>
          <p>
            AEHL US plans to supply power to a data center in Midland, Texas.
            This energy supply business began operation in the third quarter of
            2024. Further, AEHL US also plans to generate revenue by securing
            hosting sites for cryptocurrency mining operators as it leverages
            anticipated cost-effective electricity costs.
          </p>
        </div>
        <div>
          <h2>Livestreaming Ecommerce Business</h2>
          <p>
            Our livestreaming ecommerce business is operated in China through
            our 51% subsidiary, Hainan Kylin and provide one-stop solutions for
            our customers to adopt the emerging sales channel of livestreaming
            ecommerce. We believe that livestreaming ecommerce is an important
            growth engine for consumer good brands as it leverages the content
            of livestreaming to boost sales.
          </p>
          <p>
            Our customers usually include consumer goods brands, merchants, and
            small-scale ecommerce platforms. We grow and train our hosts and
            influencers to provide engaging content to livestream who then
            promote our customers’ products on various livestreaming platforms.
          </p>
        </div>
      </div> */}
      <div
        className="bg-local flex flex-col w-full items-center"
        style={{
          backgroundImage:
            "url('https://www.aehlus.com/png/img12.f4ed389f.png')",
          backgroundSize: "cover",
        }}
      >
        <div className="row">
          <div className="flex space-x-16">
            <div>
              <h1>CEO Message</h1>
              <p>
                We primarily operate in two exciting business segments. I
                believe that there is a prosperous future ahead for the
                development of innovative energy solutions. The boom in the AI
                industry as well as cryptocurrency mining has led to a gap in
                the power supply and we believe that we can develop a
                cost-effective structure to bridge this gap. In terms of
                livestreaming ecommerce, Kylin Cloud serves as a beacon of
                innovation. We're not just providing a service, we're creating
                an environment where smaller influencers and brands thrive,
                bringing a much needed democratization to this sphere. I am
                confident that we will redefine the landscape of both of these
                evolving landscapes thereby deliver significant value to our
                shareholders.
              </p>
            </div>
            <img src={ceoImage} alt="ceo" className="w-1/4 object-cover rounded-md drop-shadow-md" />
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
