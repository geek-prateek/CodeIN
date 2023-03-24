import React from 'react'
import img from "./Images/gif.gif";
import events from "./Images/events.jpg";
import practice from "./Images/practice.png";
import debug from "./Images/debug.jpg";
import contest from "./Contests";

export default function Coding(props) {
  return (
    <section>
            <div className="res-container container" style={{ backgroundColor: props.mode === "dark" ? "#182334" : "white" }}>
                <h2 className='heading text-center'>Coding Contest</h2>
                <div className="row my-5" style={{ color: props.mode === "dark" ? "black" : "black" }}>
                    <div className="card1 col-12 col-lg-4 text-center mx-5">
                    <img src={practice} className="card1-img" alt=""/>
                    <a href="/contest">
                        <div class="card1-body" style={{color: "white", backgroundColor: "white"}}>
                            <i className="icon fa-solid fa-code"></i>
                            <h2 className="card1-title sub-heading">Practice</h2>
                            <p className='w-100 card1-text my-4'>Contest that tests your debugging skills and give several questions along with an explanation about what the code is expected to do.</p>
                            
                        </div>
                        </a>
                    </div>
                    <div className="card1 col-12 col-lg-4 text-center mx-5">
                    <img src={events} className="card1-img" alt=""/>
                    <a href="/prep">
                        <div class="card1-body" style={{color: "white", backgroundColor: "white"}}>
                            <i class="icon fa-solid fa-globe"></i>
                            <h2 className="card1-title">Events</h2>
                            <p className='w-100 card1-text my-4'>Contest that tests your debugging skills and give several questions along with an explanation about what the code is expected to do.</p>
                        </div>
                        </a>
                    </div>
                    <div className="card1 col-12 col-lg-4 text-center mx-4">
                    <img src={debug} className="card1-img" alt=""/>
                    <a href="/">
                        <div class="card1-body" style={{color: "white", backgroundColor: "white"}}>
                            <i class="icon fa-solid fa-hashtag"></i>
                            <h2 className="card1-title">Debugging</h2>
                            <p className='w-100 card1-text my-4'>Contest that tests your debugging skills and give several questions along with an explanation about what the code is expected to do.</p>
                        </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
  )
}
