import React, { PropTypes } from 'react';
import { Platform } from 'react-native';
import NavigationBar from 'react-native-navbar';
import { colors } from '!/styles';

export default function PomodoroNavbar(props) {
	// This will add the props onto optionalAttrs only if they exists
	let optionalAttr = {};
	props.leftButton && (optionalAttr.leftButton = React.cloneElement(props.leftButton, {
		// Passing some new props to the cloned element
		style: {marginLeft: 10, justifyContent: 'center'}
	}));
	props.rightButton && (optionalAttr.rightButton = React.cloneElement(props.rightButton, {
		// Passing some new props to the cloned element
		style: {marginRight: 10, justifyContent: 'center'}
	}));

	/* This will spread any of the optional Attributes we do have to
	   allow us to not have to pass "null" if the object doesn't exist */
	return(
		<NavigationBar
			{...optionalAttr}
			style={Platform.OS === 'android' ? {marginTop: 8, marginBottom: 8} : null}
			tintColor={colors.tabPrimary}
			title={{title: props.title}}/>
	)
}

PomodoroNavbar.propTypes = {
	title: PropTypes.string,
	rightButton: PropTypes.element,
	leftButton: PropTypes.element,
};