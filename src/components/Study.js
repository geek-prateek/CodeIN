import React from "react";
import download from "./Images/download.png";
import advanced from "./Images/advanced.jpg";
import c from "./Images/cplus.jpg";
import dsacplus from "./Images/dsacplus.jpg";
import frontend from "./Images/frontend.png";
import backend from "./Images/backend1.png";

export default function Study(props) {
  return (
    <div
      className="container my-3"
      style={{ color: props.mode === "dark" ? "white" : "black" }}
    >
      <h2>Interview Preparation</h2>
      <div className="row my-3">
        <div className="col-4">
          <nav
            id="navbar-example3"
            className="h-100 flex-column align-items-stretch pe-4 border-end"
          >
            <nav className="nav nav-pills flex-column">
              <a className="nav-link" href="#item-1">
                Java
              </a>
              <nav className="nav nav-pills flex-column">
                <a className="nav-link ms-3 my-1" href="#item-1-1">
                  Core Concept
                </a>
                <a className="nav-link ms-3 my-1" href="#item-1-2">
                  Advance Java
                </a>
              </nav>
              <a className="nav-link" href="#item-2">
                C++
              </a>
              <a className="nav-link" href="#item-3">
                Web Development
              </a>
              <nav className="nav nav-pills flex-column">
                <a className="nav-link ms-3 my-1" href="#item-3-1">
                  FrontEnd Development
                </a>
                <a className="nav-link ms-3 my-1" href="#item-3-2">
                  BackEnd Development
                </a>
              </nav>
            </nav>
          </nav>
        </div>

        <div className="col-8">
          <div
            data-bs-spy="scroll"
            data-bs-target="#navbar-example3"
            data-bs-smooth-scroll="true"
            className="scrollspy-example-2"
            tabIndex="0"
          >
            <div id="item-1">
              <h4>Java</h4>
              <p>
                Java is a programming language and a platform. Java is a high
                level, robust, object-oriented and secure programming language.
                Java was developed by Sun Microsystems (which is now the
                subsidiary of Oracle) in the year 1995. James Gosling is known
                as the father of Java. Before Java, its name was Oak. Since Oak
                was already a registered company, so James Gosling and his team
                changed the name from Oak to Java.
              </p>
              <a
                href="https://www.javatpoint.com/"
                className="nav-link my-1"
                style={{ color: props.mode === "dark" ? "blue" : "blue" }}
              >
                For details :- javatpoint.com
              </a>
            </div>

            <div
              className="row my-5"
              style={{ color: props.mode === "dark" ? "black" : "black" }}
            >
              <div className="col-sm-6 mb-3 mb-sm-0">
                <div className="card" style={{ width: "18rem" }}>
                  <img src={download} className="card-img-top" alt="..." />
                  <div id="item-1-1" className="card-body">
                    <h5 className="card-title">Core Java</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Start Learning
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card" style={{ width: "18rem" }}>
                  <img src={advanced} className="card-img-top" alt="..." />
                  <div id="item-1-2" className="card-body">
                    <h5 className="card-title">Advance Java</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Start Learning
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div id="item-2">
              <h4>C++</h4>
              <p>
                C++ is a cross-platform language that can be used to create
                high-performance applications. C++ was developed by Bjarne
                Stroustrup, as an extension to the C language. C++ gives
                programmers a high level of control over system resources and
                memory. The language was updated 4 major times in 2011, 2014,
                2017, and 2020 to C++11, C++14, C++17, C++20.
              </p>
              <a
                href="https://www.w3schools.com/cpp/cpp_intro.asp#:~:text=C%2B%2B%20is%20a%20cross%2Dplatform,over%20system%20resources%20and%20memory."
                className="nav-link my-1"
                style={{ color: props.mode === "dark" ? "blue" : "blue" }}
              >For details :- w3schools.com</a>
            </div>
            <div
              className="row my-5"
              style={{ color: props.mode === "dark" ? "black" : "black" }}
            >
              <div className="col-sm-6 mb-3 mb-sm-0">
                <div className="card" style={{ width: "18rem" }}>
                  <img src={c} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">C++ Basics</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Start Learning
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card" style={{ width: "18rem" }}>
                  <img src={dsacplus} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Data Structures in C++ </h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Start Learning
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div id="item-3">
              <h4>Web Development</h4>
              <p>
                Web development is the work involved in developing a website for
                the Internet or an intranet. Web development can range from
                developing a simple single static page of plain text to complex
                web applications, electronic businesses, and social network
                services.
              </p>
              <a
                href="https://www.w3schools.com/whatis/"
                className="nav-link my-1"
                style={{ color: props.mode === "dark" ? "blue" : "blue" }}
              >For details :- w3schools.com</a>
            </div>

            <div
              className="row my-5"
              style={{ color: props.mode === "dark" ? "black" : "black" }}
            >
              <div className="col-sm-6 mb-3 mb-sm-0">
                <div className="card" style={{ width: "18rem" }}>
                  <img src={frontend} className="card-img-top" alt="..." />
                  <div id="item-3-1" className="card-body">
                    <h5 className="card-title">Frontend development</h5>
                    <p className="card-text">
                      A Front-End Developer is someone who creates websites and
                      web applications. The Front-End Developer creates things
                      that the user sees.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Start Learning
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card" style={{ width: "18rem" }}>
                  <img src={backend} className="card-img-top" alt="..." />
                  <div id="item-3-2" className="card-body">
                    <h5 className="card-title">Backend development</h5>
                    <p className="card-text">
                      Back-end development means working on server-side
                      software, which focuses on everything you can't see on a
                      website.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Start Learning
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
