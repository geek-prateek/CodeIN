import React from "react";
import img from "./Images/code.png";

const Contribution = (props) => {
  return (
    <div className="res-container" id="discuss" style={{ marginTop: "7%"}}>
      <section className="common code">
        <div className="container mb-5">
          <div className="row my-5">
            <div className="col-12 col-lg-5 text-center code-leftside">
              <img src={img} alt="CodeContribution" />
            </div>
            <div className="col-12 col-lg-7 codelist">
              <h1 className="heading">Code Contributions</h1>
              <div className="row info">
                <div className="col-1 number">#</div>
                <div className="col-10 data">
                  <h2>An anonymous user posted Lambda Function In C++</h2>
                  <p className="main">
                    Lambda Function in C++ Hello everyone, here is my first
                    article, which I hope you like and find useful.. And this is
                    about Lambda function in C++. I recently learn about...
                  </p>
                </div>
              </div>
              <div className="row info">
                <div className="col-1 number">#</div>
                <div className="col-10 data">
                  <h2>
                    An anonymous user posted Online Assessment Graph Question on
                    Deletion
                  </h2>
                  <p className="main">
                    Can anyone solve this graph question @leetcode_dafu ,
                    @aryonbe
                  </p>
                </div>
              </div>
              <div className="row info">
                <div className="col-1 number">#</div>
                <div className="col-10 data">
                  <h2>
                    The Number of Ways of Cutting a Pizza solution has been
                    published
                  </h2>
                  <p className="main">
                    Given a rectangular pizza represented as a rows x cols
                    matrix containing the following characters: 'A' (an apple)
                    and '.' (empty cell) and given the integer k.
                  </p>
                </div>
              </div>

              <a href="/discuss"><button className="btn btn-primary">Explore more</button></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contribution;
