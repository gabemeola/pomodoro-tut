import React, { PropTypes } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { PomodoroNavbar, Close } from '!/components';
import { colors, fontSizes } from '!/styles';
import Slider from 'react-native-slider';

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
	onLogout: PropTypes.func.isRequired,
	onRestComplete: PropTypes.func.isRequired,
	onTimerComplete: PropTypes.func.isRequired,
	onRestChange: PropTypes.func.isRequired,
	onTimerChange: PropTypes.func.isRequired,
	timerDuration: PropTypes.number.isRequired,
	restDuration: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// You need to set the background color to white because by default it is transparent
		backgroundColor: colors.white,
	}
});