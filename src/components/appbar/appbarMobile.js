import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
import { IconButton } from "@mui/material";
import { useUIContext } from "../../context/ui";
import MarvelLogo from "../../logo.jpg";


export default function AppbarMobile({ matches }) {
  const { setDrawerOpen, setShowSearchBox } = useUIContext();
  return (
    <AppbarContainer>
      <IconButton onClick={() => setDrawerOpen(true)}>
        <MenuIcon />
      </IconButton>
      <AppbarHeader textAlign={"center"} variant="h4">
  <img
          src={MarvelLogo}
          alt="Marvel Porcelain Logo"
          style={{ width: "100px", height: "auto", marginRight: "auto" }}
        />      </AppbarHeader>
      <IconButton onClick={() => setShowSearchBox(true)}>
        <SearchIcon />
      </IconButton>
      <Actions matches={matches} />
    </AppbarContainer>
  );
}
