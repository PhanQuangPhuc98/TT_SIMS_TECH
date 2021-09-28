import React, { ReactElement, useState } from "react";
import "../../Style/Header.css";
import images from "../../assets/images/images";
import { Link, NavLink } from "react-router-dom";
import { Path } from "../../Path/Path";
interface PropsHeader {
  children?: ReactElement;
  ShowMenuUser?: () => void;
}
const Header = (props: PropsHeader) => {
  const { ShowMenuUser } = props;
  return (
    <div className="Header">
      <div className="MenuResponisve" onClick={ShowMenuUser}>
        <span className="fas fa-bars"></span>
      </div>
      <div className="Menu">
        <div className="RouterMenu">
          {Path.map((item: any) => (
            <NavLink
              exact
              key={item.name}
              to={item.path}
              activeStyle={{ color: "#5d78ff" }}
              activeClassName="link-header"
              style={{ textDecoration: "none", color: "black" }}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className="Logo">
          <img src={images.ic_logo} height="30" width="80"></img>
        </div>
      </div>
      <div className="Option">
        <span>
          <i className="fas fa-search"></i>
          <i className="fas fa-shopping-bag"></i>
          <i className="far fa-user"></i>
        </span>
      </div>
    </div>
  );
};

export default Header;
