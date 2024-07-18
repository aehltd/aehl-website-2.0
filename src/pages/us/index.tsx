import React from "react";
import logoImage from "../../assets/companylogo/大白色.png";

const USOverview = () => {
  return (
    <div id="container" className="container">
      <div
        className="relative flex w-full h-[80vh] justify-center"
    
      >
        <div className="absolute inset-0 bg-cover bg-center" 
        style={{
          backgroundImage:
            "url('https://www.aehlus.com/png/img1.c6bbf8d2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}></div>
        <div className="absolute inset-0 bg-slate-500 opacity-25"></div>
        <div className="relative z-10 flex flex-col items-center justify-center space-y-16">
            <img src={logoImage} alt="Logo" className="w-1/2 drop-shadow-2xl"/>
            <h1 className="text-white font-bold drop-shadow-2xl">
              Next Generation Infrastructure to Power{" "}
              <span className="text-green-500">AI</span>
            </h1>
        </div>
      </div>

      <div className="flex row">
        <div className="w-1/2 flex flex-col space-y-2">
          <h1 className="">Vision & Mission</h1>
          <div>
            <h3>Quick Reaction</h3>
            <p>
              Constructing a comprehensive industry-wide model covering from the
              energy sector to the AI end.
            </p>
          </div>
          <div>
            <h3>Adapt to Changes</h3>
            <p>
              Resolving the interest conflicts among various stakeholders in the
              supply chain.
            </p>
          </div>
          <div>
            <h3>Act Immediately</h3>
            <p>
              Rapidly constructing infrastructure to address the issue of power
              shortages
            </p>
          </div>
          <div>
            <h3>Result-Driven</h3>
            <p>
              Security barriers for technology infrastructure with significant
              cost competitive advantages
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center m-8 mr-0 border w-1/2">
          Image
        </div>
      </div>

      <div
        className="bg-local flex w-full justify-center"
        style={{
          backgroundImage:
            "url('https://www.aehlus.com/png/img12.f4ed389f.png')",
          backgroundSize: "cover",
        }}
      >
        <div className="row">
          <h1 className="mb-4">Our Strengths</h1>
          <div className="flex space-x-4">
            <div className="relative w-1/4">
              <img
                className="object-cover w-full h-full"
                src="https://www.aehlus.com/png/Strengths-1.a36a67d4.png"
                alt="bg"
              />
              <div className="absolute inset-0 bg-custom-gradient"></div>
              <div className="absolute inset-5 flex flex-col items-center justify-end text-center">
                <h3 className="text-white drop-shadow-md font-semibold">
                  Consistent Service
                </h3>
                <p className="text-white drop-shadow-md">
                  Tech operations companies generally do not switch service
                  providers easily
                </p>
              </div>
            </div>
            <div className="relative w-1/4">
              <img
                className="object-cover w-full h-full"
                src="https://www.aehlus.com/png/Strengths-2.b90e5967.png"
                alt="bg"
              />
              <div className="absolute inset-0 bg-custom-gradient"></div>
              <div className="absolute inset-5 flex flex-col items-center justify-end text-center">
                <h3 className="text-white drop-shadow-md font-semibold">
                  Stability
                </h3>
                <p className="text-white drop-shadow-md">
                  Consistent and stable power supply is the core of
                  technological infrastructure
                </p>
              </div>
            </div>
            <div className="relative w-1/4">
              <img
                className="object-cover w-full h-full"
                src="https://www.aehlus.com/png/Strengths-3.9e5a1c57.png"
                alt="bg"
              />
              <div className="absolute inset-0 bg-custom-gradient"></div>
              <div className="absolute inset-5 flex flex-col items-center justify-end text-center">
                <h3 className="text-white drop-shadow-md font-semibold">
                  Profit Share
                </h3>
                <p className="text-white drop-shadow-md">
                  Balancing interests in energy, power generation, transmission,
                  infrastructure & server operations
                </p>
              </div>
            </div>
            <div className="relative w-1/4">
              <img
                className="object-cover w-full h-full"
                src="https://www.aehlus.com/png/Strengths-4.d4502d8c.png"
                alt="bg"
              />
              <div className="absolute inset-0 bg-custom-gradient"></div>
              <div className="absolute inset-5 flex flex-col items-center justify-end text-center">
                <h3 className="text-white drop-shadow-md font-semibold">
                  Maximizing Profit
                </h3>
                <p className="text-white drop-shadow-md">
                  Maximizing value in digital infrastructure industry
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="inline-flex row justify-between">
        <img
          className="w-[45%] object-cover h-full"
          src="https://www.aehlus.com/png/img6.c41aed10.png"
          alt="bg"
        />
        <div className="flex flex-col w-[45%] justify-center">
          <h2>Team</h2>
          <p>
            Our team has extensive experience in technology infrastructure, with
            members coming.
          </p>
          <p>
            Our expertise includes data center construction,high-performance
            computing operations, and natural resource hedging.
          </p>
        </div>
      </div>
    </div>
  );
};

export default USOverview;
