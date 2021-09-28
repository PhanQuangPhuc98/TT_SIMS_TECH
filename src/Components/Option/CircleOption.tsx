import React from "react";
import "../../Style/Option.css";
interface PropCircle {
  title?: any | string;
  ColorPaddingChange?: string;
  Color?: string;
  OnChangeColor?: any;
  ChangeCorlorBorder?: string | any;
  OnChangeColorTitle?: any;
}

const CircleOption = (props: PropCircle) => {
  const {
    title,
    Color,
    ColorPaddingChange,
    ChangeCorlorBorder,
    OnChangeColor,
    OnChangeColorTitle,
  } = props;
  console.log(ChangeCorlorBorder);

  return (
    <div
      className="Circle"
      style={{
        border:
          ChangeCorlorBorder == Color || ChangeCorlorBorder == title
            ? "2px solid #5d78ff"
            : "2px solid #949399",
      }}
      onClick={() => {
        OnChangeColor(Color ? Color : title);
      }}
    >
      <div
        style={{ backgroundColor: `${Color}` }}
        className={ColorPaddingChange ? ColorPaddingChange : "CirclePadding"}
      >
        <label className="CenterCircle">{title}</label>
      </div>
    </div>
  );
};

export default CircleOption;
