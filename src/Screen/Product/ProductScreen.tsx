import React, { useState } from "react";
import Product from "../../Components/Product/Product";
import "../../Style/ProductScreen.css";
import FilterProduct from "../../Components/OptionProduct/FilterProduct";
import OptionProduct from "../../Components/OptionProduct/OptionProduct";
const ProductScreen = () => {
  const [showFilter, setShowFilter] = useState(true);
  const RenderShowFilter = () => {
    setShowFilter(!showFilter);
  };
  return (
    <div className="ContainerProductScreen">
      <OptionProduct></OptionProduct>
      <FilterProduct showFilter={showFilter} closeFilter={RenderShowFilter} />
      <div className="FilterProduct" onClick={RenderShowFilter}>
        <span className="fas fa-filter"></span>
      </div>
      <Product
        TitleProductChange="TitleProductChange"
        ContentProductChange="ContentProductChange"
        ContainerChange="ProductScreenChange"
        Colum={12}
      />
    </div>
  );
};

export default ProductScreen;
