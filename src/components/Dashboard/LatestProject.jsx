import { Card, CardContent } from '@mui/material'
import React from 'react'
import { Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const LatestProject = () => {
    function createData(name, startDate, endDate, state, assignee) {
        return { name, startDate, endDate, state, assignee };
      }
      const rows = [
        createData('Project Aurora	', "01/01/2023", "31/06/2023", "Done", "James Dalton"),
        createData('Project Eagle', "01/01/2023", "31/06/2023", "In Progress", "Tracy Mack"),
        createData('Project Fireball', "01/01/2023", "31/06/2023", "Done", "Sallie Love"),
        createData('Project Omega', "01/01/2023", "31/06/2023", "Cancelled", "Glenda Jang"),
        createData('Project Yoda', "01/01/2023", "31/06/2023", "Done", "Raymond Ennis"),
        createData('Project Zulu', "01/01/2023", "31/06/2023", "Done", "Matthew Winters"),
      ];
  return (
    <>
      <Card>
        <CardContent>
        <div style={{display:"flex",justifyContent:"space-between"}}>
            <Typography sx={{fontSize:"26px",fontWeight:"500"}}>Latest projects</Typography> 
            <MoreVertIcon sx={{color:"black",cursor:"pointer"}}/>
    </div>
        </CardContent>
        <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Start Date	</TableCell>
            <TableCell align="left">End Date</TableCell>
            <TableCell align="left">State</TableCell>
            <TableCell align="left">Assignee</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell scope="row" sx={{padding:"4px 10px"}}>
                {row.name}
              </TableCell>
              <TableCell align="left" sx={{padding:"4px 10px"}}>{row.startDate}</TableCell>
              <TableCell align="left" sx={{padding:"4px 10px"}}>{row.endDate}</TableCell>
              <TableCell align="left" sx={{padding:"4px 10px"}}>
                <span className='status-badge'
               style={{backgroundColor:row.state==="Done"?"#4caf50":row.state==="Cancelled"?"#ef5350":"#ff9800"}}>
                {row.state}</span>
                </TableCell>
              <TableCell align="left">{row.assignee}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </Card>
    </>
  )
}

export default LatestProject
