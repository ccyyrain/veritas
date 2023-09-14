import React, { useState } from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css/effect-fade";

import styled from "styled-components";

// Initialize Swiper modules
SwiperCore.use([Pagination, Autoplay]);

const images = [
  process.env.PUBLIC_URL + "/assets/imgs/carousel/Forbidden_City.jpg",
  process.env.PUBLIC_URL + "/assets/imgs/carousel/Forbidden_City2.jpg",
  process.env.PUBLIC_URL + "/assets/imgs/carousel/Great_Wall.jpg",
  process.env.PUBLIC_URL + "/assets/imgs/carousel/Temple_of_Heaven.jpg",
];

const TEXTS = [
  {
    title: "Your Private Market Transaction Expert in Asia",
    subt: "Bespoke Investment Advisory Service",
  },
  {
    title: "Transaction Expert",
    subt: "A full team of top private equity, investment banking, accounting, legal and sector experts providing tailored transaction service",
  },
  {
    title: "Private Market Expert",
    subt: "We help you navigate ever-changing market dynamics and investment landscape by offering unique expertise in private market.",
  },
  {
    title: "Greater China and Cross Border Expert",
    subt: "We connect global capital to quality assets in Greater China and we help China-based investors capture global opportunities.",
  },
];

const CarouselWrapper = styled.div`
  position: relative;
  width: 100%; // or specify a fixed width
  height: 100%; // specify your desired height
`;

const ImageSlide = styled.div`
  width: 100%;
  height: 85vh;
  background-image: url(${(props) => props.imageurl});
  background-size: cover;
  background-position: center;
  opacity: 0.8;
  @media (max-width: 900px) {
    height: 100vh;
  }
`;

const TextOverlay = styled.div`
  position: absolute;
  width: ${(props) => (props.index === 0 ? "inherit" : "75%")};
  bottom: ${(props) => (props.index === 0 ? "30%" : "20%")};
  left: ${(props) => (props.index === 0 ? "0" : "5%")};
  // transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  z-index: 10; // to ensure the text is above the carousel
  color: white; // adjust as needed
  padding: 16px;
  justify-content: center;
  // align-items: center;
  // justify-content: ${(props) => (props.index === 0 ? "center" : "left")};
  align-items: ${(props) => (props.index === 0 ? "center" : "left")};
  text-align: ${(props) => (props.index === 0 ? "center" : "left")};
  // text-align: center; // Center text content
  background-color: rgba(34, 64, 104, 0.8) !important;
  max-width: ${(props) => (props.index === 0 ? "inherit" : "600px")};
`;

const Title = styled.div`
  font-size: 60px;
  font-family: Roboto, arial, helvetica, sans-serif;
  font-weight: 700;
  // text-align: center;
  text-align: ${(props) => (props.index === 0 ? "center" : "left")};
  @media (max-width: 900px) {
    font-size: 48px;
  }
  @media (max-width: 600px) {
    font-size: 32px;
  }
`;

const SubTitle = styled.div`
  font-size: 22px;
  font-family: Roboto, arial, sans-serif;

  @media (max-width: 900px) {
    font-size: 16px;
  }
`;

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <CarouselWrapper>
      <TextOverlay index={currentIndex}>
        <Title index={currentIndex}>{TEXTS[currentIndex].title}</Title>
        <SubTitle>{TEXTS[currentIndex].subt}</SubTitle>
      </TextOverlay>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        effect={"fade"}
        fadeEffect={{ crossFade: true }}
        modules={[EffectFade, Autoplay, Pagination]}
        onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)} // Listen for slide changes
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <ImageSlide imageurl={img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselWrapper>
  );
};

export default Carousel;
