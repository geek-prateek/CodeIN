import React from "react";

export default function Compiler(props) {
  return (
    <div
      className="container"
      style={{
        margin: "34px 0px",
        marginTop: "100px",
        color: props.mode === "dark" ? "white" : "purple",
      }}
    >
      <h1>Online Code Compiler</h1>
      <form id="myform" name="myform" method="post" action="compilecode">
        <div className="card text-center my-3">
          <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs">
              <li className="nav-item">
                <h1 className="nav-link active" aria-current="true">
                  Code Editor
                </h1>
              </li>
              <li className="list-group">
                <li className="list-group-item">
                  Language :
                  <select name="lang">
                    <option value="C">C</option>
                    <option value="C++">C++</option>
                    <option value="Java">Java</option>
                    <option value="Python">Python</option>
                  </select>
                </li>
              </li>

              <li className="list-group">
                <li className="list-group-item">
                  Compile With Input :
                  <input
                    type="radio"
                    name="inputRadio"
                    id="inputRadio"
                    value="true"
                  />
                  Yes
                  <input
                    type="radio"
                    name="inputRadio"
                    id="inputRadio"
                    value="false"
                  />
                  No
                </li>
              </li>
              <input
                type="submit"
                name="submit"
                value="Run"
                className="btn btn-success mx-2"
              />
            </ul>
          </div>
          <div className="row my-3">
            <div className="col">
              <h3>Code Editor</h3>
              <textarea name="code" id="code" cols="70" rows="10"></textarea>
            </div>

            <div className="col">
              <h3>Input</h3>
              <textarea name="input" id="input" cols="50" rows="10"></textarea>
            </div>
          </div>
        </div>

       
      </form>
    </div>
  );
}
