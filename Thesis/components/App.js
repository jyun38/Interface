import React, { Component } from 'react'
import '../main.css'
import Domain from './Domain.js'
import Category from './Category.js'
import IconButton from './IconButton.js'
import CatList from './CatList.js'
import AdlQ from './AdlQ.js'

class App extends Component {
	constructor(){
		super();
    this.state = {
    	brainActive: false, 
    	emotionActive: false, 
    	bodyActive: false, 
    	socialActive: false, 
    	actionsActive: false
    };
    this.brainClick = this.brainClick.bind(this);
    this.emotionClick = this.emotionClick.bind(this);
    this.bodyClick = this.bodyClick.bind(this);
    this.socialClick = this.socialClick.bind(this);
    this.actionsClick = this.actionsClick.bind(this);
	}

  brainClick() {
    this.updateBrain()
  }

  updateBrain(){
		this.setState({
			brainActive: true, 
			emotionActive: false, 
			bodyActive: false, 
			socialActive: false, 
			actionsActive: false
		})
	}

 	emotionClick() {
  	this.updateEmotion()
  }

  updateEmotion() {
  	this.setState({
			brainActive: false, 
			emotionActive: true, 
			bodyActive: false, 
			socialActive: false, 
			actionsActive: false
		})
  }

  bodyClick() {
  	this.updateBody()
  }

  updateBody() {
  	this.setState({
			brainActive: false, 
			emotionActive: false, 
			bodyActive: true, 
			socialActive: false, 
			actionsActive: false
		})
  }

  socialClick() {
  	this.updateSocial()
  }

  updateSocial() {
  	this.setState({
			brainActive: false, 
			emotionActive: false, 
			bodyActive: false, 
			socialActive: true, 
			actionsActive: false
		})
  }

  actionsClick() {
  	this.updateActions()
  }

  updateActions() {
  	this.setState({
			brainActive: false, 
			emotionActive: false, 
			bodyActive: false, 
			socialActive: false, 
			actionsActive: true
		})
  }

	render() {
		return (
			<div>
				<div className = "domainsCon">
					<IconButton name = {"Brain"} onButtonClick = {this.brainClick}/>
					<IconButton name = {"Emotion"} onButtonClick = {this.emotionClick}/>
					<IconButton name = {"Body"} onButtonClick = {this.bodyClick}/>
					<IconButton name = {"Social"} onButtonClick = {this.socialClick}/>
					<IconButton name = {"Actions"} onButtonClick = {this.actionsClick}/>
				</div> 

				<div>
					{this.state.brainActive && <CatList name = {"Brain"}/>}
					{this.state.emotionActive && <CatList name = {"Emotion"}/>}
					{this.state.bodyActive && <CatList name = {"Body"}/>}
					{this.state.socialActive && <CatList name = {"Social"}/>}
					{this.state.actionsActive && <CatList name = {"Actions"}/>}
				</div>
			</div>
		)
	}
}
export default App