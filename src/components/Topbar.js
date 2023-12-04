import React from "react";
import logo from "../assets/images/img_2.png";

import { FaQuestionCircle } from "react-icons/fa";
import { GoBell } from "react-icons/go";
import { BsPersonCircle } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";

const Topbar = () => {
  return (
    <div className="topbar ">
      <div className="topbarLogo">
        <img src={logo} />
      </div>
      <div className="icons">
        <FaQuestionCircle />
        <div>
        <GoBell />
        <span className="Badge">3</span>
        </div>
        <BsPersonCircle size={25} />
        <div style={{fontSize:'13px'}}>Ron kilagarlin</div>
        <MdKeyboardArrowDown />
      </div>
    </div>
  );
};

export default Topbar;
