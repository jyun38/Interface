import React, { Component } from 'react'
import '../main.css'
import Question from './Question.js'


class AdlQ extends Component {

	constructor(props){
		super(props);
		console.log(this.props);
		// console.log(this.props.name);
	}

	render() {
		return(
			<div className = "questionsCon">
				<Question /> 
				<Question />
			</div>
		)
	}
}

export default AdlQ