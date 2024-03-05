import React from 'react'
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import "./DefaultStyles.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';

const TotalRevenueGraph = () => {
    const salesData = [2115, 1562, 1584, 1892, 1487, 2223, 2996,2448,2905,3838,2917,3287];
const ordersData = [958, 735, 629, 883, 915, 1214, 1212,1596,2128,1466,1827,1926];
const xLabels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];
  return (
    <>
      <Card sx={{}} >
        <CardContent >
            <div style={{display:"flex",justifyContent:"space-between"}}>
            <Typography sx={{fontSize:"26px",fontWeight:"500"}}>Total revenue</Typography> 
            <MoreVertIcon sx={{color:"black",cursor:"pointer"}}/>
            </div>

            <LineChart
      style={{ width: '100%',height:"100%" }}
      height={410}
      className="line-chart"

     
      series={[
        { data: salesData,label:"Sales", color: '#4782da' },
        { data: ordersData,label:"Order", color:"#9a9b9c"  },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
      legend={{ hidden: true }}
      tooltip={{ trigger: 'item' }}
      axisHighlight={{ x: "none", y: "none" }}
    />
        </CardContent>
      </Card>
    </>
  )
}

export default TotalRevenueGraph
