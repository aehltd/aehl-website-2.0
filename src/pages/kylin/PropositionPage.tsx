import React from "react";
import red from "../../assets/logos/小红书.png";
import kuaishou from "../../assets/logos/快手.png";
import jingdong from "../../assets/logos/京东.png";
import toutiao from "../../assets/logos/今日头条.png";
import douyin from "../../assets/logos/抖音.png";
import tiktok from "../../assets/logos/TikTok.png";
import bilibili from "../../assets/logos/哔哩哔哩.png";
import xigua from "../../assets/logos/西瓜视频.png";

const KylinValuePropositionPage = () => {
  return (
    <div id="container" className="container">
      <div
        className="bg-local flex w-full h-[80vh] justify-center"
        style={{
          backgroundImage:
            "url('https://images.squarespace-cdn.com/content/65f5178b7e5b446365b2d70a/585c5fdd-4198-4d3c-b0b4-d7a9d6aac4e9/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20230601145549.jpg?content-type=image%2Fjpeg')",
          backgroundSize: "cover",
        }}
      ></div>

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
      <div className="bg-stone-400 flex w-full justify-center">
        <div className="row text-center">
          <h1 className="text-white font-semibold mb-8">
            Collaborating Live Streaming Platforms
          </h1>
          <div className="flex w-full justify-center items-center space-x-8">
            <img src={red} alt="小红书" />
            <img src={kuaishou} alt="快手" />
            <img src={jingdong} alt="京东" />
            <img src={toutiao} alt="头条" />
          </div>
          <div className="flex w-full justify-center items-center space-x-8">
            <img src={douyin} alt="抖音" />
            <img src={tiktok} alt="TikTok" />
            <img src={bilibili} alt="哔哩哔哩" />
            <img src={xigua} alt="西瓜视频" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KylinValuePropositionPage;
