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
import rawData from "../../assets/text.json";

interface TextData {
  Steve: string;
  Bill: string;
  Zhen: string;
  Locke: string;
  Jaekwang: string;
  Hongling: string;
}

const textData: Partial<TextData> = rawData;

const imgNames = [
  "Hillhouse Logo.jpg",
  "CDH logo_01.png",
  "JPM.png",
  "Hitone Logo.jpg",
  "IBM_logo.svg",
  "PricewaterhouseCoopers_Logo.png",
  "KPMG_logo.svg.png",
  "EY_logo_2019.svg.png",
  "bernstein-logo.png",
  "CAF.jpg",
  "Canoo.jpg",
];

const images = imgNames.map(
  (imageName) => `${process.env.PUBLIC_URL}/assets/imgs/team/${imageName}`
);

type CardProps = {
  title: string;
  content: React.ReactNode;
  color?: string;
};

const StyledCard = styled(Box)`
  min-height: 500px;
  height: 100%;
  border: none;
  box-shadow: none;
  border-radius: 0; // to remove rounded corners
  @media (max-width: 960px) {
    // This is the default breakpoint for md in MUI
    min-height: 500px;
  }
`;

const Content = styled.div<{ color?: string }>`
  white-space: pre-line;
  font-size: 16px;
  font-family: Helvetica, arial, sans-serif;
  color: ${(props) => props.color || "rgb(94, 94, 94)"};
`;

const MyImage = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;
  display: block;
  margin: 0 auto;
`;

const StyledGrid = styled(Grid)`
  & .MuiGrid-item {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const MyCard: React.FC<CardProps> = ({ title, content, color }) => {
  return (
    <StyledCard>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <Content color={color}>{content}</Content>
      </CardContent>
    </StyledCard>
  );
};

export default function Team() {
  return (
    <Grid
      container
      spacing={2}
      sx={{ backgroundColor: "white", color: "black" }}
    >
      <Grid
        item
        xs={12}
        sx={{ marginTop: "56px", padding: "0 15vw !important" }}
      >
        <CenteredContent>
          <Title>Management Team</Title>
        </CenteredContent>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <MyCard title="Steve Fan" content={textData.Steve} />
          </Grid>
          <Grid item xs={12} md={6}>
            <MyCard title="Bill Yang" content={textData.Bill} />
          </Grid>
          <Grid item xs={12} md={6}>
            <MyCard title="Tian Zhen" content={textData.Zhen} />
          </Grid>
          <Grid item xs={12} md={6}>
            <MyCard title="Locke Cheng" content={textData.Locke} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ padding: "0 10vw 56px !important" }}>
        <CenteredContent>
          <Title>Our Prior Experience</Title>
        </CenteredContent>
        <StyledGrid container spacing={1}>
          {images.map((src, index) => (
            <Grid item xs={6} sm={3} md={2} key={index}>
              <MyImage src={src} alt={`image-${index}`} />
            </Grid>
          ))}
        </StyledGrid>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          backgroundColor: "black",
          color: "white",
          padding: "0 10vw !important",
        }}
      >
        <CenteredContent>
          <Title>Advisory Board</Title>
        </CenteredContent>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <MyCard
              title="Jaekwang Chung"
              content={textData.Jaekwang}
              color="rgb(145, 145, 145)"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <MyCard
              title="Hongling Xie"
              content={textData.Hongling}
              color="rgb(145, 145, 145)"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
