import React from "react";
import { Collapse } from "antd";
const { Panel } = Collapse;

const KylinModelPage = () => {
  return (
    <div id="container" className="container">
      <div
        className="bg-local flex w-full h-[40vh] bg-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.squarespace-cdn.com/content/65f5178b7e5b446365b2d70a/24942941-dc52-4b21-afd5-1143691ddbdd/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20230601145557.jpg?content-type=image%2Fjpeg')",
          backgroundSize: "cover ",
        }}
      ></div>
      <div className="flex row flex-col">
        <h1>Business Model</h1>
        <div className="flex flex-col-reverse md:flex-row">
          <div className="flex md:w-1/2">
            <p>
              At AEHL, we focus on enabling B-end manufacturers and C-end
              talents to realize their economic value through live streaming
              platforms, social e-commerce, online education, and other
              platforms. We provide integrated technology and service support
              for the three parties in the new business ecosystem, offering
              business opportunity matching, employment security, and new
              business micro-entrepreneurship services for product manufacturers
              and new business micro-entrepreneurs.
            </p>
          </div>
          <div className="flex items-center justify-center my-4 md:ml-8 md:w-1/2">
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "0px",
                paddingBottom: "56.250%",
              }}
            >
              <iframe
                title="Kylin Model Video"
                allow="fullscreen"
                allowFullScreen
                height="100%"
                src="https://streamable.com/e/i4rur7"
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
        </div>
      </div>
      <div
        className="flex bg-local w-full justify-center"
        style={{
          backgroundImage:
            "url('https://www.aehlus.com/png/img12.f4ed389f.png')",
          backgroundSize: "cover",
        }}
      >
        <div className="flex row flex-col">
          <h1>Our Services</h1>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="flex items-center justify-center my-4 md:mr-8 w-full md:w-1/2">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "0px",
                  paddingBottom: "56.250%",
                }}
              >
                <iframe
                  title="Kylin BBP Video"
                  allow="fullscreen"
                  allowFullScreen
                  height="100%"
                  src="https://streamable.com/e/v3zyhb?"
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
            <div className="w-full md:w-1/2">
              <Collapse accordion>
                <Panel header="Talent Matching" key="1">
                  <p>
                    With a pool of over 400,000 live streamers and influencers,
                    which is rapidly growing, we provide businesses with the
                    most accurate and tailored collaboration solutions.
                  </p>
                </Panel>
                <Panel header="KylinCloud BBP Model" key="2">
                  <p>
                    We are the industry's first to introduce the KylinCloud BBP
                    (Business-to-Business-to-Person) model, making it easier
                    than ever for businesses to connect with the right talents
                    and manage their e-commerce campaigns.
                  </p>
                </Panel>
                <Panel header="Full-Process Monitoring" key="3">
                  <p>
                    Our comprehensive monitoring system ensures the safety and
                    security of tasks and funds, giving our clients peace of
                    mind throughout the collaboration process.
                  </p>
                </Panel>
                <Panel header="Cost-Effective Solutions" key="4">
                  <p>
                    On average, we help our clients save over 8% in costs,
                    making our services not only efficient but also
                    cost-effective.
                  </p>
                </Panel>
              </Collapse>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KylinModelPage;
