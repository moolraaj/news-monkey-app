import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";



export class News extends Component {
     
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading:true,
            page: 1,
            totalResults: 0
        }
      
    }

    

    async updateNews(props) {
        this.props.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dcff102a1ab34e25a22fa2033aa394bb&page=1&pageSize=${this.props.pageSize}`
         
        let data = await fetch(url)
        this.props.setProgress(40)
        let parseData = await data.json()
        this.props.setProgress(70)
        console.log(parseData)
        this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            
        })
        this.props.setProgress(100)
        document.title=`${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
    }

    async componentDidMount() {
        this.updateNews()
    }

    previousClick = async () => {
        this.setState({
            page: this.state.page - 1,
        })
        this.updateNews()

    }

    nextClick = async () => {
        this.setState({
            page: this.state.page + 1,
        })
        this.updateNews()
    }

    fetchMoreData=async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dcff102a1ab34e25a22fa2033aa394bb&page=1&pageSize=${this.props.pageSize}`
         this.setState({ page:this.state.page+1})
        let data = await fetch(url)
        let parseData = await data.json()
        console.log(parseData)
        this.setState({
            articles: this.state.articles.concat(parseData.articles),
            totalResults: parseData.totalResults
           
        })

    }
 
    render() {

        return (
            <>
                


                   
                        {/*{this.state.loading && <Spinner />}*/}
                        <InfiniteScroll
                            dataLength={this.state.articles.length}
                            next={this.fetchMoreData}
                            hasMore={this.state.articles.lenght !== this.state.totalResults}
                            loader={<Spinner/>}
                        >
                            <div className='container' style={{marginTop:'80px'}}>
                                <h1 className='text-center' style={{fontSize:"30px"}}>Top Headline from {this.capitalizeFirstLetter(this.props.category)}</h1>
                            <div className="row">
                                { this.state.articles.map((element) => {
                                    return <div className='col-md-4 my-3' key={element.url}>
                                        <NewsItems title={element.title ? element.title.slice(0, 40) : ''} description={element.description ? element.description.slice(0, 50) : ''} imgUrl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                    </div>
                                })}
                            </div>
                            </div>
                        </InfiniteScroll>
                     

                   {/* <div className='container d-flex justify-content-between'>
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.previousClick}>Previous</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.nextClick}>Next</button>
                            </div>*/}
                 

            </>
        )
    }
}

export default News;