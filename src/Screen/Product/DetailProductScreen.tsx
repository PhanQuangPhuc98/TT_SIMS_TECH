import React, { useEffect, useState } from "react";
import "../../Style/DetailProduct.css";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import products from "../../assets/fake-data/products";
import String from "../../constants/String";
import Product from "../../Components/Product/Product";
import DetailProduct from "../../Components/Product/DetailProduct";
interface PropDetailScreen {
  title?: string | any;
  price: string | any;
  image01: string | any;
  image02: string | any;
  categorySlug: string | any;
  colors: any[] | any;
  slug: string | any;
  size: any[] | any;
}
const DetailProductScreen = (props: PropDetailScreen) => {
  const { id } = useParams<any>();
  const [data, setData] = useState({
    title: "",
    price: "",
    image01: "",
    image02: "",
    colors: [],
    slug: "",
    size: [],
  });
  const RenderDataDetailProduct = () => {
    const DataDetail = products.getAllProducts().find((item) => {
      return item.title === `${id}`;
    });
    setData({
      ...data,
      title: DataDetail ? DataDetail.title : props.title,
      price: DataDetail ? DataDetail.price : props.price,
      image01: DataDetail ? DataDetail.image01 : props.image01,
      image02: DataDetail ? DataDetail.image02 : props.image02,
      colors: DataDetail ? DataDetail.colors : props.colors,
      size: DataDetail ? DataDetail.size : props.size,
    });
  };
  useEffect(() => {
    RenderDataDetailProduct();
  }, [id]);
  console.log(data.price);
  return (
    <div className="DetailProductScreen">
      <DetailProduct
        Title={data.title}
        Price={data.price}
        Image01={data.image01}
        Image02={data.image02}
        Colors={data.colors}
        Size={data.size}
      />
      <Product Title={String.Discover_more} Colum={8} />
    </div>
  );
};

export default DetailProductScreen;
