import React from "react";
import styled from "styled-components";
import { styled as mulStyled } from "@mui/material/styles";
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

const Item = mulStyled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const CenteredContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; // This is the key change
`;

const StyledCard = styled(Box)`
  border: none;
  box-shadow: none;
  border-radius: 0; // to remove rounded corners
`;

type CardProps = {
  title: string;
  content: React.ReactNode;
};

const MyCard: React.FC<CardProps> = ({ title, content }) => {
  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h5" component="div" mb={3}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
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
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <CenteredContent>
          <Typography variant="h3" gutterBottom>
            Making Your Future a Success
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Plan for tomorrow today!
          </Typography>
        </CenteredContent>
      </Grid>
      <Grid item xs={12}>
        <CenteredContent>
          <Typography variant="h3" gutterBottom>
            About us
          </Typography>
        </CenteredContent>

        <Grid container spacing={3} sx={{ paddingLeft: 8, paddingRight: 8 }}>
          <Grid item xs={6} md={4}>
            <MyCard
              title="Who We Are"
              content="We are a Hong Kong-based boutique investment advisory firm founded by a team of highly seasoned professionals from world leading private equity, investment banking, consulting and accounting firms. We are dedicated to help clients navigate ever-changing market dynamics and investment landscape by offering our unique expertise in private market transactions. "
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <MyCard title="What We Do" content={doList} />
          </Grid>
          <Grid item xs={6} md={4}>
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
