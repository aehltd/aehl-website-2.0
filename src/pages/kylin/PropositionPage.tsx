import React from "react";

const KylinValuePropositionPage = () => {
  return (
    <div id="container" className="container">
      <img
        src="https://images.squarespace-cdn.com/content/65f5178b7e5b446365b2d70a/585c5fdd-4198-4d3c-b0b4-d7a9d6aac4e9/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20230601145549.jpg?content-type=image%2Fjpeg"
        alt="bg"
      />

      <div className="flex row">
        <div className="flex flex-col space-y-8 w-1/2 items-center">
          <div>
            <h1>600 Cities</h1>
            <p>Services in 600+ cities</p>
          </div>
          <div>
            <h1>3 Billion RMB</h1>
            <p>Annual transaction volume</p>
          </div>
          <div>
            <h1>120 Brands</h1>
            <p>Served 120+ major brands</p>
          </div>
        </div>
        <div className="flex items-center justify-center m-8 border w-1/2">
          Image
        </div>
      </div>
      <div
        className="bg-local flex w-full justify-center"
        style={{
          backgroundImage:
            "url('https://www.aehlus.com/png/img12.f4ed389f.png')",
        }}
      >
        <div className="row">
          <h2>We Are The Live Stream Commerce Frontier</h2>
          <p>
            Live stream e-commerce has become a mainstream trend,
            revolutionizing how businesses reach and engage customers. At
            Antelope Enterprise Holdings Limited, we are at the forefront of
            this transformation - providing cutting-edge technology and services
            that empower brands to thrive in this dynamic landscape.
          </p>
          <p>
            Our integrated platform seamlessly connects businesses with a vast
            network of broadcasters and influencers, unlocking new avenues for
            product promotion, customer acquisition, and sustained growth. With
            industry-leading solutions, unparalleled resources, and a relentless
            pursuit of innovation, we enable our partners to navigate the live
            stream commerce realm with confidence and succeed in captivating
            today's digital-savvy consumers.
          </p>
          <p>
            Join us on this pioneering journey, where revolutionary ideas meet
            innovative execution, and experience the future of e-commerce unfold
            before your eyes.
          </p>
        </div>
      </div>

      <div className="row text-center">
        <h2>Collaborating Live Streaming Platforms</h2>
        <p>RED Kuaishou JingDong TouTiao</p>
        <p>Douyin TikTok Bilibili Xigua</p>
      </div>
    </div>
  );
};

export default KylinValuePropositionPage;
