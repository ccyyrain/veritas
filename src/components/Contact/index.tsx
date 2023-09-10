import React from "react";
import styled from "styled-components";
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
import { CardTitle, Title, CenteredContent } from "../shared/styled";
import MapComponent from "../Mapbox";

const imgs = ["HK.png", "bj.webp", "seoul.jpeg"];

const MyImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  display: block;
  margin: 0 auto;

  @media (max-width: 899px) {
    // This is a typical breakpoint for small screens, you can adjust as needed
    height: auto;
    max-height: 350px;
  }
`;

const ContactUsContainer = styled.div`
  display: flex; /* Enables flexbox */
  flex-direction: column;
  justify-content: center;
  text-align: left;
  line-height: 2.5; // Increased from 2 to 2.5 for more spacing
`;

const NameDiv = styled.div`
  font-size: 32px;
  font-weight: 600;
`;
const AddressDiv = styled.div`
  white-space: pre-line;
  font-size: 22px;
  line-height: 2;
  // color: rgb(94, 94, 94);
`;

export default function Contact() {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        backgroundColor: "white",
        color: "black",
      }}
    >
      <Grid
        item
        xs={12}
        sx={{
          margin: "56px 0",
          padding: "48px 10vw 0!important",
        }}
      >
        <CenteredContent>
          <Title>Contact Us</Title>
        </CenteredContent>
        <Grid container spacing={3}>
          <Grid item sm={12} md={4}>
            <MyImage
              src={`${process.env.PUBLIC_URL}/assets/imgs/${imgs[0]}`}
              alt={`hk`}
            />
            <ContactUsContainer>
              <NameDiv>Hong Kong</NameDiv>
              <AddressDiv>
                {`12F, Tower 2\nLippo Centre\n89 Queensway\nHong Kong, China\n\n`}
              </AddressDiv>
              <AddressDiv>
                Email:{" "}
                <span style={{ color: "black", textDecoration: "underline" }}>
                  contact@vp-asia.com
                </span>
              </AddressDiv>
            </ContactUsContainer>
          </Grid>
          <Grid item sm={12} md={4}>
            <MyImage
              src={`${process.env.PUBLIC_URL}/assets/imgs/${imgs[1]}`}
              alt={`bj`}
            />
            <ContactUsContainer>
              <NameDiv>Beijing</NameDiv>
              <AddressDiv>
                {`10F, Sanyuan Neo Plaza\nShuguang Xili A-5-18#\nChaoyang District\nBeijing, China\n\n`}
              </AddressDiv>
            </ContactUsContainer>
          </Grid>
          <Grid item sm={12} md={4}>
            <MyImage
              src={`${process.env.PUBLIC_URL}/assets/imgs/${imgs[2]}`}
              alt={`seoul`}
            />
            <ContactUsContainer>
              <NameDiv>Seoul</NameDiv>
              <AddressDiv>
                {`1512\n38 Saimdang-ro\nSeocho-gu\nSeoul, Republic of Korea\n\n`}
              </AddressDiv>
            </ContactUsContainer>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
