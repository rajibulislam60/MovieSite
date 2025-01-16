import React from "react";

const Footer = () => {
  return (
    <div className="bg-blue-950 text-white">
      <div className="container">
        <div className="flex justify-around items-center py-10">
          <div className="text-center">
            <h2 className="text-[24px] font-bold leading-7">Secret Movie</h2>
            <button className="bg-white text-blue-950 px-4 py-2 rounded-md mt-4 font-medium">JOIN THE COMMINITY</button>
          </div>
          <div className="flex gap-[120px]">
            <div>
              <h4 className="text-[18px] font-semibold mb-2">The Basics</h4>
              <ul>
                <li>About</li>
                <li>Contact Us</li>
                <li>Support Forms</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[18px] font-semibold mb-2">Legal</h4>
              <ul>
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
                <li>DMCA Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
