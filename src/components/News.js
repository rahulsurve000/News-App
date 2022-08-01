import React, { useEffect, useState } from 'react'
import Newitems from './Newitems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) =>  {

    const [articles, setArticals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalResults, setTotalresults] = useState(0)
    const [page, setPage] = useState(1)


    News.defaultProps = {
        country: "in",
        page: 6,
        category: "general"
    }

    News.propTypes = {
        country: PropTypes.string,
        page: PropTypes.number,
        category: PropTypes.string,
    }

    const updateNews = async() => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(40);
        let parsedData = await data.json();
        props.setProgress(70);
        // console.log(parsedData);
        setArticals(parsedData.articles);
        setTotalresults(parsedData.totalResult);
        setLoading(false);
        props.setProgress(100);
    }

    useEffect(() => {
        updateNews();
    }, [])


    const handlePrevClick = async () => {
        setPage(page-1)
        updateNews();
    }
    const handleNextClick = async () => {
        setPage(page+1)
        updateNews();
    }

    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`
        setPage(page+1)
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);
        setArticals(articles.concat(parsedData.articles));
        setTotalresults(parsedData.totalResult);
        setLoading(false);
      };




        return (
            <div className="container my-3">
                <h1 className="text-center my-25px" style={{marginTop: '90px'}}>Daily News - Top Headlines</h1>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}
                >

                 <div className="container">  
                <div className="row">
                    {articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <Newitems title={element.title} description={element.description} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} />
                        </div>
                    }

                    )}
                </div>
                </div> 
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                    <button disabled={state.page <= 1} type="button" className="btn btn-dark" onClick={handlePrevClick}> &larr; Previous</button>
                    <button disabled={state.page + 1 > Math.ceil(state.totalResult / props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next	&rarr;</button>
                </div> */}
            </div>
        )
}

export default News
