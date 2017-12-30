import React, { Component } from 'react'
import '../main.css'
// import logo from '../brain.png'

class SingleCat extends Component {

  constructor(props) {
    super(props);
    console.log(this);
  }

  render() {
    return (
       <div>
        <button className = "catButton" onClick = {this.catClick}>
            {this.props.name}
        </button>
       </div>
      
      )
  }

}

export default SingleCat