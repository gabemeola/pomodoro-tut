import React, { Component, PropTypes } from 'react';
import { Settings } from '!/components';

class SettingsContainer extends Component {
	static propTypes = {
		navigator: PropTypes.object.isRequired,
	}
	render() {
		return(
			<Settings onBack={this.props.navigator.pop}/>
		)
	}
}

export default SettingsContainer;