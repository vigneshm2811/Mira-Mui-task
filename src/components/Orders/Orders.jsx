import React from 'react'
import "./OrdersStyles.scss"
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

import AddIcon from '@mui/icons-material/Add';
import OrdersTable from './OrdersTable';

const Orders = () => {
  return (
    <div className='orders-conatiner'>
       <div className="heading">
        <div className="heading-text">
          <h2>Orders</h2>
          <div className='links'>
            <span>Dashboard</span>
            <div className='divider'></div>
            <span>Pages</span>
            <div className='divider'></div>
            <span>Orders</span>
          </div>
         
        </div>

        <div className="heading-buttons">
         
          <Button className="button"  disableElevation>
          <AddIcon /> New Order
          </Button>
        </div>
      </div>
      <Divider sx={{marginTop:"30px"}}/>

      <div className='orders-table'>
            <OrdersTable/>
      </div>
    </div>
  )
}

export default Orders
