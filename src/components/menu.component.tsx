import React, { useState } from "react";

import { Menu, MenuItem, ListItemIcon, Typography } from "@mui/material";

interface MenuItem {
  id: Number;
  icon: any;
  title: string;
}

interface MenuProps {
  anchorEl: null | HTMLElement;
  handleMenuClose: () => void;
  MenuItems: MenuItem[];
}

const CustomMenu: React.FC<MenuProps> = ({
  anchorEl,
  handleMenuClose,
  MenuItems
}) => {
  return (
    <Menu
      id="partner-menu"
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
      sx={{
        "& .MuiPaper-root": {
          marginTop: "1px"
        }
      }}
    >
      {MenuItems.map((item: any, index: any) => (
        <MenuItem key={index} onClick={handleMenuClose} sx={{ minWidth: 180 }}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <Typography variant="inherit">{item.title}</Typography>
        </MenuItem>
      ))}
    </Menu>
  );
};

export default CustomMenu;
