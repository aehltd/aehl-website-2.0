import React from "react";

const ContactPage = () => {
  return (
    <div id="container" className="container">
      <div
        className="bg-local flex w-full h-[65vh] justify-center"
        style={{
          backgroundImage:
            "url('https://www.aehlus.com/png/img3.0cd01d99.png')",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-white text-7xl mb-6 drop-shadow-lg">Join AEHL</h1>
        </div>
      </div>
      <div className="row">
        <div className="flex space-x-8">
          <div className="flex flex-col w-[40%]">
            <h1>Contact Us</h1>
            <div className="flex flex-col mt-auto h-4/5 justify-evenly">
              <div>
                <h2>Phone</h2>
                <p>+1 (838) 500 - 8888</p>
              </div>
              <div>
                <h2>Office</h2>
                <p>
                  Suite 7540, The Empire State Building, 350 Fifth Ave, New
                  York, New York, 10118
                </p>
              </div>
              <div>
                <h2>Hours</h2>
                <p>Monday–Friday</p>
                <p>10am–6pm</p>
              </div>
              <div>
                <h2>Investor Relations</h2>
                <p>+1 (646) 694 - 8538</p>
                <p>ir@aehltd.com</p>
              </div>
            </div>
          </div>
          <div className="w-[60%] h-[60vh]">
            <iframe
              title="AEHL Location"
              src="https://maps.google.com/maps?q=350+5th+Ave,+New+York,+NY+10118&hl=en&z=17&output=embed"
              className="h-full w-full"
            ></iframe>
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
        <div className="flex flex-col row items-center">
          <p className="">
            If you are interested in working with AEHL and joining us in our
            exciting future, please fill in the information below.
          </p>
          <div className="flex border m-8 h-96 w-96 bg-white items-center justify-center">
            <p>Email form</p>
            {/* TODO: Add contact email form */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
