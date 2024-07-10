import React from "react";

const ContactPage = () => {
  return (
    <div id="container" className="container">
      <div className="flex row space-x-8">
        <div className="flex flex-col w-[40%]">
          <div className="w-3/4 mx-auto my-auto text-center space-y-4">
            <h1>Contact Us</h1>
            <div>
              <h2>Phone</h2>
              <p>+1 (838) 500 - 8888</p>
            </div>
            <div>
              <h2>Office</h2>
              <p>
                Suite 7540, The Empire State Building, 350 Fifth Ave, New York,
                New York, 10118
              </p>
            </div>
            <div>
              <h2>Hours</h2>
              <p>Monday–Friday</p>
              <p>10am–6pm</p>
            </div>
            <div>
              <h2>Email</h2>
              <p>ir@aehltd.com</p>
            </div>
          </div>
        </div>
        <div className="w-[60%] h-[500px]">
          <iframe
            src="https://maps.google.com/maps?q=350+5th+Ave,+New+York,+NY+10118&hl=en&z=17&output=embed"
            className="h-full w-full"
          ></iframe>
        </div>
      </div>
      <div
        className="flex bg-local w-full justify-center"
        style={{
          backgroundImage:
            "url('https://www.aehlus.com/png/img12.f4ed389f.png')",
        }}
      >
        <div className="row">{/* TODO: Add contact email form */}</div>
      </div>
    </div>
  );
};

export default ContactPage;
