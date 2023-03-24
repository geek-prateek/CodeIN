import React from 'react';
import gif from './Images/gif.gif';

export default function Community(props) {
  return (
    <div className='container' style={{
      margin: "34px 0px",
      marginTop: "100px",
      color: props.mode === "dark" ? "black" : "black",
    }}>
      <div class="card text-bg-dark">
      <img src={gif} class="card-img" alt="..."/>
      <div class="card-img-overlay text-center text-lg">
          <h5 class="card-title" style={{color: 'red', fontSize: '40px',fontWeight: 'bold'}}>STAY TUNED !</h5>
          <p class="card-text" style={{color: 'purple' , fontSize: '60px', fontWeight: 'bold'}}>COMING SOON </p>
          <p class="card-text" style={{color: 'green' , fontSize: '30px',fontWeight: 'bold'}}><small>Thank you for your patience</small></p>
      </div>
      </div>
  </div>
   
  );
};

