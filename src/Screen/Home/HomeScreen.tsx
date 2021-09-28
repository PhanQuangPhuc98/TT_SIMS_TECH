import React, { useState } from "react";
import "../../Style/Home.css";
import Header from "../../Components/Header/Header";
import images from "../../assets/images/images";
import SliderBar from "../../Components/Slider/SliderBar";
import Option from "../../Components/Option/Option";
import String from "../../constants/String";
import Product from "../../Components/Product/Product";
import Footer from "../../Components/Footer/Footer";
const HomeScreen = () => {
  return (
    <div>
      <SliderBar />
      <Option></Option>
      <Product Colum={4} Title={String.Top_selling_products_of_the_week} />
      <Product Colum={8} Title={String.New_Product} />
      <div className="Banner">
        <img src={images.img_banner}></img>
      </div>
      <Product Colum={12} Title={String.Popular} />
    </div>
  );
};

export default HomeScreen;
