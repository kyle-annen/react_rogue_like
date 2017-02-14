import React from 'react';
import ReactDOM from 'react-dom';

class RogueLike extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			editorColor: "black"

		}
		this.getButtonColor = this.getButtonColor.bind(this);

	}

	getButtonColor(e){
		const btnColor = e.target.className.split(' ')[1].split('-')[0];
		
		this.setState({
			editorColor: btnColor
		})
	}

	render() {
		return (
			<div className="container">
				<h1>{"Selected color: " + this.state.editorColor}</h1>
				<button 
					className="btn black-button"
					onClick={this.getButtonColor}>
					Walls	
				</button>
				<button 
					className="btn red-button"
					onClick={this.getButtonColor}>
					Enemy
				</button>
				<button 
					className="btn green-button"
					onClick={this.getButtonColor}>
					Health
				</button>
				<button
					className="btn gold-button"
					onClick={this.getButtonColor}>
					Weapon
				</button>
			</div>
		)
	}
}



class GameBoard extends React.Component {


	render() {
		return (
			<div></div>
		)
	}
}

ReactDOM.render( <RogueLike />, document.getElementById('app'));