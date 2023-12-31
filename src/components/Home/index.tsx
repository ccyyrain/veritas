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
import Carousel from "../Carousel";
import { CardTitle, Content, Title, CenteredContent } from "../shared/styled";

type CardProps = {
  title: string;
  content: React.ReactNode;
};

type StyledCardProps = {
  imageUrl: string;
};

const StyledCard = styled(Box)`
  // min-height: 600px;
  height: 100%;
  border: none;
  box-shadow: none;
  border-radius: 0; // to remove rounded corners
  // @media (max-width: 960px) {
  //   min-height: 100px;
  // }
`;

const MyCard: React.FC<CardProps> = ({ title, content }) => {
  return (
    <StyledCard>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <Content>{content}</Content>
      </CardContent>
    </StyledCard>
  );
};

const doList = (
  <div>
    We provide a full spectrum of world-class investment advisory and deal
    execution services customized to specific buy side and sell side situations.
    <ul>
      <li>Growth Capital</li>
      <li>M&A</li>
      <li>Cross Border</li>
      <li>Special Situation</li>
      <li>Mezzanine Financing</li>
      <li>Secondaries</li>
      <li>Market Research</li>
      <li>Company Due Diligence</li>
    </ul>
  </div>
);

export default function Home() {
  return (
    <Grid
      container
      spacing={2}
      sx={{ backgroundColor: "black", color: "white" }}
    >
      <Grid item xs={12}>
        <Carousel />
      </Grid>
      <Grid item xs={12} sx={{ marginBottom: "36px" }}>
        <CenteredContent>
          <Title>About Us</Title>
        </CenteredContent>
        <Grid container spacing={3} sx={{ padding: "0 15vw !important" }}>
          <Grid item sm={12} md={6} lg={4}>
            <MyCard
              title="Who We Are"
              content="We are a Hong Kong-based boutique investment advisory firm founded by a team of highly seasoned professionals from world leading private equity, investment banking, consulting and accounting firms. We are dedicated to help clients navigate ever-changing market dynamics and investment landscape by offering our unique expertise in private market transactions. "
            />
          </Grid>
          <Grid item sm={12} md={6} lg={4}>
            <MyCard title="What We Do" content={doList} />
          </Grid>
          <Grid item sm={12} md={6} lg={4}>
            <MyCard
              title="Our Strength"
              content="We are deeply rooted in China with global perspective. We connect global capital to quality assets in Greater China and we help China-based investors capture global opportunities. We offer penetrating vertical knowledge, deep transaction experience and strong access to industry leaders and prestigious financial investors."
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
