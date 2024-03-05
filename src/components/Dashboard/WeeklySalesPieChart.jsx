import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import { Card, CardContent } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

import MoreVertIcon from '@mui/icons-material/MoreVert';



const WeeklySalesPieChart = () => {
    const data = [
        { value: 260,label:"Social",color:"#4782da" },
        { value: 125,label:"Search Engines",color:"#f44336" },
        { value: 54, label:"Direct",color:"#ff9800"},
        { value: 146,label:"Other",color:"#eeeeee" },
      ];
      
      const size = {
        height: 180,
        
      };
      
      const StyledText = styled('text')(({ theme }) => ({
        fill: theme.palette.text.primary,
        textAnchor: 'middle',
        dominantBaseline: 'central',
        fontSize: 20,
      }));
      
    function PieCenterLabel({ children }) {
        const { width, height, left, top } = useDrawingArea();
        return (
          <StyledText x={left + width / 2} y={top + height / 2}>
            {children}
          </StyledText>
        );
      }

      function createData(name, revenue ,value,color) {
        return { name, revenue, value,color};
      }
      
      const rows = [
        createData('Social', 260, "+35%",true),
        createData('Search Engines', 125,"-12%",false),
        createData('Direct', 54,"+46%",true),
        createData('Other', 146	,"+24%",true),
       
      ];
      
      
  return (
    <>
   <Card sx={{width:"100%"}}>
    <CardContent>
    <div style={{display:"flex",justifyContent:"space-between"}}>
            <Typography sx={{fontSize:"26px",fontWeight:"500"}}>Weekly sales</Typography> 
            <MoreVertIcon sx={{color:"black",cursor:"pointer"}}/>
    </div>
   <PieChart  series={[{ data, innerRadius: 70,paddingAngle: 2 }]} {...size}  
   legend={{ hidden: true }} 
   tooltip={{ trigger: 'item' }}
   sx={{margin:" 2px auto",alignSelf:"center"}}>
      <PieCenterLabel>
        
        More Sales
      </PieCenterLabel>
    </PieChart>

    <TableContainer component={Paper} sx={{boxShadow:"none"}}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Source</TableCell>
            <TableCell align="right">Revenue</TableCell>
            <TableCell align="right">Value</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 },  }}
            >
              <TableCell component="th" scope="row" sx={{padding:"4px 10px"}}>
                {row.name}
              </TableCell>
              <TableCell align="right" sx={{padding:"4px 10px"}}>{row.revenue}</TableCell>
              <TableCell align="right" 
              sx={{padding:"4px 10px",
              color:row.color?"#66bb6a":"#ef5350"
              }}>
                {row.value}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </CardContent>
  
   </Card>
    </>
  )
}

export default WeeklySalesPieChart
