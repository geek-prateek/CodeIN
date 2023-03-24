import React from "react";

const HackItems =(props)=> {

    let { title, description, imageUrl, hid, date, source } = props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute'
          }}>
            <span className="badge rounded-pill bg-danger">
              {source}
            </span>
          </div>
          <img src={!imageUrl ? "https://i-invdn-com.investing.com/news/LYNXMPED504AB_L.jpg": imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-success">
                On {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={hid}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Start Now
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default HackItems;
