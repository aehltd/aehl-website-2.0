import React from "react";
import { Carousel } from "antd";

import HomePageBanner from "./banner/HomePageBanner";
import AehlUsBanner from "./banner/AehlUsBanner";
import AehlKylinBanner from "./banner/AehlKylinBanner";
import AehlInvestorBanner from "./banner/AehlInvestorBanner";
import Link from "next/link";

const contentStyle: React.CSSProperties = {
  height: "60vh",
  color: "#fff",
  textAlign: "center",
  background: "#364d79",
};

export default function HomePageCarousel() {
  return (
    <div className="w-full h-[60vh]">
      <Carousel autoplay arrows adaptiveHeight={true}>
        <div className="h-[60vh]">
          <Link href="/">
            <HomePageBanner />
          </Link>
        </div>
        <div className="h-[60vh]">
          <Link href="/aehl-us/corporate-overview">
            <AehlUsBanner />
          </Link>
        </div>
        <div className="h-[60vh]">
          <AehlKylinBanner />
        </div>
        <div className="h-[60vh]">
          <Link href="/ir/our_values">          
            <AehlInvestorBanner />
          </Link>

        </div>
      </Carousel>
    </div>
  );
}
