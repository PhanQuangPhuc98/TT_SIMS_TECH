import React, { useEffect, useState, useCallback } from "react";
import CircleOption from "../Option/CircleOption";
import Button from "../Button/Button";
import "../../Style/Product.css";
import String from "../../constants/String";
import OptionPruductBuy from "../OptionProduct/OptionPruductBuy";
import { Add_Comma } from "../../utils/FuncHelper";
import { DataDetailProduct } from "../../constants/Mockup";
interface PropsDetailProduct {
  Title?: string | any;
  Price?: string | any;
  Image01?: string | any;
  Image02?: string | any;
  Colors?: any[] | any;
  Size?: any[] | any;
}
const DetailProduct = (props: PropsDetailProduct) => {
  const [showImage, setShowImgae] = useState(true);
  const [count, setCount] = useState(1);
  const [colorClick, setColorClick] = useState("");
  const [colorClickTitle, setColorClickTitle] = useState("");
  const [showInfor, setShowInfor] = useState(true);
  const [showOptionBuy, setShowOptionBuy] = useState(true);
  const RenderMinus = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const RenderPlus = () => {
    setCount(count + 1);
  };
  const RenderImage = () => {
    setShowImgae(!showImage);
  };
  const RenderShowInfor = () => {
    setShowInfor(!showInfor);
  };
  const RenderColorBorder = useCallback((item) => {
    setColorClick(item);
  }, []);
  const RenderColorBorderTitle = useCallback((item) => {
    setColorClickTitle(item);
  }, []);
  const RenderOptionBuy = () => {
    setShowOptionBuy(!showOptionBuy);
  };
  const { Title, Price, Image01, Image02, Colors, Size } = props;
  return (
    <div className="DetailProduct">
      <OptionPruductBuy
        Title={Title}
        ShowBuy={showOptionBuy}
        Colors={Colors}
        Price={Price}
        closeOptionBuy={RenderOptionBuy}
        Size={Size}
      />
      <div className="DetailProductLeft">
        <div className="ImageDetailProduct">
          <div className="ImageDetailProductLeft">
            <div>
              <img src={Image01} onClick={RenderImage}></img>
            </div>
            <div>
              <img src={Image02} onClick={RenderImage}></img>
            </div>
          </div>
          <div className="ImageDetailProductRight">
            <img
              src={Image01}
              style={{ display: `${showImage ? "block" : "none"}` }}
            ></img>
            <img
              src={Image02}
              style={{ display: `${!showImage ? "block" : "none"}` }}
            ></img>
          </div>
        </div>
        <div className="ButtonResponsive">
          <Button
            Style="StyleButtonDetail"
            ContentStyle="ButtonDetailProduct"
            Content="MUA NGAY"
            Onclick={RenderOptionBuy}
          />
        </div>
        <div className="Product_Description">
          <label className="TitleDetailProduct">{String.DetailProduct}</label>
          <label>{DataDetailProduct.Content}</label>
          <label style={{ display: showInfor ? "initial" : "none" }}>
            {DataDetailProduct.Content1}
          </label>
          <label style={{ display: showInfor ? "initial" : "none" }}>
            {DataDetailProduct.Content2}
          </label>
          <label style={{ display: showInfor ? "initial" : "none" }}>
            {DataDetailProduct.Content3}
          </label>
        </div>
        <div className="Collapse">
          <Button
            Style="StyleButtonCollapse"
            ContentStyle="ButtonDetailProduct"
            Content={showInfor === true ? "THU GỌN" : "MỞ RỘNG"}
            Onclick={RenderShowInfor}
          />
        </div>
      </div>
      <div className="DetailProductRight">
        <label className="InforProductTitle">{Title ? Title : ""}</label>
        <label className="InforPrice">{Add_Comma(Price)}</label>
        <label className="InforProduct">{String.Color}</label>
        <div style={{ display: "flex" }}>
          {Colors.map((item: any) => (
            <CircleOption
              OnChangeColor={RenderColorBorder}
              ChangeCorlorBorder={colorClick}
              Color={item}
            />
          ))}
        </div>
        <label className="InforProduct">{String.Size}</label>
        <div style={{ display: "flex" }}>
          {Size.map((item: any) => (
            <CircleOption
              OnChangeColor={RenderColorBorderTitle}
              ChangeCorlorBorder={colorClickTitle}
              title={item.toUpperCase()}
            />
          ))}
        </div>
        <label className="InforProduct">{String.Quantity}</label>
        <div className="ContainerCount">
          <span className="fas fa-minus" onClick={RenderMinus}></span>
          <div className="TotalCount">{count}</div>
          <span className="fas fa-plus" onClick={RenderPlus}></span>
        </div>
        <div className="OptinProductDetail">
          <Button
            Style="StyleButtonDetail"
            ContentStyle="ButtonDetailProduct"
            Content="THÊM VÀO GIỎ"
          />
          <Button
            Style="StyleButtonDetail"
            ContentStyle="ButtonDetailProduct"
            Content="MUA NGAY"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
