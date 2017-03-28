import React, { PropTypes } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { LoginButton } from 'react-native-fbsdk';
import { colors, fontSizes } from '!/styles';
import logo from '!/images/logo.png';

// Gets the Height of the Device Window
const height = Dimensions.get('window');

export default function Splash(props) {
	return (
		<View style={styles.container}>
			<View>
				<Image style={styles.img} source={logo}/>
				<Text style={styles.slogan}>React Pomodoro</Text>
			</View>
			<View style={styles.loginContainer}>
				<LoginButton
					style={{
						height: 30,
						width: 180,
						marginBottom: 15,
					}}
					onLoginFinished={props.onLoginFinished}/>
				<Text style={styles.assuranceText}>
					Don't worry. We don't post anything to Facebook.
				</Text>
			</View>
		</View>
	)
}

Splash.propTypes = {
	onLoginFinished: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.white,
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingTop: 50,
		paddingBottom: 40,
	},
	slogan: {
		color: colors.blue,
		fontSize: 40,
		margin: 2,
		textAlign: 'center',
	},
	image: {
		resizeMode: 'contain',
		// Set the Height to Either 300 or 40% of window height
		height: height * .4 > 300 ? 300 : height * .4,
	},
	loginContainer: {
		paddingLeft: 30,
		paddingRight: 30,
		alignItems: 'center',
	},
	assuranceText: {
		color: colors.secondary,
		fontSize: fontSizes.secondary,
		textAlign: 'center',
	},
});