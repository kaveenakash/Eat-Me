import React, { useState, Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Hidden from "@mui/material/Hidden";

const Home: React.FC = () => {
  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down(960));
  const isScreenMedium = useMediaQuery(theme.breakpoints.down(1025));
  const isScreenLarge = useMediaQuery(theme.breakpoints.up(1201));
  let imageWidth = "80%";
  
  const fullWidthStyles = {
    width: "100%",
    margin: 0,
    padding: 0
  };

  const containerStyles = {
    backgroundColor: theme.palette.primary.main,
    height: "500px",
    display: "flex",
    width: "100%"
  };

  let mainGridStyles = {
    zIndex: 2,
    marginLeft: "25%",
    textAlign: "center",
    marginRight: "25%",
    marginTop: "6%",
    width: "60%",
    padding: "64px 16px 104px"
  };

  let headerStyles = {
    fontSize: isScreenSmall ? "32px" : "40px",
    color: "#fff",
    lineHeight: "48px",
    fontFamily: "Lato, sans-serif",
    fontWeight: 800
  };
  if (isScreenLarge) {
    imageWidth = "100%";
    mainGridStyles = {
      ...mainGridStyles,
      marginTop: "5%",
    };
  }

  if (isScreenSmall) {
    mainGridStyles = {
      ...mainGridStyles,
      marginTop: "8%",
      marginLeft: "0%",
      marginRight: "0%",
      textAlign: "start"
    };
  }
  if (isScreenMedium) {
    imageWidth = "55%";
  }
  if (isScreenSmall) {
    imageWidth = "45%";
    mainGridStyles = {
      ...mainGridStyles,
      marginTop: "8%",
      marginLeft: "0%",
      marginRight: "0%",
      textAlign: "start"
    };
  }
  return (
    <Fragment>
      <Outlet />
      <Box sx={fullWidthStyles} bgcolor={theme.palette.primary.main}>
        {!isScreenSmall && (
          <span
            style={{
              position: "absolute",
              left: "0%",
              top: "0%",
              height: "500px",
              zIndex: 2,
              overflow: "hidden"
            }}
          >
            <img
              src={
                "//img2.storyblok.com/filters:format(webp)/f/62776/860x642/4e0f98735d/grocery-bag.jpg"
              }
              alt="deliveroo"
              style={{
                width: imageWidth,
                height: "100%",
                objectFit: "cover",
                backgroundPosition: "100%",
                backgroundSize: "cover"
              }}
            />
          </span>
        )}
        <Box sx={containerStyles}>
          <Grid
            container
            direction="column"
            sx={mainGridStyles}
            justifyContent={isScreenSmall ? "start" : "center"}
            // alignItems="end"
          >
            <Grid item md={12}>
              <Typography sx={headerStyles}>
                Restaurant food, takeaway and groceries.
                <span style={{ color: theme.palette.secondary.main }}>
                  Delivered.
                </span>
              </Typography>
            </Grid>
            <Grid item></Grid>
          </Grid>
        </Box>
      </Box>
    </Fragment>
  );
};

export default Home;
