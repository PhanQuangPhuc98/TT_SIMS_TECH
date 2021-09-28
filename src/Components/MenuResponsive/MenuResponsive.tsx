import React, { useState } from "react";
import "../../Style/MenuResponsive.css";
import TextInput from "../TextInput/TextInput";
import { Link, NavLink } from "react-router-dom";
import { Path } from "../../Path/Path";
interface PropsMenuResponsive {
  Show?: boolean | any;
  Close?: () => void;
}
const MenuResponsive = (props: PropsMenuResponsive) => {
  const { Show, Close } = props;
  return (
    <div
      className="ContainerResponsive"
      style={{
        transform: Show === false ? "translateX(0%)" : "translateX(-200%)",
        opacity: Show === false ? "1" : "0",
      }}
    >
      <div className="HeaderResponsive">
        <div className="Close">
          <span className="fas fa-times" onClick={Close}></span>
        </div>
        <div className="HeaderSearch">
          <TextInput
            type="text"
            ChangeTextInput="ChangeTextInputResponsive"
            placeholder="Tìm kiếm sản phẩm"
          />
          <div className="IconSearchResponsive">
            <i className="fas fa-search"></i>
          </div>
        </div>
      </div>
      <div className="ContentResponsive">
        <div>
          {Path.map((item: any) => (
            <div className="LinkResponsive" key={item.name}>
              <NavLink
                exact
                to={item.path}
                activeStyle={{ color: "#5d78ff" }}
                activeClassName="link-header"
                style={{ textDecoration: "none", color: "black" }}
              >
                <span className={item.icon}></span>
                {item.name}
              </NavLink>
            </div>
          ))}
        </div>
        <div className="OptionResponsive">
          <div>
            <i className="fas fa-shopping-bag"></i>
            <label>Đơn hàng của bạn</label>
          </div>
          <div>
            <i className="far fa-user"></i>
            <label>Thông tin cá nhân</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuResponsive;
