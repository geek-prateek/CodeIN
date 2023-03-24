import React from "react";
import Compiler from "./Compiler";

export default function Pages(props) {
  return (
    <div
      className="container"
      style={{
        margin: "34px 0px",
        marginTop: "100px",
        color: props.mode === "dark" ? "white" : "black",
        
      }}
    >
      <div class="card" style={{color: props.mode === "dark" ? "black" : "black"}}>
        <div class="card-header" style={{fontSize: '25px'}}>TEST - Life, the Universe, and Everything</div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>
              Your program is to use the brute-force approach in order to find
              the Answer to Life, the Universe, and Everything. More
              precisely... rewrite small numbers from input to output. Stop
              processing input after reading in the number 42. All numbers at
              input are integers of one or two digits.
            </p>
            <div class="card">
              <div class="card-header">Example</div>
              <div class="card-body">
                <blockquote class="blockquote mb-0">
                  <p>Input: <br /> 1 <br /> 2 <br /> 88 <br /> 42 <br /> 99 <br /><br /> Output: <br /> 1 <br /> 2 <br /> 88</p>
                  
                </blockquote>
                
              </div>
              
            </div>
            <Compiler></Compiler>
          </blockquote>
          
        </div>
        
      </div>
      
    </div>
  );
}
