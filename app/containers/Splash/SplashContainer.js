import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Splash } from '!/components';
import { handleAuthWithFirebase } from '!/redux/modules/authentication';

class SplashContainer extends Component {
	handleLoginFinished = (error, result) => {
		const { dispatch } = this.props;

		if(error) {
			console.warn("Error in handleLoginFinished: ", error)
		} else if(result.isCancelled === true) {
			// If the User Cancelled the Authentication Process
			console.warn('Authentication Cancelled')
		} else {
			// Run the handleAuthWithFirebase Thunk
			dispatch(handleAuthWithFirebase());
		}
	}
	render() {
		return(
			<Splash
				onLoginFinished={this.handleLoginFinished}/>
		)
	}
}

export default connect(

)(SplashContainer)