import React from "react";
import {
  FooterColum1,
  FooterColum2,
  FooterColum3,
  FooterColum4,
} from "../../constants/Mockup";
import "../../Style/Footer.css";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="SupportCall">
        <div>
          <label className="FooterTitle">
            {FooterColum1.Support_call_center}
          </label>
        </div>
        <div>
          <label>{FooterColum1.Contact}</label>
          <label className="Phone">0123456789</label>
        </div>
        <div>
          <label>{FooterColum1.Wonder}</label>
          <label className="Phone">0123456789</label>
        </div>
        <div>
          <label>{FooterColum1.Feedback}</label>
          <label className="Phone">0123456789</label>
        </div>
      </div>
      <div className="IntroduceVolo">
        <p className="FooterTitle">{FooterColum2.Introduce_YOLO}</p>
        <p>{FooterColum2.Introduce}</p>
        <p>{FooterColum2.Contact}</p>
        <p>{FooterColum2.recruitment}</p>
        <p>{FooterColum2.News}</p>
        <label>{FooterColum2.Shop_system}</label>
      </div>
      <div className="SupportUser">
        <p className="FooterTitle">{FooterColum3.Support_User}</p>
        <p>{FooterColum3.Policy_change}</p>
        <p>{FooterColum3.Policy_insurance}</p>
        <p>{FooterColum3.Policy_refund}</p>
      </div>
      <div className="LogoLoYo">
        <img src={FooterColum4.Logo} height="30" width="80"></img>
        <p>{FooterColum4.Content}</p>
      </div>
    </div>
  );
};

export default Footer;
