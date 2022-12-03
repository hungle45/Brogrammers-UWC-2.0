import React, { useState} from 'react'
import Navbar from '../navbar/Navbar';
import data from '../../model/api/api';
import './assignTask.css';

const AssignTask = () => {
  const [collectingVehicles, setCollecingVehicles] = useState(data.CollectingVehicleAPI.all())
  const [collectors, setCollectors] = useState(data.CollectorAPI.all())
  const [routes, setRoutes] = useState(() => {
    return data.RouteAPI.all().map((route) => {
      const mcpIdList =  route.MCPIdList
      const mcpList =  mcpIdList.map((mcpId) => data.mcpAPI.get_by_id(mcpId))
      return {
        "id": route.id,
        "name": `Route ${route.id}`,
        "mcpList": mcpList
      }
    })
  })

  const [selectedRoute, setSelectedRoute] = useState(routes[0])

  const HandleSeletecRoute = (e) => {
    const routeId = e.target.value
    setSelectedRoute(routes.find(ele => ele.id === routeId))
  }


  return (
    <>
      <Navbar></Navbar>
      <>
        <div>AssignTask</div>

        <form>
          <label htmlFor="collectors">Username:</label>
          <select name="collectors" id="collectors">
            {!collectors.length ? <></>:
              collectors.map((collector, index) => 
              (<option key={index} value={collector.id}>{collector.username}</option>))}
          </select>

          <label htmlFor="vehicles">VehicleID:</label>
          <select name="vehicles" id="vehicles">
            {!collectingVehicles.length ? <></>:
              collectingVehicles.map((vehicle, index) => 
              (<option key={index} value={vehicle.id}>{vehicle.id}</option>))}
          </select> 

          <label htmlFor="routes">Route:</label>
          <select name="routes" id="routes" onChange={HandleSeletecRoute}>
            {!routes.length ? <></>:
              routes.map((route, index) => 
              (<option key={index} value={route.id}>{route.name}</option>))}
          </select> 

          <div>{!selectedRoute.mcpList.length ? <></> :
            selectedRoute.mcpList
              .map(mcp => (<span>{mcp.name}</span>))
              .reduce((acc, x) => acc === null ? x : <>{acc} <span>{'>'}</span> {x}</>, null)
          }</div>

          <input type="submit" value="Submit"></input>
          <div class="assign-tasks-label">
            <label> Assign tasks</label>
          </div>

          <div class="assign-tasks">
            <div class="assign-tasks-column">
              <label> Username</label><br></br>
              <input type="text" value="giahuy1234"> </input>
            </div>
    
            <div class="assign-tasks-column">
              <label> Vehicle ID</label><br></br>
              <input type="text" value="78A1-8501"> </input>
            </div>
          </div>

          <div class="assign-tasks-label">
            <label> Map</label><br></br>
          </div>

          <div>
            <img class="mapimage" src="https://allaboutcats.com/wp-content/uploads/2022/01/Calico-Cats.jpg" width="1200px" height="300px" alt="cat map"></img>
          </div>

          <div class="assign-tasks-submit-button">
            <button type="button"> Submit</button>
          </div>

        </form>

      </>
    </>
  )
}

export default AssignTask