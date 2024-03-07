import React,{useState} from 'react'
import { Outlet } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import "./LayoutStyles.scss"

const drawerWidth = 250;

const Layout = () => {
  const [sidebarShow, setsidebarShow] = useState(null);
  const handleDataFromChild = (data) => {
    setsidebarShow(data);
  };
    return (
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              ml: { sm: `${drawerWidth}px` },
            }}
              className='appbar'
          >
            <Navbar propsdata={handleDataFromChild}/>
          </AppBar>
          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, }}
            aria-label="mailbox folders"
            className='sidebars'
          >
            
            <Sidebar/>
         
         
          </Box>
          {sidebarShow &&
          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, }}
            aria-label="mailbox folders"
          
          >
            
            <Sidebar/>
          </Box> }
          <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` },padding:"10px 40px" }}
          >
            <Toolbar />
            <Outlet/>
    
            
          </Box>
        </Box>
      );
    }
    


export default Layout



