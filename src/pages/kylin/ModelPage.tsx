import React from "react";
import { Collapse } from "antd";
const { Panel } = Collapse;

const KylinModelPage = () => {
  return (
    <div id="container" className="container">
      <img
        src="https://images.squarespace-cdn.com/content/65f5178b7e5b446365b2d70a/24942941-dc52-4b21-afd5-1143691ddbdd/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20230601145557.jpg?content-type=image%2Fjpeg"
        alt="bg"
      />
      <div className="flex row space-x-8">
        <div>
          <h2>About Us</h2>
          <p>
            Antelope Enterprise Holdings Limited (AEHL) is a NASDAQ-listed
            company that specializes in the vertical integration of social
            e-commerce and live streaming e-commerce. Our mission is to create a
            one-stop service platform that addresses the needs of businesses in
            the new era of e-commerce promotion and connects them with the live
            streaming talent community.
          </p>
        </div>
        <div>
          <h2>Our Business</h2>
          <p>
            At AEHL, we focus on enabling B-end manufacturers and C-end talents
            to realize their economic value through live streaming platforms,
            social e-commerce, online education, and other platforms. We provide
            integrated technology and service support for the three parties in
            the new business ecosystem, offering business opportunity matching,
            employment security, and new business micro-entrepreneurship
            services for product manufacturers and new business
            micro-entrepreneurs.
          </p>
        </div>
        <div>
          <h2>Our Vision</h2>
          <p>
            We envision a future where businesses and live streaming talents can
            seamlessly connect and thrive in the new era of e-commerce. By
            leveraging cutting-edge technology and our extensive network, we aim
            to empower businesses and individuals to achieve their full
            potential in the digital economy.
          </p>
        </div>
      </div>
      <div
        className="flex bg-local w-full justify-center"
        style={{
          backgroundImage:
            "url('https://www.aehlus.com/png/img12.f4ed389f.png')",
        }}
      >
        <div className="flex row">
          <div className="flex items-center justify-center m-8 ml-0 border w-1/2">
            Image
          </div>
          <div className="w-1/2">
            <h1 className="mb-4">Our Services</h1>

            <Collapse accordion>
              <Panel header="Talent Matching" key="1">
                <p>
                  With a pool of over 400,000 live streamers and influencers,
                  which is rapidly growing, we provide businesses with the most
                  accurate and tailored collaboration solutions.
                </p>
              </Panel>
              <Panel header="KylinCloud BBP Model" key="2">
                <p>
                  We are the industry's first to introduce the KylinCloud BBP
                  (Business-to-Business-to-Person) model, making it easier than
                  ever for businesses to connect with the right talents and
                  manage their e-commerce campaigns.
                </p>
              </Panel>
              <Panel header="Full-Process Monitoring" key="3">
                <p>
                  Our comprehensive monitoring system ensures the safety and
                  security of tasks and funds, giving our clients peace of mind
                  throughout the collaboration process.
                </p>
              </Panel>
              <Panel header="Cost-Effective Solutions" key="4">
                <p>
                  On average, we help our clients save over 8% in costs, making
                  our services not only efficient but also cost-effective.
                </p>
              </Panel>
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KylinModelPage;
