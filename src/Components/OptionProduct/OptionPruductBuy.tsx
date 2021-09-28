import React, { useCallback, useState } from "react";
import { Add_Comma } from "../../utils/FuncHelper";
import String from "../../constants/String";
import CircleOption from "../Option/CircleOption";
import "../../Style/Product.css";
import Button from "../Button/Button";
interface PropsOptionPruductBuy {
  Title?: string | any;
  Price?: string | any;
  Colors?: any[] | any;
  Size?: any[] | any;
  closeOptionBuy?: () => void;
  ShowBuy?: boolean;
}
const OptionPruductBuy = (props: PropsOptionPruductBuy) => {
  const { Title, Price, Colors, Size, closeOptionBuy, ShowBuy } = props;
  const [count, setCount] = useState(1);
  const [colorClick, setColorClick] = useState("");
  const [colorClickTitle, setColorClickTitle] = useState("");
  const RenderMinus = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const RenderPlus = () => {
    setCount(count + 1);
  };
  const RenderColorBorder = useCallback((item) => {
    setColorClick(item);
  }, []);
  const RenderColorBorderTitle = useCallback((item) => {
    setColorClickTitle(item);
  }, []);
  return (
    <div
      className="OptionPruductBuy"
      style={{
        transform: ShowBuy === false ? "translateX(0%)" : "translateX(-200%)",
        opacity: ShowBuy === false ? "1" : "0",
      }}
    >
      <div className="CloseOptionBuy" onClick={closeOptionBuy}>
        <span className="far fa-times-circle"></span>
      </div>
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
  );
};

export default OptionPruductBuy;
