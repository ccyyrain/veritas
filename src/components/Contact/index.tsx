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

const MyImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
`;

const ContactUsContainer = styled.div`
  display: flex; /* Enables flexbox */
  flex-direction: column;
  // align-items: center;
  justify-content: center;
  padding-top: 16px;
  height: 60%; /* Take up full height of its parent container */
  text-align: left;
  line-height: 2.5; // Increased from 2 to 2.5 for more spacing
`;

const NameDiv = styled.div`
  font-size: 32px;
  font-weight: 400;
`;
const AddressDiv = styled.div`
  font-size: 16px;
  color: rgb(94, 94, 94);
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
          <Grid item sm={12} md={6}>
            <ContactUsContainer>
              <NameDiv>Veritas Partners Asia Limited</NameDiv>
              <AddressDiv>
                12F, Tower 2, Lippo Centre 89 Queensway Hong Kong
              </AddressDiv>
              <AddressDiv>
                Email:{" "}
                <span style={{ color: "black" }}>contact@vp-asia.com</span>
              </AddressDiv>
            </ContactUsContainer>
          </Grid>
          <Grid item sm={12} md={6}>
            <MyImage
              src={`${process.env.PUBLIC_URL}/assets/imgs/HK.png`}
              alt={`hk`}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <MapComponent />
      </Grid>
    </Grid>
  );
}
