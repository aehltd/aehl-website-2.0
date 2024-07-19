import React from "react";
import logoImage from "../../assets/companylogo/大白色.png";
import businessImage from "../../assets/6049046d97a5fe05f83d64ebfe1b7a4.jpg";
import { useNavigate } from "react-router-dom";
import red from "../../assets/logos/小红书.png";
import kuaishou from "../../assets/logos/快手.png";
import jingdong from "../../assets/logos/京东.png";
import toutiao from "../../assets/logos/今日头条.png";
import douyin from "../../assets/logos/抖音.png";
import tiktok from "../../assets/logos/TikTok.png";
import bilibili from "../../assets/logos/哔哩哔哩.png";
import xigua from "../../assets/logos/西瓜视频.png";
import { Button } from "antd";

const KylinOverviewPage = () => {
  const navigate = useNavigate();

  const handleNavToModel = () => {
    navigate("/aehl-kylin/model");
  };

  return (
    <div id="container" className="container">
      <div className="relative flex w-full h-[80vh] justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.squarespace-cdn.com/content/65f5178b7e5b446365b2d70a/585c5fdd-4198-4d3c-b0b4-d7a9d6aac4e9/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20230601145549.jpg?content-type=image%2Fjpeg')",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="absolute inset-0 bg-slate-500 opacity-25"></div>
        <div className="relative z-10 flex flex-col items-center justify-center space-y-16">
          <img src={logoImage} alt="Logo" className="w-1/2 drop-shadow-2xl" />
          <h1 className="text-white font-semibold drop-shadow-2xl">
            The Future of Livestreaming Ecommerce
          </h1>
        </div>
      </div>

      <div className="flex row">
        <div className="flex w-full justify-evenly items-center">
          <div className="flex flex-col items-center p-8 border-2 rounded-md shadow-md">
            <span className="material-icons-outlined text-8xl text-gray-500">
              apartment
            </span>
            <h1>600 Cities</h1>
            <p>Services in 600+ cities</p>
          </div>
          <div className="flex flex-col items-center p-8 border-2 rounded-md shadow-md">
            <span className="material-icons-outlined text-8xl text-gray-500">
              currency_yuan
            </span>
            <h1>3 Billion RMB</h1>
            <p>Annual transaction volume</p>
          </div>
          <div className="flex flex-col items-center p-8 border-2 rounded-md shadow-md">
            <span className="material-icons-outlined text-8xl text-gray-500">
              trending_up
            </span>
            <h1>120 Brands</h1>
            <p>Served 120+ major brands</p>
          </div>
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
          <div className="flex items-center justify-center ml-0 mb-4">
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "0px",
                paddingBottom: "42.656%",
              }}
            >
              <iframe
                title="Kylin Tour Video"
                allow="fullscreen"
                allowFullScreen
                height="100%"
                src="https://streamable.com/e/19gy9c?"
                width="100%"
                style={{
                  border: "none",
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  left: "0px",
                  top: "0px",
                  overflow: "hidden",
                }}
              ></iframe>
            </div>
          </div>
          <div>
            <h1>Our Vision</h1>
            <p className="text-gray-700">
              Live stream e-commerce has become a mainstream trend,
              revolutionizing how businesses reach and engage customers. We
              envision a future where businesses and live streaming talents can
              seamlessly connect and thrive in this new era of e-commerce. At
              Antelope Enterprise Holdings Limited, we are at the forefront of
              this transformation - By leveraging cutting-edge technology and
              our extensive network, we aim to empower businesses and
              individuals to achieve their full potential in the digital
              economy.
            </p>
          </div>
        </div>
      </div>
      <div className="flex row">
        <div className="flex items-center justify-center m-8 ml-0 mb-0 border w-1/2 bg-white">
          <img
            src={businessImage}
            alt="business"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/2 text-end">
          <h1>Our Business</h1>
          <p>
            Our integrated platform seamlessly connects businesses with a vast
            network of broadcasters and influencers, unlocking new avenues for
            product promotion, customer acquisition, and sustained growth. With
            industry-leading solutions, unparalleled resources, and a relentless
            pursuit of innovation, we enable our partners to navigate the live
            stream commerce realm with confidence and succeed in captivating
            today's digital-savvy consumers.
          </p>
          <div className="ml-auto mt-4">
            <Button type="primary" size="large" onClick={handleNavToModel}>
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-slate-400 flex w-full justify-center">
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

export default KylinOverviewPage;
