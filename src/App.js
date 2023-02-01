/*import logo from './logo.svg';*/
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
 
 

   

 
 

 import React, { Component } from 'react'
 
 export class App extends Component {
state={
  progress:0
}
  setProgress=(progress)=>{
    this.setState({
progress:progress
    })
  }
  
    pageSize=12;
   country='us'
   render() {

     return (
      <>
      <BrowserRouter>
      <Navbar />
      <LoadingBar
      height={3}
        color='red'
        progress={this.state.progress}
        
      />
        <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress}  key='general' pageSize={this.pageSize} country={this.country} category='general' />} />
          <Route exact path="business" element={<News setProgress={this.setProgress}  key='business' pageSize={this.pageSize} country={this.country} category='business' />} />
          <Route exact path="entertainment" element={<News setProgress={this.setProgress}  key='entertainment' pageSize={this.pageSize} country={this.country} category='entertainment' />} />
          <Route exact path="health" element={<News setProgress={this.setProgress}  key='health' pageSize={this.pageSize} country={this.country} category='health' />} />
          <Route exact path="science" element={<News setProgress={this.setProgress}  key='science' pageSize={this.pageSize} country={this.country} category='science' />} />
          <Route exact path="sports" element={<News setProgress={this.setProgress}  key='sports' pageSize={this.pageSize} country={this.country} category='sports' />} />
          <Route exact path="technology" element={<News setProgress={this.setProgress}  key='technology' pageSize={this.pageSize} country={this.country} category='technology' />} />
        </Routes>

      </BrowserRouter>



    </>
        
     )
   }
 }
 
 export default App;

