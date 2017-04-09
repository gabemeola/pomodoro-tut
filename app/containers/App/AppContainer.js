import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { PomodoroNavigator } from '!/containers';
import { PreSplash, FlashNotification } from '!/components';
import { firebaseAuth } from '!/config/constants';
import { onAuthChange } from '!/redux/modules/authentication';
import { hideFlashNotification } from '!/redux/modules/flashNotification';

class AppContainer extends Component {
	static propTypes = {
		isAuthenticating: PropTypes.bool,
		isAuthed: PropTypes.bool,
		flashNotificationPermanent: PropTypes.bool,
		flashNotificationLocation: PropTypes.string,
		flashNotificationText: PropTypes.string,
		showFlashNotification: PropTypes.bool,
	}
	static defaultProps = {
		isAuthenticating: false,
	}
	componentDidMount() {
		// Listen for when Firebase Authentication Status Changes
		firebaseAuth.onAuthStateChanged((user) =>
			this.props.dispatch(onAuthChange(user))
		);
	}
	handleHideNotification = () => {
		this.props.dispatch(hideFlashNotification());
	}
	render() {
		return(
			<View style={{flex: 1}}>
				{this.props.isAuthenticating === true
					? <PreSplash/>
					: <PomodoroNavigator
							isAuthed={this.props.isAuthed}/>}
				{this.props.showFlashNotification === true
					? <FlashNotification
							text={this.props.flashNotificationText}
							permanent={this.props.flashNotificationPermanent}
							location={this.props.flashNotificationLocation}
							onHideNotification={this.handleHideNotification}/>
					: null}
			</View>
		)
	}
}

const mapStateToProps = ({authentication, flashNotification}) => ({
	isAuthenticating: authentication.isAuthenticating,
	isAuthed: authentication.isAuthed,
	flashNotificationPermanent: flashNotification.permanent,
	flashNotificationLocation: flashNotification.location,
	flashNotificationText: flashNotification.text,
	showFlashNotification: flashNotification.showFlashNotification,
});

export default connect(
	mapStateToProps
)(AppContainer)