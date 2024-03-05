import React from "react";
import "./DefaultStyles.scss";
import CachedIcon from "@mui/icons-material/Cached";
import FilterListIcon from "@mui/icons-material/FilterList";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import TotalRevenueGraph from "./TotalRevenueGraph";
import WeeklySalesPieChart from "./WeeklySalesPieChart";
import MobileDekstopGraph from "./MobileDekstopGraph";
import LatestProject from "./LatestProject";
const Default = () => {
  const dashboardCardsData = [
    {
      id:"cards-1",
      headings:"Sales Today",
      timing:"Today",
      value:"2.532",
      percentagestats:"positive",
      percentage:"+26%",
      duration:"Since last month"
    },
    {
      id:"cards-2",
      headings:"Visitors",
      timing:"Annual",
      value:"170.212",
      percentagestats:"negative",
      percentage:"-14%",
      duration:"Since last month"
    },
    {
      id:"cards-3",
      headings:"Total Earnings",
      timing:"Monthly",
      value:"$ 24.300",
      percentagestats:"positive",
      percentage:"+18%",
      duration:"Since last month"
    },
    {
      id:"cards-4",
      headings:"Pending Orders",
      timing:false,
      value:"45",
      percentagestats:"negative",
      percentage:"-9%",
      duration:"Since last month"
    },
  ] 
  return (
    <div className="default-dashboard-container">
      <div className="heading">
        <div className="heading-text">
          <h2>Default Dashboard</h2>
          <p>Welcome back, User! We've missed you. 👋</p>
        </div>

        <div className="heading-buttons">
          <IconButton disableRipple>
          <CachedIcon className="icons" />
          </IconButton>
          <IconButton disableRipple>
          <FilterListIcon className="icons" />
          </IconButton>
          <Button className="button" disableElevation>
            Today: March 4
          </Button>
        </div>
      </div>
      <Divider />

     <div className="dashboard-cards">
    
     {
      dashboardCardsData.map((e)=>{
        return(
          <Card className="cards" key={e.id}>
        <CardContent sx={{padding:"10px 15px"}}>
         <div className="card-heading">
         <Typography sx={{ mb: 1.3 }} >
          {e.headings}
          </Typography>
          {e.timing && <div className="badges">{e.timing}</div>}
         </div>
          <Typography sx={{fontSize:"36px", margin:"0px"}}>
          {e.value}
          </Typography>
          <div className="card-footer" style={{margin:"0"}}>
            <p className={e.percentagestats==="positive"?"positive":"negative"}>{e.percentage}</p>
            <Typography sx={{fontSize:"20px"}} className="text"> Since last month</Typography>
          </div>
        </CardContent>
       
      </Card>
        )
      })
     }
    


     


 
     </div>

     <div className="graphs-Section">
      <div className="total-revenue">
        <TotalRevenueGraph/>
      </div>
      <div className="weekly-sales">
        <WeeklySalesPieChart/>
      </div>
      

     </div>

     <div className="last-section">
        <div className="moblie-dekstop-graph">
          <MobileDekstopGraph/>
        </div>
        <div className="latest-projects">
          <LatestProject/>
        </div>
      </div>
    </div>
    
  );
};

export default Default;
