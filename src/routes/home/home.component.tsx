import React, { useState, Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import Container from "@mui/material/Container";
import Box, { BoxProps } from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Hidden from "@mui/material/Hidden";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import TelegramIcon from "@mui/icons-material/Telegram";

import { Animate, AnimateKeyframes } from "react-simple-animate";

// import "./home.css";

function Item(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        ...sx
      }}
      {...other}
    />
  );
}

const Home: React.FC = () => {
  const theme = useTheme();

  const handleSearch = () => {
    // Perform search functionality
  };
  const appear = {
    from: 0,
    to: 1,
    attributeName: "opacity"
  };

  const leave = {
    steps: [
      {
        style: {
          transform: "translateX(0)"
        }
      },
      {
        duration: 1000,
        style: {
          transform: "translateX(300)",
          height: 50
        }
      },
      {
        duration: 2000,
        style: {
          height: 0
        }
      }
    ]
  };

  return (
    <Fragment>
      <Outlet />
      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
          height: "100%",
          display: "flex",
          width: "100%",
          padding: "64px 0px 104px",
          overflow: "hidden"
        }}
        bgcolor={theme.palette.primary.main}
      >
        <Box
          sx={{
            marginLeft: "25%",
            marginRight: "25%",
            // marginTop: "2%",
            width: "100%",
            padding: "64px 16px 104px"
          }}
        >
          <Grid
            container
            sx={{
              textAlign: "center"
            }}
            // alignItems="center"
            justifyContent="center"
            alignItems="center"
            spacing={4}
          >
            <Grid item md={12} lg={12} xl={9.5}>
              <Typography
                sx={{
                  fontSize: "40px",
                  color: "#fff",
                  lineHeight: "48px",
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 800
                }}
              >
                Restaurant food, takeaway and groceries.
                <span style={{ color: theme.palette.secondary.main }}>
                  {" "}
                  Delivered.
                </span>
              </Typography>
            </Grid>

            <Grid item md={10} lg={11} xl={9.5}>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "#fff",
                  paddingBottom: "16px",
                  fontFamily: "plex-sans,sans-serif",
                  fontWeight: 400,
                  fontSize: "16px"
                }}
              >
                Enter a postcode to see what we deliver
              </Typography>
              <TextField
                placeholder="e.g.EC4R 3TE"
                fullWidth
                InputProps={{
                  sx: {
                    fontSize: "14px"
                  },
                  startAdornment: (
                    <TelegramIcon
                      color="secondary"
                      sx={{ marginRight: "2px" }}
                    />
                  ),
                  endAdornment: (
                    <Button
                      color="secondary"
                      sx={{
                        minHeight: "56px",
                        padding: "16px 40px",
                        margin: "5px",
                        textTransform: "none",
                        fontWeight: 700,
                        borderRadius: "100px",
                        color: "#fff"
                      }}
                      variant="contained"
                      onClick={handleSearch}
                    >
                      Search
                    </Button>
                  )
                }}
                sx={{
                  backgroundColor: "#fff",
                  minHeight: "48px",
                  borderRadius: "100px",
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      border: "2px solid black",
                      margin: "1px",
                      borderRadius: "100px",
                      padding: "8px"
                    }
                }}
              />

              <Typography
                variant="subtitle1"
                sx={{
                  color: "#fff",
                  marginTop: "12px",
                  fontFamily: "plex-sans,sans-serif",
                  fontWeight: 400,
                  fontSize: "14px"
                }}
              >
                <span style={{ color: theme.palette.secondary.main }}>
                  Log in
                </span>{" "}
                for your recent addresses.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>

   
    </Fragment>
  );
};

export default Home;




{/* <div style={{ overflowX: "hidden" }}>
<div style={{}}></div>
<AnimateKeyframes
  play={true}
  iterationCount="infinite"
  duration={10}
  keyframes={[
    { 0: "transform-origin: 0"},
    { 100: "transform-origin: 100%"}
  ]}
  // keyframes is an array of styles, and each style
  // will be distributed over 100% of the duration
>
    <div
    style={{
      display: "flex",
      flexWrap: "nowrap",
      borderRadius: 1
    }}
  >
    <div className="image-item">
      <img src="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/b07158449c/sushi-wide.jpg" />
    </div>
    <div className="image-item">
      <img src="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/b07158449c/sushi-wide.jpg" />
    </div>
    <div className="image-item">
      <img src="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/b07158449c/sushi-wide.jpg" />
    </div>
    <div className="image-item">
      <img src="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/b07158449c/sushi-wide.jpg" />
    </div>
    <div className="image-item">
      <img src="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/b07158449c/sushi-wide.jpg" />
    </div>
  </div>
</AnimateKeyframes>
</div> */}

{/* <div style={{margin:"-48px 0 0"}} className="HomepageHero">

</div> */}

{/* <div className="one">
<div className="test">
  <div
    style={{
      display: "flex",
      flexWrap: "nowrap",
      borderRadius: 1
    }}
  >
    <div className="image-item">
      <img src="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/b07158449c/sushi-wide.jpg" />
    </div>
    <div className="image-item">
      <img src="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/b07158449c/sushi-wide.jpg" />
    </div>
    <div className="image-item">
      <img src="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/b07158449c/sushi-wide.jpg" />
    </div>
    <div className="image-item">
      <img src="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/b07158449c/sushi-wide.jpg" />
    </div>
    <div className="image-item">
      <img src="https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/b07158449c/sushi-wide.jpg" />
    </div>
  </div>
</div>
</div> */}





// const isScreenSmall = useMediaQuery(theme.breakpoints.down(960));
// const isScreenMedium = useMediaQuery(theme.breakpoints.down(1025));
// const isScreenLarge = useMediaQuery(theme.breakpoints.up(1201));
// let imageWidth = "80%";

// const fullWidthStyles = {
//   width: "100%",
//   margin: 0,
//   padding: 0
// };

{
  /* {!isScreenSmall && (
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
        )} */
}
