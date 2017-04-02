import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';
import NavigationBar from 'react-native-navbar';

export default function PomodoroNavbar(props) {
	return(
		<NavigationBar
			title={{title: props.title}}/>
	)
}

PomodoroNavbar.propTypes = {
	title: PropTypes.string,
};