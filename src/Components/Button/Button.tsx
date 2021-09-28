import React from "react";
import "../../Style/Button.css";
interface PropButton {
  Onclick?: () => void;
  Content?: string;
  Style?: string;
  ContentStyle?: string;
}
const Button = (props: PropButton) => {
  const { Onclick, Content, Style, ContentStyle } = props;
  return (
    <div className={Style ? Style : "CotainerButton"}>
      <button
        onClick={Onclick}
        className={ContentStyle ? ContentStyle : "Button"}
      >
        {Content}
      </button>
    </div>
  );
};

export default Button;
