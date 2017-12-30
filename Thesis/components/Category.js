import React, { Component } from 'react'
import '../main.css'
import AdlQ from './AdlQ.js'
import Question from './Question.js'


class Category extends Component {

  constructor(props) {
    super(props);
    this.state = {
      adlActive : false
    };
    this.catClick = this.catClick.bind(this);
    this.updateAdl = this.updateAdl.bind(this);
  }

  catClick() {
    if(this.props.name == "Activities of Daily Living"){
      // console.log("yep")
      this.updateAdl()
    }
    console.log(this.props)
    console.log(this.name)
  }

  updateAdl() {
    this.setState({
      adlActive : true })
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

export default Category