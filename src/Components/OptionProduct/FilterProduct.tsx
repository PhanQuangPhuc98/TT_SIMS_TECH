import React from "react";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import "../../Style/OptionProduct.css";
interface PropFilter {
  FilterChange?: string | any;
  showFilter?: boolean;
  closeFilter?: () => void;
}
const FilterProduct = (props: PropFilter) => {
  const { FilterChange, showFilter, closeFilter } = props;
  return (
    <div
      className={FilterChange ? FilterChange : "Filter"}
      style={{
        transform:
          showFilter === false ? "translateX(0%)" : "translateX(-120%)",
        opacity: showFilter === false ? "1" : "0",
      }}
    >
      <div className="CloseFilter" onClick={closeFilter}>
        <span className="far fa-times-circle"></span>
      </div>
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

export default FilterProduct;
