import React from 'react';
import { Link } from "react-router-dom";
import Contribution from './Contribution';
import video from './Videos/video-2.mp4';
import Coding from './Coding';
import '../index.css';

const Home=(props)=> {

  return (
    <div className="row">
    <div className="hero-container">
    <video src={video} autoPlay loop muted/>
    <h1>Build your coding skills <br />
        through <strong style={{ color: "#0D6EFD" }}>CodeIN</strong></h1>
    <p>We will help you in every coding phases to <br /> design and build your skills. </p>
    <div className="mt-3">
    <button className="btn btn-primary btn-lg" style={{borderRadius: '10px'}}>
            <a href="/user" style={{color: 'white'}}>Get Started</a>
            </button>
    </div>
    </div>
        
        <hr />


        <Coding></Coding>
        <Contribution/>
        
        
    </div>
   
  );
};

export default Home;

