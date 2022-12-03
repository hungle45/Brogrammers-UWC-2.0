import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import api from '../../model/api/api';
import './mcpsList.css'
import { CaretDownFill, CaretUpFill, FunnelFill } from "react-bootstrap-icons";


const MCPsList = () => {
  const [MCPs, setMCPs] = useState(api.mcpAPI.all());
  const [onlyFull, setOnlyFull] = useState(false)
  const HandleOnSort = (property, reverse) => {
    const sortedArray = [...MCPs].sort(function (a, b) {
      var x = a[property]; var y = b[property];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
    if (reverse) sortedArray.reverse();
    setMCPs(sortedArray);
  }

  const HandleOnFilterFull = () => {
    setOnlyFull(!onlyFull);

    if (onlyFull) {
      try {
        if (!api.mcpAPI.has_property('percentage')) return;
        setMCPs(api.mcpAPI.filter({ "percentage": 100 }));
      } catch (error) {
        setMCPs([]);
      }
    } else {
      setMCPs(api.mcpAPI.all())
    }
  }


  return (
    <>
      <Navbar />
      <>
        <div>
          <div>
            %Capacity
            <span onClick={() => HandleOnSort('percentage', false)}>
              <CaretUpFill />
            </span>
            <span onClick={() => HandleOnSort('percentage', true)}>
              <CaretDownFill />
            </span>
          </div>
          <div>
            last collected
            <span onClick={() => HandleOnSort('lastCollected', false)}>
              <CaretUpFill />
            </span>
            <span onClick={() => HandleOnSort('lastCollected', true)}>
              <CaretDownFill />
            </span>
          </div>
          <div>
            Capacity
            <span onClick={() => HandleOnFilterFull()}>
              <FunnelFill />
            </span>
          </div>
        </div>
        <div>{!MCPs.length ? <></> :
          MCPs.map((value, index) => {
            return (<div key={value.id}>
              <img src="" alt="MCP img"></img>
              <div>{value.name}</div>
              <div>% Capacity: {value.percentage}</div>
              <div>Last collected: {value.lastCollected}</div>
            </div>)
          })}</div>

        <div class="mcp-button" style="margin: 10px;">
            <div class="mcp-button-container">
                <label> Sort by capacity</label>
                <button> Capacity</button>
            </div>
            <div class="mcp-button-container">
                <label> Sort by last collected</label>
                <button> Last collected</button>
            </div>
            <div class="mcp-button-container">
                <label> Filter by capacity</label>
                <button> Capacity</button>
            </div>
        </div>

        <div class="controller-container">
            <div class="controller-container-column">
                <div class="controller-container-small-column">
                    <img src="./images/mcp-controller.png"></img>
                </div>
                <div class="controller-container-small-column">
                    <img src="./images/mcp-controller.png" width="10px" height="10px"></img>
                    <label> Zone A</label><br></br>
                    <img src="./images/mcp-controller.png" width="10px" height="10px"></img>
                    <label> Capacity</label><br></br>
                    <img src="./images/mcp-controller.png" width="10px" height="10px"></img>
                    <label> Last collected</label><br></br>
                </div>
            </div>
            <div class="controller-container-column">
                <div class="controller-container-small-column">
                    <img src="./images/mcp-controller.png"></img>
                </div>
                <div class="controller-container-small-column">
                    <img src="./images/mcp-controller.png" width="10px" height="10px"></img>
                    <label> Zone A</label><br></br>
                    <img src="./images/mcp-controller.png" width="10px" height="10px"></img>
                    <label> Capacity</label><br></br>
                    <img src="./images/mcp-controller.png" width="10px" height="10px"></img>
                    <label> Last collected</label><br></br>
                </div>
            </div>
        </div>
        <div class="controller-container">
            <div class="controller-container-column">
                <div class="controller-container-small-column">
                    <img src="./images/mcp-controller.png"></img>
                </div>
                <div class="controller-container-small-column">
                    <img src="./images/mcp-controller.png" width="10px" height="10px"></img>
                    <label> Zone A</label><br></br>
                    <img src="./images/mcp-controller.png" width="10px" height="10px"></img>
                    <label> Capacity</label><br></br>
                    <img src="./images/mcp-controller.png" width="10px" height="10px"></img>
                    <label> Last collected</label><br></br>
                </div>
            </div>
            <div class="controller-container-column">
                <div class="controller-container-small-column">
                    <img src="./images/mcp-controller.png"></img>
                </div>
                <div class="controller-container-small-column">
                    <img src="./images/mcp-controller.png" width="10px" height="10px"></img>
                    <label> Zone A</label><br></br>
                    <img src="./images/mcp-controller.png" width="10px" height="10px"></img>
                    <label> Capacity</label><br></br>
                    <img src="./images/mcp-controller.png" width="10px" height="10px"></img>
                    <label> Last collected</label><br></br>
                </div>
            </div>
        </div>
      </>
    </>

  )
}

export default MCPsList