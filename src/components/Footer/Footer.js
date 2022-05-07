import React from "react";
import "./Footer.css";
import logo from "../../img/logo.png";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram";
const Footer = () => {
  return (
    <div className="third-color-bg">
      <div className="flex flex-col md:flex-row text-center md:text-left justify-between items-center container mt-8 p-5 mx-auto ">
        <div className="w-[100px] mx-auto md:mx-0 mb-3 md:mb-0">
          <img className="w-full" src={logo} alt="" />
        </div>
        <div className="primary-color-text flex flex-col my-3 md:my-0">
          <div className="flex items-center">
            <span className="mr-2">
              <FaFacebook></FaFacebook>
            </span>
            <p>Facebook</p>
          </div>
          <div className="flex items-center">
            <span className="mr-2">
              <AiOutlineTwitter></AiOutlineTwitter>
            </span>
            <p>Twitter</p>
          </div>
          <div className="flex items-center">
            <span className="mr-2">
              <AiFillInstagram></AiFillInstagram>
            </span>
            <p>Instagram</p>
          </div>
        </div>
        <div className="primary-color-text w-[300px]">
            <p>Phone: +8801688861610</p>
            <p>Email: hasan.md.east@gmail.com</p>
            <br />
            <p>Address: House: 35, Road: 12, Gulshan, Dhaka</p>
            <p className="text-center md:text-left mt-2">
        &copy; Dhaka Bakery
      </p>
        </div>
      </div>

    </div>
  );
};

export default Footer;
