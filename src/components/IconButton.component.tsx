import React from "react";
import { Button, Palette } from "@mui/material";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";

interface CustomButtonProps {
  onClick: () => void;
  color: any;
  icon: any;
  text: String;
}

const CustomIconButton: React.FC<CustomButtonProps> = ({
  onClick,
  color,
  icon,
  text
}) => {
  return (
    <Button
      variant="contained"
      color="inherit"
      sx={{
        textTransform: "none",
        marginRight: "10px",
        backgroundColor: "#FFFFFF",
        color: color,
        fontSize: "16px",
        fontWeight: 400
      }}
      startIcon={icon}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default CustomIconButton;
