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
			<View style={styles.sliderContainer}>
				<Text style={styles.titleText}>Timer Duration</Text>
				<Text style={styles.valueText}>{props.timerDuration}</Text>
				<Text style={styles.minutes}>{props.timerDuration === 1 ? 'Minute' : 'Minutes'}</Text>
				<Slider
					minimumValue={1}
					maximumValue={60}
					step={1}
					thumbTintColor={colors.border}
					minimumTrackTintColor={colors.blue}
					value={props.timerDuration}
					onValueChange={props.onTimerChange}
					onSlidingComplete={props.onTimerComplete}/>
			</View>
			<View style={styles.sliderContainer}>
				<Text style={styles.titleText}>Rest Duration</Text>
				<Text style={styles.valueText}>{props.restDuration}</Text>
				<Text style={styles.minutes}>{props.restDuration === 1 ? 'Minute' : 'Minutes'}</Text>
				<Slider
					minimumValue={1}
					maximumValue={60}
					step={1}
					thumbTintColor={colors.border}
					minimumTrackTintColor={colors.blue}
					value={props.restDuration}
					onValueChange={props.onRestChange}
					onSlidingComplete={props.onRestComplete}/>
			</View>
			<TouchableOpacity onPress={props.onLogout} style={styles.logout}>
				<Text style={styles.logoutText}>Logout</Text>
			</TouchableOpacity>
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
	},
	sliderContainer: {
		flex: 1,
		marginLeft: 20,
		marginRight: 20,
		alignItems: 'stretch',
		justifyContent: 'center',
	},
	titleText: {
		fontSize: 20,
		color: colors.primary,
		textAlign: 'center',
	},
	valueText: {
		fontSize: 50,
		color: colors.blue,
		padding: 15,
		textAlign: 'center',
	},
	minutes: {
		color: colors.secondary,
		textAlign: 'center',
	},
	logout: {
		backgroundColor: colors.blue,
		alignItems: 'stretch',
		borderRadius: 25,
		margin: 20,
		padding: 10,
	},
	logoutText: {
		color: colors.white,
		fontSize: fontSizes.secondary,
		textAlign: 'center',
	},
});