import React, { useState, Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

// MUI Components
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Hidden from "@mui/material/Hidden";
import useMediaQuery from "@mui/material/useMediaQuery";

// Icons
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";

// custom components & data
import CustomMenu from "../../components/menu.component";
import CustomIconButton from "../../components/IconButton.component";

import { MENU_ITEMS } from "../../utils/util";

const Navigation: React.FC = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const headerColor = theme.palette.primary.main;
  const isSmallScreenSize = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <AppBar position="fixed" sx={{ backgroundColor: headerColor}}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <img
            src={
              "https://consumer-component-library.roocdn.com/26.19.1/static/images/logo-teal.svg"
            }
            alt="deliveroo"
            style={{
              height: "32px",
              marginLeft: isSmallScreenSize ? "0px" : "30px",
              width: "121px",
              overflow: "hidden",
            }}
          />
          <Box>
            <Hidden mdDown>
              <Button
                color="inherit"
                aria-controls="partner-menu"
                aria-haspopup="true"
                variant="contained"
                onClick={handleMenuOpen}
                sx={{
                  marginRight: "10px",
                  textTransform: "none",
                  backgroundColor: "#FFFFFF",
                  color: "#2e3333",
                  fontSize: "16px",
                  fontWeight: 400,
                  fontFamily: "plex-sans,sans-serif",
                  borderColor: Boolean(anchorEl) ? "#00ccbc" : "initial",
                  borderWidth: Boolean(anchorEl) ? "1px" : "initial",
                  borderStyle: Boolean(anchorEl) ? "solid" : "initial"
                }}
                startIcon={
                  Boolean(anchorEl) ? (
                    <ExpandLessIcon color="secondary" />
                  ) : (
                    <ExpandMoreIcon color="secondary" />
                  )
                }
              >
                Partner with us
              </Button>
              <CustomMenu
                anchorEl={anchorEl}
                handleMenuClose={handleMenuClose}
                MenuItems={MENU_ITEMS}
              />
            </Hidden>

            <Hidden smDown>
              <CustomIconButton
                onClick={() => {}}
                color={theme.palette.primary.main}
                icon={<CottageOutlinedIcon color="secondary" />}
                text="Sign up or log in"
              />
            </Hidden>
            <CustomIconButton
              onClick={() => {}}
              color={theme.palette.primary.main}
              icon={<MenuIcon color="secondary" />}
              text="Menu"
            />
          </Box>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
