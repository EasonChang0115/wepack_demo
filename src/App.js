import React, { Component } from 'react';

//引入圖片
import myImg from './image/myImg.jpg';
// 引入css
import './scss/style.scss';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: 'Hello world'
    }
  }
  render() {
    return (
      <div>
        <img src={ myImg } width="100%"/>
        <h1>{ this.state.value }</h1>
      </div>  
    )
  }
}

export default App