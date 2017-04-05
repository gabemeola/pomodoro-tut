import React, { PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PomodoroNavbar, Close } from '!/components';
import { colors } from '!/styles';

export default function Settings(props) {
	return(
		<View style={styles.container}>
			<PomodoroNavbar
				title="Settings"
				leftButton={<Close onPress={props.onBack}/>}/>
			<Text>Settings Yo</Text>
		</View>
	)
}

Settings.propTypes = {
	onBack: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// You need to set the background color to white because by default it is transparent
		backgroundColor: colors.white,
	}
});