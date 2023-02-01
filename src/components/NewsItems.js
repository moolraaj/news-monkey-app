import React, { Component } from 'react'

export class NewsItems extends Component {

  render(props) {
    return (
      <>
        <div className="card" >
        
      
          <img src={!this.props.imgUrl?'https://thefederal.com/file/2022/07/Thyroid-iStock.jpg':this.props.imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-dark">
        {this.props.source}
  </span>
          
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text">By {!this.props.author?'unknown':this.props.author} on {new Date(this.props.date).toGMTString()}</p>
            <p className="card-text">{this.props.description}</p>
            <a href={this.props.url} className="btn btn-dark btn-sm">Read More</a>
          </div>
        </div>
      </>
    )
  }
}

export default NewsItems