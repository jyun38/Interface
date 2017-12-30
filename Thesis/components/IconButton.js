import React, { Component } from 'react'
import '../main.css'
// import logo from '../brain.png'

class IconButton extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			 <div>
			 	<button className = "button" onClick={this.props.onButtonClick}>
			 	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				 	<img style = {{width:40, height: 40}} src={require(`../${this.props.name.toLowerCase()}.png`)}/>
				 	<font size="+2">
				 	{this.props.name}
				 	</font> 
			 	</button> 
			 </div>
			
			)
	}

}

export default IconButton