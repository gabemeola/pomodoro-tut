import { setTimer, setRest } from '!/api/settings';

const ADD_SETTINGS_TIMER_DURATION = 'ADD_SETTINGS_TIMER_DURATION';
const ADD_SETTINGS_REST_DURATION = 'ADD_SETTINGS_REST_DURATION';

const initialState = {
	timerDuration: 20,
	restDuration: 5,
};

export function addSettingsTimerDuration(duration) {
	return {
		type: ADD_SETTINGS_TIMER_DURATION,
		duration,
	}
}

export function addSettingsRestDuration(duration) {
	return {
		type: ADD_SETTINGS_REST_DURATION,
		duration,
	}
}

export function handleAndUpdateTimer(duration) {
	return function(dispatch, getState) {
		const { authedId } = getState().authentication;

		return setTimer(duration, authedId)
			.then(() => dispatch(addSettingsTimerDuration(duration)))
	}
}

export function handleAndUpdateRest(duration) {
	return function(dispatch, getState) {
		const { authedId } = getState().authentication;

		return setRest(duration, authedId)
			.then(() => dispatch(addSettingsRestDuration(duration)))
	}
}

export default function settings(state = initialState, action) {
	switch (action.type) {
		case ADD_SETTINGS_TIMER_DURATION:
			return {
				...state,
				timerDuration: action.duration,
			};
		case ADD_SETTINGS_REST_DURATION:
			return {
				...state,
				restDuration: action.duration,
			};
		default:
			return state;
	}
}