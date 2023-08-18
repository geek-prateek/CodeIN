import React, {useEffect, useState} from "react";
import HackItems from "./HackItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const Hackathons =(props)=> {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  
  

  const capital = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const update = async ()=> {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=f8abaddf6912444c93f89df0804818f3&page=1&pageSize=${props.pageSize}`;
    
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    
  }

  useEffect(() => {
    document.title = `CodeIN - ${capital(props.category)}`;
    update();
  }, [])

  // handlePrevClick = async() => {
  //   setPage(page-1)
  //   this.update();
  // }

  // handleNextClick = async() => {
  //   setPage(page+1)
  //   this.update();
  // }

  const fetchMoreData = async () => {
    
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}
    &apiKey=b30fab9fa58541b591608873b8d6cd84&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    let data = await fetch(url);  
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
   
  };

    return (
      <>
        <h1 className="text-center" style={{ margin: "34px 0px", marginTop: '90px', color: props.mode === "dark" ? "white" : "black"}}>
         TECHNICAL NEWS
        </h1>
        
        {/* <ul className="list-group list-group-horizontal">
            <li className="list-group-item list-group-item-primary"><a className="link" href="#">Ongoing</a></li>
            <li className="list-group-item list-group-item-primary"><a className="link" href="#">Upcoming</a></li>
            <li className="list-group-item list-group-item-primary"><a className="link" href="#">Previous</a></li>
          </ul> */}

        {loading && <Spinner/>}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >

          <div className="container">
            <div className="row my-4">
              {articles.map((element) => {
                return <div className="col md-4" key={element.url}>
                    <HackItems title={element.title ? element.title.slice(0, 45) : ""}
                      description={element.description ? element.description.slice(0, 88) : ""}
                      imageUrl={element.urlToImage}
                      hid={element.url}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
              })}
            </div>
            {/* <div className="container d-flex justify-content-between">
              <button disabled={this.state.page<=1} type="button" className="btn btn-danger" onClick={this.handlePrevClick}>&larr; Previous</button>
              <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/props.pageSize)} type="button" className="btn btn-danger" onClick={this.handleNextClick}>Next &rarr;</button>
            </div> */}
          </div>
        </InfiniteScroll>
      </>
    );
  
}

Hackathons.defaultProps = {
  pageSize: 20,
  category: "general",
};
Hackathons.propTypes = {
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default Hackathons;
