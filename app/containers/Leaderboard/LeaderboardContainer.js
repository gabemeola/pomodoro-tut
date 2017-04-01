import React, { Component, PropTypes } from 'react';
import { Leaderboard } from '!/components';

class LeaderboardContainer extends Component {
	static propTypes = {
		openDrawer: PropTypes.func,
		navigator: PropTypes.object.isRequired,
	}
	render() {
		return(
			<Leaderboard/>
		)
	}
}

export default LeaderboardContainer;