import React from "react";

export default function Prep(props) {
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
        <nav id="navbar-example2" class="navbar fixed-bottom bg-body-tertiary px-3 mb-6">
          <ul class="nav nav-pills">
            <li class="nav-item">
              <a class="nav-link" href="#scrollspyHeading1">
                Live Contest
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#scrollspyHeading2">
                Upcoming
              </a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link" href="#scrollspyHeading3">
                Previous
              </a>
            </li>
          </ul>
        </nav>
        <div
          data-bs-spy="scroll"
          data-bs-target="#navbar-example2"
          data-bs-root-margin="0px 0px -40%"
          data-bs-smooth-scroll="true"
          class="scrollspy-example bg-body-tertiary p-3 rounded-2"
          tabindex="0"
        >
          <div class="container text-center my-2" id="scrollspyHeading1">
            <ul class="list-group list-group-horizontal">
              <li class="list-group-item">
                <a href="/prep">
                  <button type="button" class="btn btn-primary">
                    All Contest
                  </button>
                </a>
              </li>
              <li class="list-group-item">
                <a href="/prep2">
                  <button type="button" class="btn btn-outline-success">
                    CodeIN Contest
                  </button>{" "}
                </a>
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
              <div className="background card-body">
                <span
                  className="badge rounded-pill bg-danger"
                  style={{ float: "right" }}
                >
                  Live Now
                </span>
                <p className="card-text">
                  <small className="text-primary">Special Contest</small>
                </p>
                <h5 className="card-title">
                  Codathon 2023 by NIT <br /> Bhopal Day 1
                </h5>
                <p>
                  <span class="badge rounded-pill text-bg-warning">
                    NIT BHOPAL
                  </span>
                </p>
                <p className="card-text">
                  END : <br /> 2023-04-21
                </p>
                <a
                  rel="noreferrer"
                  href="/contestpages"
                  target="_blank"
                  className="btn btn-sm btn-success"
                >
                  START NOW
                </a>
              </div>
            </div>

            <div className="col">
              <div className="background card-body">
                <span
                  className="badge rounded-pill bg-danger"
                  style={{ float: "right" }}
                >
                  Live Now
                </span>
                <p className="card-text">
                  <small className="text-primary">Special Contest</small>
                </p>
                <h5 className="card-title">
                  Codathon 2023 by NIT <br /> Rourkela Day 6
                </h5>
                <p>
                  <span class="badge rounded-pill text-bg-warning">
                    NIT ROURKELA
                  </span>
                </p>
                <p className="card-text">
                  END : <br /> 2023-04-21
                </p>
                <a
                  rel="noreferrer"
                  href="/contestPages"
                  target="_blank"
                  className="btn btn-sm btn-success"
                >
                  START NOW
                </a>
              </div>
            </div>

            <div className="col">
              <div className="background card-body">
                <span
                  className="badge rounded-pill bg-danger"
                  style={{ float: "right" }}
                >
                  Live Now
                </span>
                <p className="card-text">
                  <small className="text-primary">Special Contest</small>
                </p>
                <h5 className="card-title">
                  Codathon 2023 by NIT <br /> Rourkela Day 3
                </h5>
                <p>
                  <span class="badge rounded-pill text-bg-warning">
                    NIT ROURKELA
                  </span>
                </p>
                <p className="card-text">
                  END : <br /> 2023-04-21
                </p>
                <a
                  rel="noreferrer"
                  href="/contestPages"
                  target="_blank"
                  className="btn btn-sm btn-success"
                >
                  START NOW
                </a>
              </div>
            </div>

            <div className="row my-4">
              <div className="col">
                <div className="card">
                  <div className="background card-body">
                    <span
                      className="badge rounded-pill bg-danger"
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
                    <p>
                      <span class="badge rounded-pill text-bg-warning">
                        CODEIN
                      </span>
                    </p>
                    <p className="card-text">
                      END : <br /> 2023-04-21
                    </p>
                    <a
                      rel="noreferrer"
                      href="/contestPages"
                      target="_blank"
                      className="btn btn-sm btn-success"
                    >
                      START NOW
                    </a>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card">
                  <div className="background card-body">
                    <span
                      className="badge rounded-pill bg-danger"
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
                    <p>
                      <span class="badge rounded-pill text-bg-warning">
                        CODEIN
                      </span>
                    </p>
                    <p className="card-text">
                      END : <br /> 2023-02-26
                    </p>
                    <a
                      rel="noreferrer"
                      href="/contestPages"
                      target="_blank"
                      className="btn btn-sm btn-success"
                    >
                      START NOW
                    </a>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card">
                  <div className="background card-body">
                    <span
                      className="badge rounded-pill bg-danger"
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
                    <p>
                      <span class="badge rounded-pill text-bg-warning">
                        CODEIN
                      </span>
                    </p>
                    <p className="card-text">
                      END : <br /> 2023-03-04
                    </p>
                    <a
                      rel="noreferrer"
                      href="/contestPages"
                      target="_blank"
                      className="btn btn-sm btn-success"
                    >
                      START NOW
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <h4 id="scrollspyHeading2">
            <b> UPCOMING CHALLENGES</b>
          </h4>
          <hr />
          <div className="row my-4">
            <div className="col">
              <div className="background card-body">
                <span
                  className="badge rounded-pill bg-success"
                  style={{ float: "right" }}
                >
                  Live Now
                </span>
                <p className="card-text">
                  <small className="text-primary">Special Contest</small>
                </p>
                <h5 className="card-title">
                  Codathon 2023 by NIT <br /> Bhopal Day 1
                </h5>
                <p className="card-text">
                  START : <br /> 2022-11-21
                </p>
                <p className="card-text">
                  END : <br /> 2023-04-21
                </p>
                <a
                  rel="noreferrer"
                  href="/contestpages"
                  target="_blank"
                  className="btn btn-sm btn-danger"
                >
                  Register & View Details
                </a>
              </div>
            </div>

            <div className="col">
              <div className="background card-body">
                <span
                  className="badge rounded-pill bg-success"
                  style={{ float: "right" }}
                >
                  Live Now
                </span>
                <p className="card-text">
                  <small className="text-primary">Special Contest</small>
                </p>
                <h5 className="card-title">
                  Codathon 2023 by NIT <br /> Bhopal Day 5
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

            <div className="col">
              <div className="background card-body">
                <span
                  className="badge rounded-pill bg-success"
                  style={{ float: "right" }}
                >
                  Live Now
                </span>
                <p className="card-text">
                  <small className="text-primary">Special Contest</small>
                </p>
                <h5 className="card-title">
                  Codathon 2023 by NIT <br /> Bhopal Day 3
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

            <div className="row my-4">
              <div className="col">
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

              <div className="col">
                <div className="background card-body">
                  <span
                    className="badge rounded-pill bg-success"
                    style={{ float: "right" }}
                  >
                    Live Now
                  </span>
                  <p className="card-text">
                    <small className="text-primary">Special Contest</small>
                  </p>
                  <h5 className="card-title">
                    Codathon 2023 by NIT <br /> Rourkela Day 6
                  </h5>
                  <p className="card-text">
                    START : <br /> 2020-01-01
                  </p>
                  <p className="card-text">
                    END : <br /> 2025-01-01
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

              <div className="col">
                <div className="background card-body">
                  <span
                    className="badge rounded-pill bg-success"
                    style={{ float: "right" }}
                  >
                    Live Now
                  </span>
                  <p className="card-text">
                    <small className="text-primary">Special Contest</small>
                  </p>
                  <h5 className="card-title">
                    Codathon 2023 by NIT <br /> Rourkela Day 5
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
          </div>
          <hr />
          <h4 id="scrollspyHeading3">
            <b> PREVIOUS CHALLENGES</b>
          </h4>
          <hr />
          <div className="row">
            <div className="col">
            <a href="/contest" style={{color: "black"}}>
              <div class="card-header" style={{backgroundColor: "wheat"}}>Challenge Over</div>
              <div class="card-body" style={{backgroundColor: "white"}}>
                <h5 class="card-title">
                  <b>#JumpTheQ - Why wait for placements?</b>{" "}
                </h5>
                <p class="card-text">
                  <i>
                    Mar 04, 2023, 12:00 PM IST - Mar 04, 2023, 05:00 PM IST
                    <br />
                    Duration 2 hours 30 minutes
                  </i>
                </p>
              </div>
              </a>
            </div>
            <div className="col">
            <a href="/contest" style={{color: "black"}}>
              <div class="card-header" style={{backgroundColor: "wheat"}}>Challenge Over</div>
              <div class="card-body" style={{backgroundColor: "white"}}>
                <h5 class="card-title">
                  <b>Skill-A-Thon 1.0</b>{" "}
                </h5>
                <p class="card-text">
                  <i>
                    Feb 13, 2023, 12:00 PM IST - Feb 19, 2023, 06:00 PM IST
                    <br />
                    Online Submission
                  </i>
                </p>
              </div>
              </a>
            </div>
           
          </div>
          <div className="row">
            <div className="col">
            <a href="/contest" style={{color: "black"}}>
              <div class="card-header" style={{backgroundColor: "wheat"}}>Challenge Over</div>
              <div class="card-body" style={{backgroundColor: "white"}}>
                <h5 class="card-title">
                  <b>Intel® oneAPI Hackathon for Open Inn</b>{" "}
                </h5>
                <p class="card-text">
                  <i>
                    Nov 16, 2022, 05:00 PM IST - Jan 31, 2023, 11:59 PM IST
                    <br />
                    Online Submission
                  </i>
                </p>
              </div>
              </a>
            </div>
            <div className="col">
            <a href="/contest" style={{color: "black"}}>
              <div class="card-header" style={{backgroundColor: "wheat"}}>Challenge Over</div>
              <div class="card-body" style={{backgroundColor: "white"}}>
                <h5 class="card-title">
                  <b>IPETRONIK Software Developer Hiring Challenge</b>
                </h5>
                <p class="card-text">
                  <i>
                    Jan 27, 2023, 06:00 PM IST - Feb 06, 2023, 06:00 AM IST
                    <br />
                    Duration 3 hours
                  </i>
                </p>
              </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
