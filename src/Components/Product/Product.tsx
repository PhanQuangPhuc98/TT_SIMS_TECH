import React, { useMemo } from "react";
import "../../Style/Product.css";
import Button from "../Button/Button";
import products from "../../assets/fake-data/products";
import { Link } from "react-router-dom";
import { getData } from "../../Redux/Actions/index";
import { connect } from "react-redux";
import { Add_Comma } from "../../utils/FuncHelper";
interface PropsProduct {
  Title?: string;
  Colum?: number;
  ContainerChange?: string;
  ContentProductChange?: string;
  TitleProductChange?: string;
}
const Product = React.memo(({ ...props }: PropsProduct) => {
  const {
    Title,
    Colum,
    ContainerChange,
    ContentProductChange,
    TitleProductChange,
  } = props;
  return (
    <div className="Product">
      <div className={TitleProductChange ? TitleProductChange : "TitleProduct"}>
        <label>{Title}</label>
      </div>
      <div className={ContainerChange ? ContainerChange : "ContainerProduct"}>
        {products.getProducts(Colum).map((item: any) => (
          <div
            className={
              ContentProductChange ? ContentProductChange : "ContentProduct"
            }
            key={item.title}
          >
            <Link
              to={{
                pathname: `/DetailProduct/${item.title}`,
                state: item,
              }}
              replace
            >
              <img src={item.image01} height="340" width="220"></img>
            </Link>
            <div className="TitleClother">
              <label>{item.title}</label>
            </div>
            <div className="PriceAfterChange">
              <div className="PriceSale">  <label >{Add_Comma(item.price)} </label></div>
              <div  className="Price"> <label>399,000</label></div>
            </div>
            <Link
              to={{
                pathname: `/DetailProduct/${item.title}`,
                state: item,
              }}
              replace
            >
              <Button
                Style="CotainerButtonChange"
                ContentStyle="ContentStyle"
                Content="CHỌN MUA"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
});

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {
  getData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
