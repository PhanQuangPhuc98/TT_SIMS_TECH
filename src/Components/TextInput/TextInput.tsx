import React from "react";
import "../../Style/TextInput.css";

interface PropInput {
  type?: string;
  title?: string;
  values?: string;
  placeholder?: string;
  EyePass?: string;
  ChangeTextInput?: string;
  EyeShowPass?: string;
  ShowPass?: boolean;
  Onchange?: () => void;
  Onclick?: () => void;
}
const TextInput = (props: PropInput) => {
  const {
    type,
    placeholder,
    EyePass,
    ShowPass,
    EyeShowPass,
    title,
    values,
    Onchange,
    Onclick,
    ChangeTextInput,
  } = props;
  return (
    <div className={ChangeTextInput ? ChangeTextInput : "Input"}>
      <input
        type={type}
        placeholder={placeholder}
        value={values}
        onChange={Onchange}
      />
      <label id="NameProduct">{title}</label>
      <span
        className={ShowPass ? EyePass : EyeShowPass}
        onClick={Onclick}
      ></span>
    </div>
  );
};

export default TextInput;
