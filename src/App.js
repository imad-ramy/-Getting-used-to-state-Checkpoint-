import React from 'react';
import './App.css';
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
class App extends React.Component {
 state ={
   name:"vieux",
   img:img1,
   desc:"vieuxDesc"   
  }
  render(){

    return (
    <div className="App">
    <button
      onClick={() => {this.setState({img:img2,desc:"un vieux qui vas clamse dans peut",name:"7aj"})}}>
        7aj
</button>

    <button
          onClick={() => {this.setState({img:img1,desc:"bayodi chaye5, quoi de plus nomarle",name:"bayodi"})}}>
        bayodi
        </button>
    <button
      onClick={() => {this.setState({img:img3,desc:"a7la prof o a7ala zin XDXDXD",name:"banota"})}}>
        banota 
        </button>
    <div>
      <h2>{this.state.name}</h2>
      <img src={this.state.img}/>
      <p>{this.state.desc}</p>
    </div>
    </div>
   );
  }  
}

export default App;
