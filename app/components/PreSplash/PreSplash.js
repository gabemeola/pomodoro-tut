import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import logo from '!/images/logo.png';
import { colors } from '!/styles';

export default class PreSplash extends Component {
	static propTypes = {}
	state = {
		rotation: new Animated.Value(0)
	}
	componentDidMount() {
		this.interval = setInterval(() => {
			Animated.sequence([
				Animated.timing(this.state.rotation, {toValue: -1, duration: 150}),
				Animated.timing(this.state.rotation, {toValue: 1, duration: 150}),
				Animated.timing(this.state.rotation, {toValue: 0, duration: 250}),
			]).start()
		}, 1000)
	}
	componentWillUnmount() {
		window.clearInterval(this.interval)
	}
	getTransform() {
		return {
			transform: [
				{
					rotate: this.state.rotation.interpolate({
						// This is mapping -1 to -20deg and 1 to 20deg.
						// This is also smart enough to take care of any values in between
						inputRange: [-1, 1],
						outputRange: ['-20deg', '20deg']
					})
				}
			]
		}
	}
	render() {
		return(
			<View style={styles.container}>
				{/*Using Animated.Image instead of Image to grab the animation sequence we made earlier*/}
				<Animated.Image
					style={[styles.image, this.getTransform()]}
					source={logo}/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.white,
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: {
		resizeMode: 'contain',
		height: 250,
	}
});