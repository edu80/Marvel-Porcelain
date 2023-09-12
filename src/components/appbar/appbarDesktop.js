import React from "react";
import {
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Actions from "./actions";
import { useUIContext } from "../../context/ui";
import MarvelLogo from "../../logo.jpg";

const containerStyle = {
  display: "flex",
  alignItems: "center", // Center content horizontally
  justifyContent: "center", // Center content vertically
  minHeight: "100px", // Adjust the height as needed
  backgroundColor: "pink", // Add your desired background color
};

const listHomeStyle = {
  margin: "0 1px", 
};

const listItemStyle = {
  margin: "0 3px",
 marginLeft: "40px",


};



export default function AppbarDesktop({ matches }) {
  const { setShowSearchBox } = useUIContext();

  const handleRowClick = (item) => {
    // Handle row click action here
    console.log(`Clicked on: ${item}`);
  };

  return (
    <div style={containerStyle}>
      <AppBar position="static">
        <Toolbar>
          <img
            src={MarvelLogo}
            alt="Marvel Porcelain Logo"
            style={{ width: "150px", height: "auto", marginRight: "auto" }}
          />
          <List component="nav" aria-label="Appbar" style={{ display: "flex" }}>
            <ListItem button onClick={() => handleRowClick("Home")} style={listItemStyle}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={() => handleRowClick("Categories")} style={listItemStyle}>
              <ListItemText primary="Categories" />
            </ListItem>
            <ListItem button onClick={() => handleRowClick("Products")} style={listItemStyle}>
              <ListItemText primary="Products" />
            </ListItem>
            <ListItem button onClick={() => handleRowClick("About us")} style={listItemStyle}>
              <ListItemText primary="About us" />
            </ListItem>
            <ListItem button onClick={() => handleRowClick("Contact us")} style={listItemStyle}>
              <ListItemText primary="Contact us" />
            </ListItem>
          </List>
          <List
            component="nav"
            aria-label="Appbar"
            style={{
              display: "flex",
              alignItems: "center", // Center the list items vertically
            }}
          >
            <ListItem button onClick={() => setShowSearchBox(true)} style={listHomeStyle}>
              <ListItemIcon>
                <SearchIcon />
              </ListItemIcon>
            </ListItem>
            <ListItem button style={{ marginLeft: "-50px", ...listHomeStyle}}>
              <ListItemIcon>
                <ShoppingCartIcon />
              </ListItemIcon>
            </ListItem>
            <ListItem button style={{ marginLeft: "-50px", ...listHomeStyle }}>
              <ListItemIcon>
                <FavoriteIcon />
              </ListItemIcon>
            </ListItem>
            <ListItem button style={{ marginLeft: "-50px", ...listHomeStyle }}>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
            </ListItem>
          </List>
        </Toolbar>
      </AppBar>
    </div>
  );
}
