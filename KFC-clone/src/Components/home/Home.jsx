import "./home.css";
import React from 'react';
import { Button } from '../main_button/Button';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate= useNavigate()
  return (
    <>
      <div className="black">
        <b>LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</b>

        <Button onClick={() => {
          navigate('')
        }}>Start Order</Button>
      </div>

      <div>
        <img className="banner" src="banner.jpg"  alt="banner img"/>
      </div>

      
    </>
  )
}

export default Home