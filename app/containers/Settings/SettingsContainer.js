import React, { Component, PropTypes } from 'react';
import { Settings } from '!/components';

class SettingsContainer extends Component {
	static propTypes = {
		navigator: PropTypes.object.isRequired,
	}
	state = {
		timerDuration: 20,
		restDuration: 5,
	}
	handleTimerChange = (timerDuration) => {
		this.setState({timerDuration})
	}
	handleRestChange = (restDuration) => {
		this.setState({restDuration})
	}
	handleTimerComplete = () => {
		console.log('Done Sliding Timer')
	}
	handleRestComplete = () => {
		console.log('Done Sliding Rest')
	}
	handleLogout = () => {
		console.log('Logging Out!')
	}
	render() {
		return(
			<Settings
				onBack={this.props.navigator.pop}
				onLogout={this.handleLogout}
				onRestComplete={this.handleRestComplete}
				onTimerComplete={this.handleTimerComplete}
				onTimerChange={this.handleTimerChange}
				onRestChange={this.handleRestChange}
				timerDuration={this.state.timerDuration}
				restDuration={this.state.restDuration}/>
		)
	}
}

export default SettingsContainer;