import React, { Component } from 'react'
import loading from './spinner.gif'
export default class Spinner extends Component {
  render() {
    return (
       <>
       <div className='text-center my-6' >
       <img className='image-spinner' src={loading} alt=''/>
       </div>
       </>
    )
  }
}
