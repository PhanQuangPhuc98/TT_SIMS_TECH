import React, { useEffect, useState } from "react";
import "../../Style/SliderBar.css";
import heroSliderData from "../../assets/fake-data/heroSliderData";
import Button from "../Button/Button";
interface PropDetailScreen {
  id?: number | any;
  title: string | any;
  description: string | any;
  img: string | any;
  color: string | any;
  path: any | any;
}
const SliderBar = (props: PropDetailScreen) => {
  const [clickSlide, setClickSlider] = useState(1);
  const [data, setData] = useState({
    id: 1,
    title: "",
    description: "",
    img: "",
    color: "",
    path: "",
  });
  const RenderData = () => {
    const DataSliderShow = heroSliderData.find((item) => {
      return item.id === clickSlide;
    });
    setData({
      ...data,
      id: DataSliderShow ? DataSliderShow.id : props.id,
      title: DataSliderShow ? DataSliderShow.title : props.title,
      description: DataSliderShow
        ? DataSliderShow.description
        : props.description,
      img: DataSliderShow ? DataSliderShow.img : props.img,
      color: DataSliderShow ? DataSliderShow.color : props.color,
      path: DataSliderShow ? DataSliderShow.path : props.path,
    });
  };
  const RenderSliderNext = () => {
    if (clickSlide < 3 && clickSlide >= 1) {
      setClickSlider(clickSlide + 1);
    } else {
      setClickSlider(1);
    }
  };
  const RenderSliderBack = () => {
    if (clickSlide > 1 && clickSlide <= 3) {
      setClickSlider(clickSlide - 1);
    } else {
      setClickSlider(3);
    }
  };
  const ChechColorButon = (id: any) => {
    switch (id) {
      case 1:
        return "ColorBlue";
      case 2:
        return "ColorPink";
      case 3:
        return "ColorOrange";
    }
  };
  const CheckColorTitle = (id: any) => {
    switch (id) {
      case 1:
        return "TitleBlue";
      case 2:
        return "TitlePink";
      case 3:
        return "TitleOrange";
    }
  };
  useEffect(() => {
    setTimeout(() => {
      RenderData();
    }, 500);
  }, [clickSlide]);
  return (
    <div className="StyleSlider">
      <div
        className="ContainerSlider"
        key={data.id}
        style={{
          transform:
            clickSlide === data.id ? "translateY(0%)" : "translateY(-130%)",
          opacity: clickSlide === data.id ? "1" : "0",
        }}
      >
        <div className="ContentSlider">
          <div className="Infor">
            <div className={CheckColorTitle(clickSlide)}>
              <label>{data.title}</label>
            </div>
            <div className="DescriptionSlider">
              <label>{data.description}</label>
            </div>
            <Button
              Style="StyleButtonSlider"
              ContentStyle={ChechColorButon(clickSlide)}
              Content="XEM CHI TIẾT"
            />
          </div>
          <div className="Advertisement">
            <div className="SliderShowLeft" onClick={RenderSliderNext}>
              <i className="fas fa-chevron-left"></i>
            </div>
            <img src={data.img}></img>
            <div className="SliderShowRight" onClick={RenderSliderBack}>
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="ClickSlider">
        <i className="fas fa-chevron-left" onClick={RenderSliderBack}></i>
        <label> {`${clickSlide}/3`}</label>
        <i className="fas fa-chevron-right" onClick={RenderSliderNext}></i>
      </div>
    </div>
  );
};

export default SliderBar;
