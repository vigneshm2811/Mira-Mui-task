import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Default from './components/Dashboard/Default.jsx'
import Orders from './components/Orders/Orders.jsx'
import ResponsiveDrawer from './sample.jsx'
import Pages from './components/Pages/Pages.jsx'
import Projects from './components/Projects/Projects.jsx'
import Calender from './components/Calendar/Calender.jsx'
import Auth from './components/Auth/Auth.jsx'
import Task from './components/Task/Task.jsx'
import Invoice from './components/Invoice/Invoice.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Default/>}/>
      <Route path='orders' element={<Orders/>}/>
      <Route path='pages' element={<Pages/>}/>
      <Route path='project' element={<Projects/>}/>
      <Route path='calendar' element={<Calender/>}/>
      <Route path='auth' element={<Auth/>}/>
      <Route path='task' element={<Task/>}/>
      <Route path='invoice' element={<Invoice/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
