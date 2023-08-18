import React from "react";
import download from "./Images/download.png";
import advanced from "./Images/advanced.jpg";
import c from "./Images/cplus.jpg";
import dsacplus from "./Images/dsacplus.jpg";
import frontend from "./Images/frontend.png";
import backend from "./Images/backend2.png";
import front from "./Images/front.png";
import prev from "./Images/pre.png";
import next from "./Images/nxt.png";
import images from "./Images/images.png";
import java from "./Images/java.png";
import dsa from "./Images/dsa1.jpg";
import gif from "./Images/background.gif";
import video from "./Videos/video-2.mp4";

import "../index.css";

export default function Resources(props) {
  return (
    // <div
    //   className="resources"
    //   style={{ color: props.mode === "dark" ? "white" : "black", backgroundColor: '#182334', margin: "0px", padding: "0px"}}
    // >
    //   <div className="caraousel-container" style={{margin: "0px", padding: "0px"}}>

    //         <div className="caraousel">

    //         <a href="/study"><div class="slider">
    //                 <div class="slide-content">
    //                     <h1 class="movie-title">Data Structures and Algorithms</h1>
    //                     <p class="movie-des">Data Structures and Algorithms is one of the most important skills that every computer science student must-have. It is often seen that people with good knowledge of these technologies are better programmers than others and thus, crack the interviews of almost every tech giant.</p>
    //                 </div>
    //                 <img src={dsa} alt=""/>
    //             </div></a>
    //         </div>
    //     </div>
    //     <a href="/study"><div className="video-card1-container">
    //         <div className="video-card1">

    //             <img src={java} className="video-card1-image" alt=""/>
    //             <video src={gif} muted loop className="card1-video"></video>

    //         </div>
    //         <div className="video-card1">
    //             <img src={advanced} className="video-card1-image" alt=""/>
    //             <video src="Videos/video-2.mp4" muted loop className="card1-video"></video>
    //         </div>
    //         <div className="video-card1">
    //             <img src={images} className="video-card1-image" alt=""/>
    //             <video src="videos/marvel.mp4" muted loop className="card1-video"></video>
    //         </div>
    //         <div className="video-card1">
    //             <img src={front} className="video-card1-image" alt=""/>
    //             <video src="videos/star-war.mp4" muted loop className="card1-video"></video>
    //         </div>
    //         <div className="video-card1">
    //             <img src={backend} className="video-card1-image" alt=""/>
    //             <video src="videos/geographic.mp4" muted loop className="card1-video"></video>
    //         </div>
    //     </div>
    //     </a>

    //     <h1 className="title">Courses Recommended For You</h1>
    //     <a href="/study"><div className="movies-list">
    //         <button className="pre-btn" title="btn"><img src={prev} alt=""/></button>
    //         <button className="nxt-btn" title="btn"><img src={next} alt=""/></button>
    //         <div className="card1-container">
    //             <div className="card1">
    //                 <img src={download} className="card1-img" alt=""/>
    //                 <div className="card1-body">
    //                     <h2 className="name">Loki</h2>
    //                     <h6 className="des">The mercurial villain Loki...</h6>
    //                     <button className="watchlist-btn">add to watchlist</button>
    //                 </div>
    //             </div>
    //             <div className="card1">
    //                 <img src={advanced} className="card1-img" alt=""/>
    //                 <div className="card1-body">
    //                     <h2 className="name">Mulan</h2>
    //                     <h6 className="des">Masquerading as a male soldier...</h6>
    //                     <button className="watchlist-btn">add to watchlist</button>
    //                 </div>
    //             </div>
    //             <div className="card1">
    //                 <img src={c} className="card1-img" alt=""/>
    //                 <div className="card1-body">
    //                     <h2 className="name">Falcon and Winter Soldier</h2>
    //                     <h6 className="des">Falcon and the Winter Soldier are duo...</h6>
    //                     <button className="watchlist-btn">add to watchlist</button>
    //                 </div>
    //             </div>
    //             <div className="card1">
    //                 <img src={dsacplus} className="card1-img" alt=""/>
    //                 <div className="card1-body">
    //                     <h2 className="name">Avengers: Endgame</h2>
    //                     <h6 className="des">After the devastating events...</h6>
    //                     <button className="watchlist-btn">add to watchlist</button>
    //                 </div>
    //             </div>
    //             <div className="card1">
    //                 <img src={frontend} className="card1-img" alt=""/>
    //                 <div className="card1-body">
    //                     <h2 className="name">Thor: Ragnarok</h2>
    //                     <h6 className="des">Deprived of his mighty hammer Mjolnir...</h6>
    //                     <button className="watchlist-btn">add to watchlist</button>
    //                 </div>
    //             </div>
    //             <div className="card1">
    //                 <img src={backend} className="card1-img" alt=""/>
    //                 <div className="card1-body">
    //                     <h2 className="name">The Avengers</h2>
    //                     <h6 className="des">Nick Fury finds himself in need of a team...</h6>
    //                     <button className="watchlist-btn">add to watchlist</button>
    //                 </div>
    //             </div>
    //             <div className="card1">
    //                 <img src={front} className="card1-img" alt=""/>
    //                 <div className="card1-body">
    //                     <h2 className="name">Pirates of Caribbean</h2>
    //                     <h6 className="des">Captain Jack Sparrow senses the winds...</h6>
    //                     <button className="watchlist-btn">add to watchlist</button>
    //                 </div>
    //             </div>
    //             <div className="card1">
    //                 <img src={images} className="card1-img" alt=""/>
    //                 <div className="card1-body">
    //                     <h2 className="name">Soul</h2>
    //                     <h6 className="des">After a small misstep...</h6>
    //                     <button className="watchlist-btn">add to watchlist</button>
    //                 </div>
    //             </div>
    //             <div className="card1">
    //                 <img src={java} className="card1-img" alt=""/>
    //                 <div className="card1-body">
    //                     <h2 className="name">Raya and the Last Dragon</h2>
    //                     <h6 className="des">Raya, a fallen princess...</h6>
    //                     <button className="watchlist-btn">add to watchlist</button>
    //                 </div>
    //             </div>
    //             <div className="card1">
    //                 <img src={dsa} className="card1-img" alt=""/>
    //                 <div className="card1-body">
    //                     <h2 className="name">Luca</h2>
    //                     <h6 className="des">The movie is a coming-of-age...</h6>
    //                     <button className="watchlist-btn">add to watchlist</button>
    //                 </div>
    //             </div>
    //             <div className="card1">
    //                 <img src={download} className="card1-img" alt=""/>
    //                 <div className="card1-body">
    //                     <h2 className="name">Ford Vs Ferrari</h2>
    //                     <h6 className="des">Caroll Shelby and Ken Miles...</h6>
    //                     <button className="watchlist-btn">add to watchlist</button>
    //                 </div>
    //             </div>
    //             <div className="card1">
    //                 <img src={download} className="card1-img" alt=""/>
    //                 <div className="card1-body">
    //                     <h2 className="name">Dark Phoenix</h2>
    //                     <h6 className="des">After a rescue mission in space...</h6>
    //                     <button className="watchlist-btn">add to watchlist</button>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //     </a>
    //     <h1 className="title">Popular Courses</h1>
    //     <a href="/study"><div className="movies-list">
    //         <button className="pre-btn" title="btn"><img src={prev} alt=""/></button>
    //         <button className="nxt-btn" title="btn"><img src={next} alt=""/></button>
    //         <div className="card1-container">
    //             <div className="card1">
    //                 <img src={dsa} className="card1-img" alt=""/>
    //                 <div className="card1-body">
    //                     <h2 className="name">Dark Phoenix</h2>
    //                     <h6 className="des">After a rescue mission in space...</h6>
    //                     <button className="watchlist-btn">add to watchlist</button>
    //                 </div>
    //             </div>
    //             <div className="card1">
    //                 <img src={java} className="card1-img" alt=""/>
    //                 <div className="card1-body">
    //                     <h2 className="name">Ford Vs Ferrari</h2>
    //                     <h6 className="des">Caroll Shelby and Ken Miles...</h6>
    //                     <button className="watchlist-btn">add to watchlist</button>
    //                 </div>
    //             </div>
    //             <div className="card1">
    //                 <img src={images} className="card1-img" alt=""/>
    //                 <div className="card1-body">
    //                     <h2 className="name">Luca</h2>
    //                     <h6 className="des">The movie is a coming-of-age...</h6>
    //                     <button className="watchlist-btn">add to watchlist</button>
    //                 </div>
    //             </div>
    //             <div className="card1">
    //                 <img src={front} className="card1-img" alt=""/>
    //                 <div className="card1-body">
    //                     <h2 className="name">Raya and the Last Dragon</h2>
    //                     <h6 className="des">Raya, a fallen princess...</h6>
    //                     <button className="watchlist-btn">add to watchlist</button>
    //                 </div>
    //             </div>
    //             <div className="card1">
    //                 <img src={backend} className="card1-img" alt=""/>
    //                 <div className="card1-body">
    //                     <h2 className="name">Soul</h2>
    //                     <h6 className="des">After a small misstep, Joe is ...</h6>
    //                     <button className="watchlist-btn">add to watchlist</button>
    //                 </div>
    //             </div>
    //             <div className="card1">
    //                 <img src={frontend} className="card1-img" alt=""/>
    //                 <div className="card1-body">
    //                     <h2 className="name">Pirates of Caribbean</h2>
    //                     <h6 className="des">Captain Jack Sparrow senses the winds...</h6>
    //                     <button className="watchlist-btn">add to watchlist</button>
    //                 </div>
    //             </div>
    //             <div className="card1">
    //                 <img src={dsacplus} className="card1-img" alt=""/>
    //                 <div className="card1-body">
    //                     <h2 className="name">The Avengers</h2>
    //                     <h6 className="des">Nick Fury finds himself in need of a team...</h6>
    //                     <button className="watchlist-btn">add to watchlist</button>
    //                 </div>
    //             </div>
    //             <div className="card1">
    //                 <img src={c} className="card1-img" alt=""/>
    //                 <div className="card1-body">
    //                     <h2 className="name">Thor: Ragnarok</h2>
    //                     <h6 className="des">Deprived of his mighty hammer Mjolnir...</h6>
    //                     <button className="watchlist-btn">add to watchlist</button>
    //                 </div>
    //             </div>
    //             <div className="card1">
    //                 <img src={advanced} className="card1-img" alt=""/>
    //                 <div className="card1-body">
    //                     <h2 className="name">Avengers: Endgame</h2>
    //                     <h6 className="des">After the devastating events of...</h6>
    //                     <button className="watchlist-btn">add to watchlist</button>
    //                 </div>
    //             </div>
    //             <div className="card1">
    //                 <img src={download} className="card1-img" alt=""/>
    //                 <div className="card1-body">
    //                     <h2 className="name">Falcon and Winter Soldier</h2>
    //                     <h6 className="des">Falcon and the Winter Soldier are a...</h6>
    //                     <button className="watchlist-btn">add to watchlist</button>
    //                 </div>
    //             </div>
    //             <div className="card1">
    //                 <img src={advanced} className="card1-img" alt=""/>
    //                 <div className="card1-body">
    //                     <h2 className="name">Mulan</h2>
    //                     <h6 className="des">Masquerading as a male soldier to protect her father...</h6>
    //                     <button className="watchlist-btn">add to watchlist</button>
    //                 </div>
    //             </div>
    //             <div className="card1">
    //                 <img src={advanced} className="card1-img" alt=""/>
    //                 <div className="card1-body">
    //                     <h2 className="name">Loki</h2>
    //                     <h6 className="des">The mercurial villain Loki resumes his role...</h6>
    //                     <button className="watchlist-btn">add to watchlist</button>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //     </a>
    // </div>
    <div
      className="container"
      style={{
        margin: "34px 0px",
        marginTop: "80px",
        color: props.mode === "dark" ? "black" : "black",
      }}
    >
      <div class="card text-bg-dark">
        <div style={{ height: "500px", borderRadius: "20px" }} />
        <div class="card-img-overlay">
          <div class="slider">
            <div class="slide-content">
              <h1 class="movie-title">Data Structures and Algorithms</h1>
              <p class="movie-des">
                Data Structures and Algorithms is one of the most important
                skills that every computer science student must-have. It is
                often seen that people with good knowledge of these technologies
                are better programmers than others and thus, crack the
                interviews of almost every tech giant.
              </p>
            </div>
            <img src={dsa} alt="" />
          </div>
          <div className="row">
            <div
              className="col"
              style={{ paddingBottom: "100px", paddingLeft: "200px" }}
            >
              <a
                rel="noreferrer"
                href="/study"
                target="_blank"
                className="btn btn-lg"
                style={{ backgroundColor: "orange" }}
              >
                Roadmap
              </a>
            </div>
            <div
              className="col justify-content-md-end"
              style={{ paddingLeft: "200px" }}
            >
              <a
                rel="noreferrer"
                href="/study"
                target="_blank"
                className="btn btn-lg"
                style={{ backgroundColor: "orange" }}
              >
                Resources
              </a>
            </div>
          </div>
        </div>
      </div>
<br /><br />
<div class="card text-bg-dark" style={{paddingTop: "20px"}}>
      <div className="video-card1-container">
      
             <div className="video-card1">
            
                 <img src={java} className="video-card1-image" alt=""/>
                
                 <video width="250" height="250" controls >
                  <source src={video} type="video/mp4"/>
                </video>
                
             </div>
             <div className="video-card1">
                 <img src={advanced} className="video-card1-image" alt=""/>
                 <video src="Videos/video-2.mp4" muted loop className="card1-video"></video>
             </div>
             <div className="video-card1">
                 <img src={images} className="video-card1-image" alt=""/>
                 <video src="videos/marvel.mp4" muted loop className="card1-video"></video>
             </div>
             <div className="video-card1">
                 <img src={front} className="video-card1-image" alt=""/>
                 <video src="videos/star-war.mp4" muted loop className="card1-video"></video>
             </div>
             <div className="video-card1">
                 <img src={backend} className="video-card1-image" alt=""/>
                 <video src="videos/geographic.mp4" muted loop className="card1-video"></video>
             </div>
         </div>
         </div>
    </div>
  );
}
