import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Settings } from '!/components';
import { handleUnauth } from '!/redux/modules/authentication';
import { showFlashNotification } from '!/redux/modules/flashNotification';

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
		this.props.dispatch(showFlashNotification({
			text: 'Timer Duration Updated!'
		}))
	}
	handleRestComplete = () => {
		this.props.dispatch(showFlashNotification({
			text: 'Rest Duration Updated!'
		}))
	}
	handleLogout = () => {
		this.props.dispatch(handleUnauth());
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

export default connect()(SettingsContainer);