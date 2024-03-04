import React from "react";
import "./NavbarStyles.scss";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import USFlag from "../../assets/USFlag.png";
import Tooltip from '@mui/material/Tooltip';


const drawerWidth = 240;

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: "#f1f0f0",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#424242",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    fontSize: "16px",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
const Navbar = () => {
  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          backgroundColor: "white",
          boxShadow: "0px 3px 6px 0px rgba(172,170,170,0.3)",
        }}>
        <Toolbar className="toolbar">
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: "gray", fontSize: "28px" }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search topics..."
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <div className="icons-wrapper">
            <Badge badgeContent={4} color="primary">
              <Tooltip title="Messages">
              <ChatBubbleOutlineIcon className="icons" />
              </Tooltip>
            </Badge>
            <Badge badgeContent={7} color="primary" >
            <Tooltip title="Notifications">
              <NotificationsNoneIcon className="icons" />
            </Tooltip>
            </Badge>{" "}
            <Tooltip title="Languages">
            <img src={USFlag} alt="" className="flag-img" />
            </Tooltip>
            <Tooltip title="Account">
            <PowerSettingsNewIcon className="icons" />
            </Tooltip>

          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
