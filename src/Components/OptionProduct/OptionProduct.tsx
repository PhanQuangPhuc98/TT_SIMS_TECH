import React from "react";
import "../../Style/OptionProduct.css";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
interface PropsOptionProduct {
  OptionProductChange?:string
}
const OptionProduct = (props:PropsOptionProduct) => {
  const {OptionProductChange}=props
  return (
    <div className={OptionProductChange?OptionProductChange:"OptionProduct"}>
      <div>
        <label className="OptionTitle">Danh Mục Sản Phẩm</label>
        <TextInput title="Áo thun" type="checkbox" />
        <TextInput title="Áo somi" type="checkbox" />
        <TextInput title="Quần jean" type="checkbox" />
      </div>
      <div>
        <label className="OptionTitle">Màu Sắc</label>
        <TextInput title="Trắng" type="checkbox" />
        <TextInput title="Hồng" type="checkbox" />
        <TextInput title="Đen" type="checkbox" />
        <TextInput title="Vàng" type="checkbox" />
        <TextInput title="Cam" type="checkbox" />
        <TextInput title="Xanh dương" type="checkbox" />
      </div>
      <div>
        <label className="OptionTitle">Kích Cỡ</label>
        <TextInput title="S" type="checkbox" />
        <TextInput title="M" type="checkbox" />
        <TextInput title="L" type="checkbox" />
        <TextInput title="XL" type="checkbox" />
        <TextInput title="XXL" type="checkbox" />
      </div>
      <Button
        Style="OptionProductButtonTop"
        ContentStyle="OptionProductButton"
        Content="Xóa Bộ Lọc"
      />
    </div>
  );
};

export default OptionProduct;
