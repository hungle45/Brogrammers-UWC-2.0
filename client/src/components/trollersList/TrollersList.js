import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'
import api from '../../model/api/api';
import { NavLink } from "react-router-dom";
import './trollersList.css'

const TrollersList = () => {
  const [trollers, setTrollers] = useState(api.TrollerAPI.all());
  return (
    <>
      <Navbar />
      <>
        <div>
          <NavLink to='/vehicles/trollers'>Controller</NavLink>
          <NavLink to='/vehicles/trucks'>Collect Vehicle</NavLink>
        </div>
        <div>{!trollers.length ? <></> :
          trollers.map((value, index) => {
            return (<div key={value.id}>
              <img src="" alt="Troller img"></img>
              <div>{value.id}</div>
              <div>{!value.status ? "Available" : "Unavailable"}</div>
            </div>)
          })}</div>
        
        <div style={{margin: '10px',}}>
            <button> MCP controllers</button>
            <button> Collecting vehicles</button>
        </div>

        <div class="controller-container">
            <div class="controller-container-column">
                <div class="controller-container-small-column">
                    <img src="./images/mcp-controller.png" alt='sth'></img>
                </div>
                <div class="controller-container-small-column">
                    <label> 78A1-8501</label><br></br>
                    <label> Available</label>
                </div>
            </div>
            <div class="controller-container-column">
                <div class="controller-container-small-column">
                    <img src="./images/mcp-controller.png" alt='sth'></img>
                </div>
                <div class="controller-container-small-column">
                    <label> 78A1-8501</label><br></br>
                    <label> Available</label>
                </div>
            </div>
        </div>
        <div class="controller-container">
            <div class="controller-container-column">
                <div class="controller-container-small-column">
                    <img src="./images/mcp-controller.png" alt='sth'></img>
                </div>
                <div class="controller-container-small-column">
                    <label> 78A1-8501</label><br></br>
                    <label> Available</label>
                </div>
            </div>
            <div class="controller-container-column">
                <div class="controller-container-small-column">
                    <img src="./images/mcp-controller.png" alt='sth'></img>
                </div>
                <div class="controller-container-small-column">
                    <label> 78A1-8501</label><br></br>
                    <label> Available</label>
                </div>
            </div>
        </div>
      </>
    </>

  )
}

export default TrollersList;