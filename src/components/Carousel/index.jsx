import React from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/swiper-bundle.css";

import styled from "styled-components";

// Initialize Swiper modules
SwiperCore.use([Pagination, Autoplay]);

const images = [
  process.env.PUBLIC_URL + "/assets/imgs/carousel/Forbidden_City.jpg",
  process.env.PUBLIC_URL + "/assets/imgs/carousel/Forbidden_City2.jpg",
  process.env.PUBLIC_URL + "/assets/imgs/carousel/Great_Wall.jpg",
  process.env.PUBLIC_URL + "/assets/imgs/carousel/Temple_of_Heaven.jpg",
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
`;

const TextOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10; // to ensure the text is above the carousel
  color: white; // adjust as needed
  padding: 16px;
  height: 95%;
`;

const Title = styled.div`
  font-size: 64px;
  font-family: "League Spartan", arial, helvetica, sans-serif;
  font-weight: 700;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 48px;
  }
`;

const SubTitle = styled.div`
  font-size: 22px;
  font-family: Helvetica, arial, sans-serif;

  @media (max-width: 900px) {
    font-size: 16px;
  }
`;

const Carousel = () => {
  return (
    <CarouselWrapper>
      <TextOverlay>
        <Title>Making Your Future a Success</Title>
        <SubTitle>Plan for tomorrow today!</SubTitle>
      </TextOverlay>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
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
