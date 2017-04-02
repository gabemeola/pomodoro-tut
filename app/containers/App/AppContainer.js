import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { PomodoroNavigator } from '!/containers';
import { PreSplash } from '!/components';

class AppContainer extends Component {
	static propTypes = {
		isAuthenticating: PropTypes.bool.isRequired,
		isAuthed: PropTypes.bool.isRequired,
	}
	static defaultProps = {
		isAuthenticating: false,
	}
	render() {
		return(
			<View style={{flex: 1}}>
				{this.props.isAuthenticating === true
					? <PreSplash/>
					: <PomodoroNavigator
							isAuthed={this.props.isAuthed}/>}
			</View>
		)
	}
}

const mapStateToProps = ({authentication}) => ({
	isAuthenticating: authentication.isAuthenticating,
	isAuthed: authentication.isAuthed,
});

export default connect(
	mapStateToProps
)(AppContainer)