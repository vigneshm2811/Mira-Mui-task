import React, { useState } from "react";
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
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button'
import Link from '@mui/material/Link';
import Lucy from '../../assets/avatar-1.jpg'
import Remy from '../../assets/avatar-2.jpg'
import Mixon from '../../assets/avatar-3.jpg'



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
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuType, setMenuType] = useState(null);
  const langauges = ["English", "French", "German", "Dutch"];
  const accounts = ["Profile", "Sign out"];
  const messages =[
    {
      id:"message-1",
      name:"Lucy Lavender",
      messages:"For the price is high and steep",
      imgSrc:Lucy
    },
    {
      id:"message-2",
      name:"Remy Sharp",
      messages:"For the price is high and steep",
      imgSrc:Remy
    },
    {
      id:"message-3",
      name:"Cassandra Mixon",
      messages:"For the price is high and steep",
      imgSrc:Mixon
    },
  ];
  const notification = [
    {
      id:"message-1",
      name:"Lucy Lavender",
      messages:"For the price is high and steep",
      imgSrc:Lucy
    },
    {
      id:"message-2",
      name:"Remy Sharp",
      messages:"For the price is high and steep",
      imgSrc:Remy
    },
    {
      id:"message-3",
      name:"Cassandra Mixon",
      messages:"For the price is high and steep",
      imgSrc:Mixon
    },
  ];

  const handleMenuOpen = (event, type) => {
    setAnchorEl(event.currentTarget);
    setMenuType(type);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setMenuType(null);
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          backgroundColor: "white",
          boxShadow: "0px 3px 6px 0px rgba(172,170,170,0.3)",
        }}
      >
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
            <Badge badgeContent={4} color="primary" onClick={(event) => handleMenuOpen(event, "messages")}>
              <Tooltip title="Messages">
                <ChatBubbleOutlineIcon className="icons" />
              </Tooltip>
            </Badge>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar2"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              open={Boolean(anchorEl) && menuType === "messages"}
              onClose={handleCloseMenu}
            >
               <>
                  <Typography textAlign="center" sx={{ fontSize: "20px",fontWeight:"600",padding:"8px 0"}}>3 New Messages </Typography>
                </>
                <Divider/>
              {messages.map((e) => (
             <>
                <MenuItem key={e.id} onClick={handleCloseMenu} sx={{padding:"0 10px"}}>
                 <div className="message-dropdowns" style={{padding:"0 5px"}}>
                  <div className="profile"><img src={e.imgSrc} alt="" /></div>
                  <div>
                  <h5>{e.name}</h5>
                  <p>{e.messages}</p>
                  </div>
                 </div>
                </MenuItem>
                <Divider/></>
              ))}
           
            <MenuItem align="center">
                <Link underline="none"  sx={{fontSize:"16px"}}>Show all messages </Link>
                </MenuItem>
            </Menu>


            <Badge badgeContent={7} color="primary" onClick={(event) => handleMenuOpen(event, "notifiction")}>
              <Tooltip title="Notifications">
                <NotificationsNoneIcon className="icons" />
              </Tooltip>
            </Badge>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar2"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              open={Boolean(anchorEl) && menuType === "notifiction"}
              onClose={handleCloseMenu}
            >
              <>
                  <Typography textAlign="center" sx={{ fontSize: "20px",fontWeight:"600",padding:"8px 0" }}>7 New Notification </Typography>
                </>
                <Divider/>
              {notification.map((e) => (
                 <>
                 <MenuItem key={e.id} onClick={handleCloseMenu} sx={{padding:"0 10px"}}>
                  <div className="message-dropdowns" style={{padding:"0 5px"}}>
                   <div className="profile"><img src={e.imgSrc} alt="" /></div>
                   <div>
                   <h5>{e.name}</h5>
                   <p>{e.messages}</p>
                   </div>
                  </div>
                 </MenuItem>
                 <Divider/></>
              ))}

                <MenuItem >
                <Link underline="none" sx={{fontSize:"16px"}}>Show all notification </Link>
                </MenuItem>
            </Menu>

            {" "}



            <Tooltip title="Languages">
              <IconButton onClick={(event) => handleMenuOpen(event, "language")} sx={{ p: 0 }}>
                <img src={USFlag} alt="" className="flag-img" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              open={Boolean(anchorEl) && menuType === "language"}
              onClose={handleCloseMenu}
            >
              {langauges.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseMenu}>
                  <Typography textAlign="center" sx={{ fontSize: "14px" }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
            <Tooltip title="Account">
              <PowerSettingsNewIcon className="icons" onClick={(event) => handleMenuOpen(event, "account")} />
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar2"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              open={Boolean(anchorEl) && menuType === "account"}
              onClose={handleCloseMenu}
            >
              {accounts.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseMenu}>
                  <Typography textAlign="center" sx={{ fontSize: "14px" }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
