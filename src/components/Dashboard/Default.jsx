import React from 'react'
import "./DefaultStyles.scss"
import CachedIcon from '@mui/icons-material/Cached';
import FilterListIcon from '@mui/icons-material/FilterList';
import Button from '@mui/material/Button';




const Default = () => {
  return (
    <div className='default-dashboard-container'>
      <div className='heading'>
       <div className='heading-text'>
       <h2>Default Dashboard</h2>
        <p>Welcome back, User! We've missed you. 👋</p>
       </div>

       <div className='heading-buttons'>
          <CachedIcon className='icons'/>
          <FilterListIcon className='icons'/>
          <Button className='button' disableElevation>
      Today: March 4
    </Button>
       </div>
      </div>
   
    </div>
  )
}

export default Default
