import React from "react";

const HomePage = () => {
  return (
    <div id="container" className="container">
      <div
        className="bg-local flex w-full h-[65vh] justify-center border"
        style={{
          backgroundImage: "",

          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col items-center justify-center">
          <h3>Landing Image</h3>
        </div>
      </div>
      <div className="row">
        <h1>About Us</h1>
        <p>
          Antelope Enterprise Holding Limited (“Antelope Enterprise”) primarily
          consists of two business segments, an energy supply business and a
          livestreaming ecommerce business.
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
      </div>
      <div
        className="bg-local flex flex-col w-full items-center"
        style={{
          backgroundImage:
            "url('https://www.aehlus.com/png/img12.f4ed389f.png')",
          backgroundSize: "cover",
        }}
      >
        <div className="row">
          <h2>Mission Statement</h2>
          <p>
            “To provide exceptional value to our customers in growing and
            evolving business segments driven by our commitment, passion and
            world-class talent.”
          </p>
        </div>
        <div className="row">
          <h1>CEO Message</h1>
          <p>
            We primarily operate in two exciting business segments. I believe
            that there is a prosperous future ahead for the development of
            innovative energy solutions. The boom in the AI industry as well as
            cryptocurrency mining has led to a gap in the power supply and we
            believe that we can develop a cost-effective structure to bridge
            this gap. In terms of livestreaming ecommerce, Kylin Cloud serves as
            a beacon of innovation. We're not just providing a service, we're
            creating an environment where smaller influencers and brands thrive,
            bringing a much needed democratization to this sphere. I am
            confident that we will redefine the landscape of both of these
            evolving landscapes thereby deliver significant value to our
            shareholders.
          </p>
          <div className="flex flex-col items-end">
          <h3>Weilai "Will" Zhang</h3>
          <h3>AEHL Chairman and CEO</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
