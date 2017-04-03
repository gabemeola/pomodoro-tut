import React, { PropTypes } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { PomodoroNavbar, Gear, Hamburger } from '!/components';

export default function Home(props) {
	return(
		<View>
			<PomodoroNavbar
				title="Home"
				leftButton={Platform.OS === 'android' ? <Hamburger onPress={props.openDrawer}/> : null}
				rightButton={<Gear onPress={() => console.log('gear pressed')}/>}/>
			<Text>Home</Text>
		</View>
	)
}

Home.propTypes = {
	openDrawer: PropTypes.func,
};