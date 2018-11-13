import React, {Component} from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class CreditCard extends Component {
  constructor(props){
    super(props)
    this.state={
     name:'Sam'
    }
  }
  changeName=(event) =>{  
  { 
      this.setState({ 
      name: event.target.value
      .trimLeft()
      .replace(/\d/g, '')
      .toUpperCase()
      .slice(0,15)
        }
      )
    }
  }
  
  render(){ 
  return <div>
    <input 
    value={this.state.name}
    onChange={this.changeName}
    />
  <br/>
  {this.state.name}
  </div> 
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<CreditCard />, rootElement);
