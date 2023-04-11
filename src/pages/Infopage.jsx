import React, {useState} from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'


//data
import pathdata from "../data/pathdata.json"


function InfoPage() {

  return (
    <div id='main'>
        <div className="d-flex" id="wrapper">
            <Sidebar />
            <div id="page-content-wrapper" className='mx-5 mt-5'>
                <Outlet />
            </div>
        </div>
    </div>
    
  )
}

export default InfoPage