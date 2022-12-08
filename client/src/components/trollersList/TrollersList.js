import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'
import api from '../../model/api/api';
import './trollersList.css'
import { NavLink } from "react-router-dom";
import { CaretDownFill, CaretUpFill } from "react-bootstrap-icons";


const TrollersList = () => {
  const getNameById = (id) => {
    const allJanitor = api.JanitorAPI.all();
    const janitor = allJanitor.find((value) => {
      return value.id === id;
    })
    if (!janitor) return "-";
    return janitor.firstName + " " + janitor.lastName;
  }
  const [trollers, setTrollers] = useState(() => {
    const allTroller = api.TrollerAPI.all();
    return allTroller.map((value, index) => {
      value["userName"] = getNameById(value.uesdById);
      return value;
    })
  });
  const [reverse, setReverse] = useState([false]);

  const HandleOnSort = (property, idx) => {
    const sortedArray = [...trollers].sort(function (a, b) {
      var x = a[property]; var y = b[property];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
    if (reverse[idx]) sortedArray.reverse();
    const newReverse = [false]
    newReverse[idx] = !reverse[idx]
    setReverse(newReverse)
    setTrollers(sortedArray);
  }
  return (
    <>
      <Navbar />
      <>
        <div className='title border-bottom-gray'>
          <div className='left-div'>
            <h1>Trollers</h1>
          </div>
          <div className='right-div'>
            <div className='navlink-left'>
              <NavLink to='/vehicles/trollers' className='navlink'>Trollers</NavLink>
            </div>
            <div className='navlink-right'>
              <NavLink to='/vehicles/trucks' className='navlink'>Trucks</NavLink>
            </div>

          </div>
        </div>
        <div className='table'>
          <table id='troller-table'>
            <tbody>
              <tr>
                <th className='table-header'>Troller ID</th>
                <th className='table-header'>Used by</th>
                <th className='table-header'>Location</th>
                <th className='table-header'>Status
                  <span onClick={() => HandleOnSort("status", 0)}>
                    {reverse[0] ? <CaretDownFill />
                      : <CaretUpFill />}
                  </span>
                </th>
              </tr>
              {trollers.map((value, index) => {
                return (
                  <tr>
                    <td className='table-item'>{value.id}</td>
                    <td className='table-item'>{value.userName}</td>
                    <td className='table-item'>{value.location}</td>
                    <td className='table-item'>{!value.status ? <div className='status-available'>&bull; Available</div> : <div className='status-in-use'>&bull; In use</div>}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </>
    </>

  )
}

export default TrollersList;