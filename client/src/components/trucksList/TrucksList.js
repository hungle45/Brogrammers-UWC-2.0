import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'
import api from '../../model/api/api';
import { NavLink } from "react-router-dom";
import './trucksList.css'

const TrucksList = () => {
  const [trucks, setTrucks] = useState(api.CollectingVehicleAPI.all());
  return (
    <>
      <Navbar></Navbar>
      <>
        <div style={{margin: '10px',}}>
          <NavLink to='/vehicles/trollers'>Trollers</NavLink>
          <NavLink to='/vehicles/trucks'>Collect Vehicle</NavLink>
        </div>


        <div class="controller-container">{!trucks.length ? <></> :
          trucks.map((value, index) => {
            return (
            <div key={value.id} class="controller-container-column">
              <div class="controller-container-small-column">
                <img src="./images/mcp-controller.png" alt="Truck img"></img>
              </div>

              <div class="controller-container-small-column">
                <div>{value.id}</div>
                <div>{!value.status ? "Available" : "Unavailable"}</div>
              </div>
            </div>
            )})}
        </div>
      </>
    </>

  )
}

export default TrucksList;