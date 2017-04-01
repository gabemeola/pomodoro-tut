import React, { Component, PropTypes } from 'react';
import { Home } from '!/components';

class HomeContainer extends Component {
	static propTypes = {
		openDrawer: PropTypes.func,
		navigator: PropTypes.object.isRequired,
	}
	render() {
		return(
			<Home/>
		)
	}
}

export default HomeContainer;