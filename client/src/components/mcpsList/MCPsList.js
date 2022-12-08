import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import api, { mcpAPI } from '../../model/api/api';
import './mcpsList.css'
import { CaretDownFill, CaretUpFill } from "react-bootstrap-icons";



const MCPsList = () => {
  const [MCPs, setMCPs] = useState(api.mcpAPI.all());
  const [onlyFull, setOnlyFull] = useState(false)
  const [reverse, setReverse] = useState([false, false, false]);

  const HandleOnSort = (property, idx) => {
    const sortedArray = [...MCPs].sort(function (a, b) {
      var x = a[property]; var y = b[property];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
    if (reverse[idx]) sortedArray.reverse();
    const newReverse = [false]
    newReverse[idx] = !reverse[idx]
    setReverse(newReverse)
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
  console.log(MCPs)

  return (
    <>
      <Navbar />
      <>
        <div className='title border-bottom-gray'>
          <h1>MCPs list</h1>
        </div>
        <div className='table'>
          <table id='mcp-table'>
            <tbody>
              <tr>
                <th className='table-header'>MCP ID</th>
                <th className='table-header'>MCP name</th>
                <th className='table-header'>Capacity
                  <span onClick={() => HandleOnSort("percentage", 0)}>
                    {reverse[0] ? <CaretDownFill />
                      : <CaretUpFill />}
                  </span>
                </th>
                <th className='table-header'>Last visited</th>
              </tr>
              {MCPs.map((value, index) => {
                return (
                  <tr>
                    <td className='table-item'>{value.id}</td>
                    <td className='table-item'>{value.name}</td>
                    {value.percentage <= 40 ?
                      <td className='table-item first-level'>{value.percentage}%</td> :
                      value.percentage <= 60 ?
                        <td className='table-item second-level'>{value.percentage}%</td> :
                        value.percentage <= 80 ?
                          <td className='table-item third-level'>{value.percentage}%</td> :
                          <td className='table-item fourth-level'>{value.percentage}%</td>}
                    <td className='table-item'>{value.lastCollected}</td>
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

export default MCPsList