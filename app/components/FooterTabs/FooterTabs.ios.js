import React, { PropTypes } from 'react';
import { View, Text, StyleSheet, TabBarIOS } from 'react-native';

export default function FooterTabs(props) {
	return (
		<View>
			<Text>FooterTabs! - {props.activeFooterTab}</Text>
		</View>
	)
}

