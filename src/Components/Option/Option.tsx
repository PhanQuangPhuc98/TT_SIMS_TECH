import React from "react";
import "../../Style/Option.css";
import policy from "../../assets/fake-data/policy";
import Iconify from "@iconify/iconify";
const Option = () => {
  return (
    <div className="ContainerOption">
      {policy.map((item: any) => (
        <div className="ContentOption" key={item.name}>
          <span className="iconify" data-icon={item.icon}></span>
          <div className="TitleOption">
            <div className="TitleName">
              <label>{item.name}</label>
            </div>
            <div className="Description">
              <label>{item.description}</label>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Option;
