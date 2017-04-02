import React, { PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PomodoroNavbar, Gear } from '!/components';

export default function Home(props) {
	return(
		<View>
			<PomodoroNavbar
				title="Home"
				rightButton={<Gear onPress={() => console.log('gear pressed')}/>}/>
			<Text>Home</Text>
		</View>
	)
}