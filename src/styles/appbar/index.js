import React from "react";
import {
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import "@fontsource/montez";
import { Colors, DrawerWidth } from "../theme";
import { textPopUpTop } from "../../animation";
import IconButton from "@mui/material/IconButton"; // Added import for IconButton
import MarvelLogo from "../../logo.jpg"; 

export const AppbarContainer = styled(Box)(() => ({
  display: "flex",
  marginTop: 4,
  justifyContent: "center",
  alignItems: "center",
  padding: "2px 8px",
}));

export const AppbarHeader = styled(Typography)(() => ({
  padding: "4px",
  flexGrow: 1,
  fontSize: "2em", // Reduced the font size to make the logo smaller
  fontFamily: '"Montez", "cursive"',
  color: Colors.secondary,
  "&:hover": {
    animation: `${textPopUpTop} 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both`,
  },
}));

export const ActionIconsContainerMobile = styled(Box)(() => ({
  display: "flex",
  background: Colors.shaft,
  position: "fixed",
  bottom: 70,
  left: 70,
  width: "100%",
  alignItems: "center",
  justifyContent: "center", // Centered the content horizontally
  zIndex: 99,
  borderTop: `1px solid ${Colors.border}`,
}));

export const ActionIconsContainerDesktop = styled(Box)(() => ({
  flexGrow: 0,
}));

export const MyList = styled(List)(({ type }) => ({
  display: "flex", // Display the list items horizontally
  flexGrow: 3,
  justifyContent: "center",
  alignItems: "center",
  listStyle: "none", // Remove list styles (bullets or numbers)
  padding: 0, // Remove default padding
}));

export const MyListItem = styled(ListItem)(() => ({
  "&:not(:last-child)": {
    marginRight: "16px", // Add spacing between list items
  },
}));

export const DrawerCloseButton = styled(IconButton)(() => ({
  position: "absolute",
  top: 10,
  left: DrawerWidth,
  zIndex: 1999,
}));
