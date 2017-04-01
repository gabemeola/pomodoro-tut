import React, { PropTypes } from 'react';
import { View } from 'react-native';
import DrawerHeader from './DrawerHeader';
import DrawerTab from './DrawerTab';

export default function Drawer(props) {
	return(
		<View>
			<DrawerHeader/>
			{/*This Code can be simplified and imperative with the only prop being title
				and performing calculation assumptions in DrawerTab Component*/}
			<DrawerTab
				title="Home"
				selected={props.activeFooterTab === 'home'}
				onPress={() => {
					props.onTabSelect('home')
				}}
				iconName="ios-home-outline"/>
			<DrawerTab
				title="Leaderboard"
				selected={props.activeFooterTab === 'leaderboard'}
				onPress={() => {
					props.onTabSelect('leaderboard')
				}}
				iconName="ios-trophy-outline"/>
		</View>
	)
}

Drawer.propTypes = {
	activeFooterTab: PropTypes.string.isRequired,
	onTabSelect: PropTypes.func.isRequired,
};