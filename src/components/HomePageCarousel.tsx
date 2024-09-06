import React from "react";
import { Carousel } from "antd";

import HomePageBanner from "./banner/HomePageBanner";
import AehlUsBanner from "./banner/AehlUsBanner"
import AehlKylinBanner from "./banner/AehlKylinBanner";
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
      <Carousel autoplay arrows draggable adaptiveHeight={true}>
        <div className="h-[60vh]">
          <Link href="/">
            <HomePageBanner />
          </Link>
        </div>
        <div className="h-[60vh]">
        <Link href="/">
            <AehlUsBanner />
          </Link>
        </div>
        <div className="h-[60vh]">
          <AehlKylinBanner/>
        </div>
      </Carousel>
    </div>
  );
}
