import React from "react";

export default function Prep2(props) {
  return (
    <div className="my-3">
      <div
        className="card"
        style={{
          margin: "34px 0px",
          marginTop: "100px",
          color: props.mode === "dark" ? "black" : "black",
        }}
      >
        <div class="container text-center my-2">
          <ul class="list-group list-group-horizontal">
            <li class="list-group-item">
              <a href="/prep">
                <button type="button" class="btn btn-outline-primary">
                  All Contest
                </button>
              </a>
            </li>
            <li class="list-group-item">
              <button type="button" class="btn btn-success">
                CodeIN Contest
              </button>
            </li>
            <li class="list-group-item">
              <button type="button" class="btn btn-outline-danger">
                Special Contest
              </button>
            </li>
            <li class="list-group-item">
              <button type="button" class="btn btn-outline-warning">
                Hiring Contest
              </button>
            </li>
          </ul>
          <hr />
        </div>
        <div className="row my-4">
          <div className="col">
            <div className="card">
              <div className="background card-body">
                <span
                  className="badge rounded-pill bg-success"
                  style={{ float: "right" }}
                >
                  Live Now
                </span>
                <p className="card-text">
                  <small className="text-primary">CodeIN Contest</small>
                </p>
                <h5 className="card-title">
                  Scholarship Test 24th & 25th <br /> Feb 2023
                </h5>
                <p className="card-text">
                  START : <br /> 2022-11-21
                </p>
                <p className="card-text">
                  END : <br /> 2023-04-21
                </p>
                <a
                  rel="noreferrer"
                  href="/contestPages"
                  target="_blank"
                  className="btn btn-sm btn-danger"
                >
                  Register & View Details
                </a>
              </div>
            </div>
          </div>

          <div className="col">
          <div className="card">
            <div className="background card-body">
              <span
                className="badge rounded-pill bg-success"
                style={{ float: "right" }}
              >
                Live Now
              </span>
              <p className="card-text">
                <small className="text-primary">CodeIN Contest</small>
              </p>
              <h5 className="card-title">
              CodeIN Monthly Contest <br /> 11
              </h5>
              <p className="card-text">
                START : <br /> 2023-02-25
              </p>
              <p className="card-text">
                END : <br /> 2023-02-26
              </p>
              <a
                rel="noreferrer"
                href="/contestPages"
                target="_blank"
                className="btn btn-sm btn-danger"
              >
                Register & View Details
              </a>
            </div>
            </div>
          </div>

          <div className="col">
          <div className="card">
            <div className="background card-body">
              <span
                className="badge rounded-pill bg-success"
                style={{ float: "right" }}
              >
                Live Now
              </span>
              <p className="card-text">
                <small className="text-primary">CodeIN Contest</small>
              </p>
              <h5 className="card-title">
              CodeIN Weekend <br /> Contest 63
              </h5>
              <p className="card-text">
                START : <br /> 2023-03-03
              </p>
              <p className="card-text">
                END : <br /> 2023-03-04
              </p>
              <a
                rel="noreferrer"
                href="/contestPages"
                target="_blank"
                className="btn btn-sm btn-danger"
              >
                Register & View Details
              </a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
