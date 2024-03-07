import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import { Card, CardContent } from '@mui/material';
import { Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const MobileDekstopGraph = () => {
    const dekstopData = [69, 66, 24, 48, 52, 51, 44,53,62,79,51,68];
    const mobileData = [54, 67, 41, 55, 62, 45, 55,73,60,76,48,79];
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
    <Card>
        <CardContent>
        <div style={{display:"flex",justifyContent:"space-between"}}>
            <Typography sx={{fontSize:"26px",fontWeight:"500"}}>Mobile / Desktop</Typography> 
            <MoreVertIcon sx={{color:"black",cursor:"pointer"}}/>
    </div>
        <BarChart
      className='mobile-bars'
      height={300}
      series={[
          { data: mobileData, label: 'Mobile', id: 'Mobile', stack: 'total',barWidth: 10,color:"#4782da" },
          { data: dekstopData, label: 'Desktop', id: 'Dekstop', stack: 'total',barWidth: 10,color:"#c2d6f3" },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
      legend={{ hidden: true }}
      tooltip={{ trigger: 'item' }}
      axisHighlight={{ x: "none", y: "none" }}
      

    />
        </CardContent>
   
    </Card>
    </>
  )
}

export default MobileDekstopGraph
