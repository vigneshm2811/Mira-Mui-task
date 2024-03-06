import React,{useState} from "react";
import "./SidebarStyles.scss";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import ListItemButton from "@mui/material/ListItemButton";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import PieChartIcon from '@mui/icons-material/PieChart';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import ListIcon from '@mui/icons-material/List';
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import GridViewIcon from '@mui/icons-material/GridView';
import SvgIcon from '@mui/material/SvgIcon';
import WebIcon from '@mui/icons-material/Web';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import EventIcon from '@mui/icons-material/Event';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import muiLogo from '../../assets/mui-logo.png'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MapIcon from '@mui/icons-material/Map';
import { Link } from "react-router-dom";




const drawerWidth = 250;

const Sidebar = () => {
  const [openDropdowns, setOpenDropdowns] = useState({});

  const handleClick = (id) => {
    setOpenDropdowns({
      ...openDropdowns,
      [id]: !openDropdowns[id]
    });
  };

  const sidebarPagesData = [
    {
      id:"item-1",
      lable:"Dashboard",
      dropdown:true,
      icons:EqualizerIcon,
      children:[{
        id:"child-item-1",
        lable:"Default",
        path:"/"
      },
      {
        id:"child-item-2",
        lable:"Analytics",
        path:"/"
      },
      {
        id:"child-item-3",
        lable:"SaaS",
        path:"/"
      },
    ]

    },
    {
      id:"item-2",
      lable:"Pages",
      dropdown:true,
      icons:WebIcon,
      children:[{
        id:"child-item-4",
        lable:"Profile",
        path:"pages"
      },
      {
        id:"child-item-5",
        lable:"Settings",
        path:"pages"
      },
      {
        id:"child-item-6",
        lable:"Pricing",
        path:"pages"
      },
      {
        id:"child-item-7",
        lable:"Chat",
        path:"pages"
      },
      {
        id:"child-item-8",
        lable:"Blank Page",
        path:"pages"
      },
    ]

      
    },
    {
      id:"item-3",
      lable:"Projects",
      badge: 8,
      dropdown:false,
      icons:BusinessCenterIcon,
      path:"project/"
    },
    {
      id:"item-4",
      lable:"Orders",
      dropdown:false,
      icons:ShoppingCartCheckoutIcon,
      path:"/orders"
    },
    {
      id:"item-5",
      lable:"Invoice",
      dropdown:true,
      icons:CreditCardIcon,
      children:[{
        id:"child-item-9",
        lable:"List",
        path:"invoice"
      },
      {
        id:"child-item-10",
        lable:"Detail",
        path:"invoice"
      },
     
    ]
    },
    {
      id:"item-6",
      lable:"Task",
      badge: 17,
      dropdown:false,
      icons:TaskAltIcon,
      path:"task"
    },
    {
      id:"item-7",
      lable:"Calendar",
      dropdown:false,
      icons:EventIcon,
      path:"calendar"
    },
    {
      id:"item-8",
      lable:"Auth",
      dropdown:true,
      icons:PeopleOutlineIcon,
      children:[{
        id:"child-item-11",
        lable:"Sign In",
        path:"auth"
      },
      {
        id:"child-item-12",
        lable:"Sign Up",
        path:"auth"
      },
      {
        id:"child-item-13",
        lable:"Reset Password",
        path:"auth"
      },
      {
        id:"child-item-14",
        lable:"404 Page",
        path:"auth"
      },
      {
        id:"child-item-15",
        lable:"500 Page",
        path:"auth"
      },
    ]
    }
  ]

  const sidebarElementsData = [
    {
      id:"item-9",
      lable:"Components",
      dropdown:true,
      icons:GridViewIcon,
      children:[{
        id:"child-item-16",
        lable:"Default",
        path:"/"
      },
      {
        id:"child-item-17",
        lable:"Analytics",
        path:"/"
      },
      {
        id:"child-item-18",
        lable:"SaaS",
        path:"/"
      },
    ]

    },
    {
      id:"item-10",
      lable:"Charts",
      dropdown:true,
      icons:PieChartIcon,
      children:[{
        id:"child-item-19",
        lable:"Profile",
        path:"/"
      },
      {
        id:"child-item-20",
        lable:"Settings",
        path:"/"
      },
      {
        id:"child-item-21",
        lable:"Pricing",
        path:"/"
      },
      {
        id:"child-item-22",
        lable:"Chat",
        path:"/"
      },
      {
        id:"child-item-23",
        lable:"Blank Page",
        path:"/"
      },
    ]
    },
    {
      id:"item-11",
      lable:"Forms",
      badge: 8,
      dropdown:true,
      icons:TaskAltIcon,
      path:"/"
    },
    {
      id:"item-12",
      lable:"Tables",
      dropdown:true,
      icons:ListIcon,
      path:"/"
    },
    {
      id:"item-13",
      lable:"Icons",
      dropdown:true,
      icons:FavoriteBorderIcon,
      children:[{
        id:"child-item-24",
        lable:"List",
        path:"/"
      },
      {
        id:"child-item-25",
        lable:"Detail",
        path:"/"
      },
     
    ]
    },
    {
      id:"item-14",
      lable:"Maps",
      badge: 17,
      dropdown:true,
      icons:MapIcon,
      path:"/"
    },
 
  ]

  return (
    <>
      <Box sx={{ display: "flex", }} >
        <CssBaseline />

        <Drawer
        className="sideBars"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              backgroundColor:"#233044",
              color:'#eeeeee',
            },
          }}
          variant="permanent"
          anchor="left">
          <Toolbar >
            <div className="logo-wrapper">
              <img src={muiLogo} alt="" />
              <p>Mira</p>
            </div>
            </Toolbar>
          <List
            sx={{ width: "100%", maxWidth: 380, backgroundColor:"#233044" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" sx={{backgroundColor:"#233044",color:'#747c88', fontWeight:"600"}} id="nested-list-subheader">
                PAGES
              </ListSubheader>
            }>
            {sidebarPagesData.map((e,i)=>{
              return(
                e.dropdown ?
                <>
                <ListItemButton onClick={() => handleClick(e.id)} >
                <ListItemIcon>
                <SvgIcon component={e.icons} inheritViewBox sx={{fontSize:"28px",color:'#747c88'}}/>
                </ListItemIcon>
                <ListItemText primary={e.lable} className="list-items-parent" />
                {openDropdowns[e.id] ? <ExpandLess sx={{fontSize:"24px"}}/> : <ExpandMore sx={{fontSize:"24px"}}/>}
              </ListItemButton>
              <Collapse in={openDropdowns[e.id]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
              {e.children && e.children.map((child, index) => (
                    <ListItemButton to={child.path} key={index} sx={{ pl: 4 }}>
                      <ListItemText primary={child.lable} className="list-items-child"/>
                    </ListItemButton>
                  ))}
              </List>
            </Collapse>
            </>
              :
                <ListItemButton key={i} to={e.path}>
                <ListItemIcon>
                <SvgIcon component={e.icons} inheritViewBox sx={{fontSize:"28px",color:'#747c88'}}/>
                </ListItemIcon>
                <ListItemText primary={e.lable} className="list-items-parent" />
              </ListItemButton>
                 
              )
            })}
          </List>

          <List
            sx={{ width: "100%", maxWidth: 380, backgroundColor:"#233044" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" sx={{backgroundColor:"#233044",color:'#747c88', fontWeight:"600"}} id="nested-list-subheader">
                ELEMENTS
              </ListSubheader>
            }>
            {sidebarElementsData.map((e,i)=>{
              return(
                e.dropdown ?
                <>
                <ListItemButton onClick={() => handleClick(e.id)} >
                <ListItemIcon>
                <SvgIcon component={e.icons} inheritViewBox sx={{fontSize:"28px",color:'#747c88'}}/>
                </ListItemIcon>
                <ListItemText primary={e.lable} className="list-items-parent" />
                {openDropdowns[e.id] ? <ExpandLess sx={{fontSize:"24px"}}/> : <ExpandMore sx={{fontSize:"24px"}}/>}
              </ListItemButton>
              <Collapse in={openDropdowns[e.id]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
              {e.children && e.children.map((child, index) => (
                    <ListItemButton key={index} sx={{ pl: 4 }}>
                      <ListItemText primary={child.lable} className="list-items-child"/>
                    </ListItemButton>
                  ))}
              </List>
            </Collapse>
            </>
              :
                <ListItemButton key={i}>
                <ListItemIcon>
                <SvgIcon component={e.icons} inheritViewBox sx={{fontSize:"28px",color:'#747c88'}}/>
                </ListItemIcon>
                <ListItemText primary={e.lable} className="list-items-parent" />
              </ListItemButton>
                 
              )
            })}
          </List>
        </Drawer>
      </Box>
    </>
  );
};

export default Sidebar;
