import React, { Component, PropTypes } from 'react';
import { Splash } from '!/components';

export default class SplashContainer extends Component {
	handleLoginFinished = (error, result) => {
		if(error) {
			console.warn("Error in handleLoginFinished: ", error)
		} else if(result.isCancelled === true) {
			// If the User Cancelled the Authentication Process
			console.warn('Authentication Cancelled')
		} else {
			console.log('Authentication Successful')
		}
	}
	render() {
		return(
			<Splash
				onLoginFinished={this.handleLoginFinished}/>
		)
	}
}