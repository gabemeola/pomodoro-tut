import React, { PropTypes } from 'react';
import { View, Text, DrawerLayoutAndroid } from 'react-native';
import { HomeContainer, LeaderboardContainer } from '!/containers';
import Drawer from './Drawer';

export default function FooterTabs(props) {
	return(
		<DrawerLayoutAndroid
			drawerWidth={290}
			renderNavigationView={() => (
				<Drawer
					activeFooterTab={props.activeFooterTab}
					onTabSelect={props.onTabSelect}/>
			)}>
			{props.activeFooterTab === 'home'
				? <HomeContainer navigator={props.navigator}/>
				: <LeaderboardContainer navigator={props.navigator}/>}
		</DrawerLayoutAndroid>
	)
}

FooterTabs.propTypes = {
	activeFooterTab: PropTypes.string.isRequired,
	onTabSelect: PropTypes.func.isRequired,
	navigator: PropTypes.object.isRequired,
};