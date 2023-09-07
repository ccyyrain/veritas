import React from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Paper,
  Divider,
} from "@mui/material";

import styled from "styled-components";

// Initialize Swiper modules
SwiperCore.use([Pagination, Autoplay]);

// const images = [
//   require("../../assets/imgs/carousel/Forbidden_City.jpg").default,
//   require("../../assets/imgs/carousel/Forbidden_City2.jpg").default,
//   require("../../assets/imgs/carousel/Great_Wall.jpg").default,
//   require("../../assets/imgs/carousel/Temple_of_Heaven.jpg").default,
// ];

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
`;

const Title = styled.div`
  font-size: 48px;
  font-family: "League Spartan", arial, helvetica, sans-serif;
  font-weight: 700;
`;

const SubTitle = styled.div`
  font-size: 22px;
  font-family: Helvetica, arial, sans-serif;
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
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <ImageSlide imageurl={img} />
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>
          <ImageSlide />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide> */}
      </Swiper>
    </CarouselWrapper>
  );
};

export default Carousel;
