import React, { PropTypes } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '!/styles';

export default function Hamburger(props) {
	return(
		<TouchableOpacity
			onPress={props.onPress}
			style={props.style}>
			<Icon
				name="ios-menu-outline"
				size={props.size}
				color={colors.blue}/>
		</TouchableOpacity>
	)
}

Hamburger.propTypes = {
	size: PropTypes.number,
	style: PropTypes.object,
	onPress: PropTypes.func.isRequired,
};

Hamburger.defaultProps = {
	size: 30,
};