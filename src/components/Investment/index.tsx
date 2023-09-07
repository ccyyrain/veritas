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

const StyledGrid = styled(Grid)`
  & .MuiGrid-item {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const sectorsObj = {
  "Consumer Goods and Service": "Consumer.png",
  "Internet and Technology": "Technology.png",
  "Software and Business Service": "Software and Business Service.png",
  "Sports and Fashion": "Sports and Fashion.png",
  Manufacturing: "Manufacturing.png",
  "Infrastructure and Hard Asset": "Infrastructure and Hard Asset.png",
};

const crossBorderImg = [
  "Fullerton.jpg",
  "NPS.jpg",
  "Negros.png",
  "CFOCN.jpg",
  "ibs.png",
  "Kith.png",
  "OnlineMedEd.png",
];

const chinaInvestImg = [
  "ATA.png",
  "LPPZ Logo.png",
  "Arrow.png",
  "gaodun.png",
  "Yatsen.jpg",
  "UCCA.png",
  "Shanghai Tang.png",
  "Elite K12.png",
  "Codemao.png",
  "Citigo.png",
  "Runde.png",
  "yuanfudao.jpg",
  "Moody.jpg",
  "changcheng.jpg",
  "lehu.jpg",
  "Neo.jpg",
];

const diligenceImg = [
  "EF_Education_First_Logo.png",
  "Byredo.png",
  "hongxing.png",
  "Coursera.png",
  "Turnitin.jpg",
  "fenbi.jpg",
  "Luckin.jpg",
  "Tuhu.jpg",
  "zhangmen.jpg",
  "PacificLinks.jpg",
  "aikucun.jpg",
  "pingxing.jpg",
  "Dulwich.jpg",
  "Kowin.jpg",
  "chuangye.jpg",
];

const SectorImage = styled.img`
  min-width: 280px;
  width: 100%;
  height: auto;
  height: 200px;
  object-fit: cover;
  display: block;
`;

const SectorTitle = styled.div`
  width: 100%;
  min-width: 280px;
  color: rgb(255, 255, 255);
  font-size: 30px;
  text-align: center;
  height: 90px;
  margin-bottom: 8px; // Give some space between title and image
`;

const MyImage = styled.img`
  width: 100%;
  max-width: 150px; // or any desired size
  height: auto;
  display: block;
  margin: 0 auto;
`;

export default function Investment() {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        backgroundColor: "black",
        color: "white",
      }}
    >
      <Grid
        item
        xs={12}
        sx={{
          margin: "56px 0",
          padding: "48px 15vw !important",
        }}
      >
        <CenteredContent>
          <Title>Sector of Focus</Title>
        </CenteredContent>
        <StyledGrid
          container
          spacing={6}
          // sx={{ paddingLeft: 8, paddingRight: 8 }}
        >
          {Object.entries(sectorsObj).map((entry, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              style={{ flexDirection: "column" }}
            >
              <SectorTitle>{entry[0]}</SectorTitle>
              <SectorImage
                src={`${process.env.PUBLIC_URL}/assets/imgs/sector/${entry[1]}`}
                alt={`image-${index}`}
              />
            </Grid>
          ))}
        </StyledGrid>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          padding: "0 15vw !important",
          backgroundColor: "white",
          color: "black",
        }}
      >
        <CenteredContent>
          <Title>Cross Border Investment Experience</Title>
        </CenteredContent>
        <StyledGrid
          container
          spacing={3}
          // sx={{ paddingLeft: 8, paddingRight: 8 }}
        >
          {crossBorderImg.map((src, index) => (
            <Grid item xs={6} sm={3} md={2} key={index}>
              <MyImage
                src={`${process.env.PUBLIC_URL}/assets/imgs/invest/${src}`}
                alt={`image-${index}`}
              />
            </Grid>
          ))}
        </StyledGrid>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          backgroundColor: "white",
          color: "black",
          padding: "0 15vw !important",
        }}
      >
        <CenteredContent>
          <Title>China Investment Experience</Title>
        </CenteredContent>
        <StyledGrid container spacing={3}>
          {chinaInvestImg.map((src, index) => (
            <Grid item xs={6} sm={3} md={2} key={index}>
              <MyImage
                src={`${process.env.PUBLIC_URL}/assets/imgs/invest/${src}`}
                alt={`image-${index}`}
              />
            </Grid>
          ))}
        </StyledGrid>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          backgroundColor: "white",
          color: "black",
          padding: "0 15vw 56px !important",
        }}
      >
        <CenteredContent>
          <Title>Due Diligence Experience</Title>
        </CenteredContent>
        <StyledGrid container spacing={3}>
          {diligenceImg.map((src, index) => (
            <Grid item xs={6} sm={3} md={2} key={index}>
              <MyImage
                src={`${process.env.PUBLIC_URL}/assets/imgs/invest/${src}`}
                alt={`image-${index}`}
              />
            </Grid>
          ))}
        </StyledGrid>
      </Grid>
    </Grid>
  );
}
