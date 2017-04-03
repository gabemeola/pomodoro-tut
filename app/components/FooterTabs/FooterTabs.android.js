import React, { PropTypes } from 'react';
import { DrawerLayoutAndroid } from 'react-native';
import { HomeContainer, LeaderboardContainer } from '!/containers';
import Drawer from './Drawer';

export default function FooterTabs(props) {
	// This is BAD because closeDrawer function is being
	// re-instantiated ever time the components render function runs
	const closeDrawer = () => this.drawer.closeDrawer();
	// These two function should just be combined to "toggle drawer"
	// and track the state of the drawer in redux or Container Component
	const openDrawer = () => this.drawer.openDrawer();
	return(
		<DrawerLayoutAndroid
			ref={(drawer) => this.drawer = drawer}
			drawerWidth={290}
			renderNavigationView={() => (
				<Drawer
					close={closeDrawer}
					activeFooterTab={props.activeFooterTab}
					onTabSelect={props.onTabSelect}/>
			)}>
			{props.activeFooterTab === 'home'
				? <HomeContainer openDrawer={openDrawer} navigator={props.navigator}/>
				: <LeaderboardContainer openDrawer={openDrawer} navigator={props.navigator}/>}
		</DrawerLayoutAndroid>
	)
}

FooterTabs.propTypes = {
	activeFooterTab: PropTypes.string.isRequired,
	onTabSelect: PropTypes.func.isRequired,
	navigator: PropTypes.object.isRequired,
};