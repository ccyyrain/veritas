import React, { useState } from "react";
import styled from "styled-components";
import { styled as muiStyled } from "@mui/system";

import Map, { NavigationControl, Marker } from "react-map-gl";
import { Button } from "@mui/material";
import NearMe from "@mui/icons-material/NearMe";

const StyledButton = muiStyled(Button)({
  backgroundColor: "black",
  color: "rgb(198, 198, 198)",
  position: "absolute",
  top: "20px",
  left: "50px",
  display: "flex",
  alignItems: "center",
  fontSize: "12px",
  fontFamily: "Helvetica, arial, sans-serif",
  fontWeight: 700,
  letterSpacing: "0.85px",
});

const ButtonContent = styled.div`
  display: flex;
  align-items: center;

  .MuiButton-startIcon {
    color: rgb(198, 198, 198);
    margin-right: 5px;
  }
`;

const viewport = {
  longitude: 114.16335,
  latitude: 22.279536,
};
function MapComponent() {
  return (
    <div style={{ width: "100%", height: "400px", padding: "8px" }}>
      <Map
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        initialViewState={{
          ...viewport,
          zoom: 14,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker longitude={114.16335} latitude={22.279536} color="red" />
        <NavigationControl />
        <StyledButton
          variant="contained"
          //   startIcon={<NearMe />}
          onClick={() => {
            window.open(
              `https://www.google.com/maps/dir//${viewport.latitude},${viewport.longitude}`,
              "_blank"
            );
          }}
        >
          <ButtonContent>
            <NearMe className="MuiButton-startIcon" />
            Get Directions
          </ButtonContent>
        </StyledButton>
      </Map>
    </div>
  );
}

export default MapComponent;
