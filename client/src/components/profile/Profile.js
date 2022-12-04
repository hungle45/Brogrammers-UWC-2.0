import React from 'react'
import Navbar from '../navbar/Navbar'
import './profile.css'

const Profile = () => {
  return (
    <>
      <Navbar></Navbar>
      <>
        <div>Profile</div>

        <div class="info-row">
          <div class="info-column left">
              <label> back officer's info</label><br></br>
              <img src="./images/default.png" alt="Employee's profile"></img><br></br>
              <label> Craig</label>
          
          </div>
          
          <div class="info-column right">
              <div class="input-line-1" style={{width: '135px'}}>
                  <label> First name</label><br></br>
                  <input type="text" value="Huy" style={{width: '135px'}}></input>
              </div>
              <div class="input-line-1" style={{width: '135px'}}>
                  <label> Last name</label><br></br>
                  <input type="text" value="Nguyen" style={{width: '135px'}}></input>
              
              </div>
              <div class="input-line-1" style={{width: '300px'}}>
                  <label> Email</label><br></br>
                  <input type="text" value="abc@gmail.com" style={{width: '300px'}}></input>
              </div>
              
              <div class="input-line-2">
                  <label> Birthdate</label><br></br>
                  <input type="date" value="01/01/2000" style={{width: '300px'}}></input>
              </div>
              <div class="input-line-2">
                  <label> CCCD</label><br></br>
                  <input type="number" value="0123456789" disabled style={{width: '300px'}}></input>
              </div>
              <div class="input-line-2">
                  <label> Username</label><br></br>
                  <input type="text" value="Huy" style={{width: '300px'}}></input>
              </div>
              <div class="input-line-2">
                  <label> Work start time</label><br></br>
                  <input type="date" value="01/01/2000" style={{width: '300px'}}></input>
              </div>
              <div class="input-button-label">
                  <label> Password</label><br></br>
              </div>
              <div class="input-button">
                  <input type="password" value="0123456789"></input>
                  <button type="button">Change password</button>
              </div>
              <div class="info-submit-button">
                  <button type="button" >Submit</button>
              </div>
          </div>    
        </div>
      </>
    </>
  )
}

export default Profile