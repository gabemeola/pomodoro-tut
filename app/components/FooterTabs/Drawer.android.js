import React, { PropTypes } from 'react';
import { View, StyleSheet } from 'react-native';
import DrawerHeader from './DrawerHeader';
import DrawerTab from './DrawerTab';

export default function Drawer(props) {
	return(
		<View style={styles.container}>
			<DrawerHeader/>
			{/*This Code can be simplified and imperative with the only prop being title
				and performing calculation assumptions in DrawerTab Component

				Also, onPress should be built elsewhere for better
				re-usability and re-render that don't rebuild our function*/}
			<DrawerTab
				title="Home"
				selected={props.activeFooterTab === 'home'}
				onPress={() => {
					props.onTabSelect('home');
					props.close();
				}}
				iconName="ios-home-outline"/>
			<DrawerTab
				title="Leaderboard"
				selected={props.activeFooterTab === 'leaderboard'}
				onPress={() => {
					props.onTabSelect('leaderboard');
					props.close();
				}}
				iconName="ios-trophy-outline"/>
		</View>
	)
}

Drawer.propTypes = {
	activeFooterTab: PropTypes.string.isRequired,
	onTabSelect: PropTypes.func.isRequired,
	close: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});