import React, { PropTypes } from 'react';
import { Text, TabBarIOS } from 'react-native';
import { colors } from '!/styles';
import Icon from 'react-native-vector-icons/Ionicons';

export default function FooterTabs(props) {
	return (
		<TabBarIOS tintColor={colors.active}>
			<Icon.TabBarItem
				iconSize={35}
				iconName="ios-home-outline"
				title="Home"
				selected={props.activeFooterTab === 'home'}
				onPress={() => props.onTabSelect('home')}>
				<Text>The Home</Text>
			</Icon.TabBarItem>
			<Icon.TabBarItem
				iconSize={35}
				iconName="ios-trophy-outline"
				title="Leaderboard"
				selected={props.activeFooterTab === 'leaderboard'}
				onPress={() => props.onTabSelect('leaderboard')}>
				<Text>The Leaderboard Route!</Text>
			</Icon.TabBarItem>
		</TabBarIOS>
	)
}

FooterTabs.propTypes = {
	activeFooterTab: PropTypes.string.isRequired,
	onTabSelect: PropTypes.func.isRequired,
	navigator: PropTypes.object.isRequired,
};

