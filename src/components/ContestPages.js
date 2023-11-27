import React from 'react';

export default function ContestPages(props) {
  return (
    <div className='container' style={{
        margin: "34px 0px",
        marginTop: "100px",
        color: props.mode === "dark" ? "black" : "black",
      }}>
        <div class="card text-white">
        <div  style={{height : '400px', backgroundColor: '#421D68', borderRadius: '20px'}}/>
        <div class="card-img-overlay">
        <span
                  className="badge rounded-pill bg-danger"
                  style={{ float: "left" }}
                >
                  Live Now
                </span>
                <h5 className="card-text">
                  <small className="text-white mx-4 text-lg">CODEIN CONTEST</small>
                </h5>
                <br />
            <h2 class="card-text" style={{fontWeight: 'bold'}}>Codathon 2023 by NIT Bhopal <br /> Day 1</h2>
            <br />
            <p className="card-text">
                START : <br /> 2023-03-03
              </p>
              <p className="card-text">
                END : <br /> 2023-03-04
              </p>

              <a
                rel="noreferrer"
                href="/user"
                target="_blank"
                className="btn btn-lg"
                style={{backgroundColor: 'orange'}}
              >
                Login to Register
              </a>
              <br />
              <p><small>*By registering for this contest, you agree to abide by the <a href="/"> Rules & Regulations.</a></small></p>
        </div>
        </div>
    </div>
  )
}
