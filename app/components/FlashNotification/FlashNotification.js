import React, { PropTypes, Component } from 'react';
import { Animated, Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const NOTIFICATION_WIDTH = width * 0.7;

class FlashNotification extends Component {
	static propTypes = {
		length: PropTypes.number,
		permanent: PropTypes.bool,
		location: PropTypes.string,
		text: PropTypes.string.isRequired,
		onHideNotification: PropTypes.func.isRequired,
	}
	static defaultProps = {
		permanent: false,
		length: 1500,
		location: 'top',
	}
	state = {
		width: new Animated.Value(50),
		opacity: new Animated.Value(0.7),
		textOpacity: new Animated.Value(0),
	}
	componentDidMount() {
		// "Spring" the width of the notification to the specified value
		Animated.spring(this.state.width, {toValue: NOTIFICATION_WIDTH}).start();
		// Animate the textOpacity to "1" over a linear time of 1s
		Animated.timing(this.state.textOpacity, {toValue: 1, duration: 1000}).start();

		// If the Notification is not permanent then transition out
		if(this.props.permanent === false) {
			setTimeout(() => {
				// Animate opacity to "0" over linear time of 1s,
				// then run onHideNotification to remove from View / "Virtual DOM"
				Animated.timing(this.state.opacity, {toValue: 0, duration: 1000})
					.start(this.props.onHideNotification);
			}, this.props.length)
		}
	}
	getStyle = () => {
		// Adding some Animated Styles from the Component State
		return {
			width: this.state.width,
			opacity: this.state.opacity,
			top: this.props.location === 'top' ? 60 : undefined,
			bottom: this.props.location === 'top' ? undefined : 60,
		}
	}
	render() {
		return(
			// We need to use a Animated Component in order to animate our notification
			<Animated.View style={[styles.container, this.getStyle()]}>
				<Animated.Text style={[styles.text, {opacity: this.state.textOpacity}]}>
					{this.props.text}
				</Animated.Text>
			</Animated.View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#000',
		borderRadius: 5,
		height: 50,
		position: 'absolute',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
		// This will center our absolute positioned element
		// in the center of the View
		left: (width - NOTIFICATION_WIDTH) / 2,
	},
	text: {
		color: '#FFF',
	},
});

export default FlashNotification;