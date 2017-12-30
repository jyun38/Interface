import React, { Component } from 'react'
import '../main.css'

class Domain extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			 <div className="domain">
			  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			 	<img style = {{width:40, height: 40}} src={require(`../${this.props.name.toLowerCase()}.png`)}/>
			 	&nbsp;&nbsp;&nbsp;
			 	<font size="+2">
			 	{this.props.name}
			 	</font> 
			 </div>
			)
	}

}

export default Domain