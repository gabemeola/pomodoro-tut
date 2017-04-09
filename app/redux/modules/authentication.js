import { getAccessToken, authWithToken, updateUser, logout } from '!/api/auth';

const AUTHENTICATING = 'AUTHENTICATING';
const NOT_AUTHED = 'NOT_AUTHED';
const IS_AUTHED = 'IS_AUTHED';
export const LOGGING_OUT = 'LOGGING_OUT';

const initialState = {
	isAuthed: false,
	isAuthenticating: true,
	authedId: ''
};

function authenticating() {
	return {
		type: AUTHENTICATING,
	}
}

function notAuthed() {
	return {
		type: NOT_AUTHED,
	}
}

function isAuthed(uid) {
	return {
		type: IS_AUTHED,
		uid,
	}
}

function loggingOut() {
	return {
		type: LOGGING_OUT
	}
}

// Redux Thunks
export function handleAuthWithFirebase() {
	return function (dispatch, getState) {
		dispatch(authenticating());
		return getAccessToken()
			.then(({accessToken}) => authWithToken(accessToken))
			.catch((err) => console.warn('handleAuthWithFirebase Error:', err))
	}
}

export function onAuthChange(user) {
	return function (dispatch, getState) {
		if(!user) {
			// If user in undefined then dispatch notAuthed
			dispatch(notAuthed())
		} else {
			// Else dispatch the users authed uid
			const { uid, displayName, photoURL } = user;
			// Update the User in Firebase
			updateUser({
				uid,
				displayName,
				photoURL,
			}).then(() =>
				// Set the Auth properties on the redux store
				dispatch(isAuthed(uid))
			);
		}
	}
}

export function handleUnauth() {
	return function(dispatch) {
		// Resets App State to reflect Logout
		dispatch(loggingOut());
		// Calls IO Logout
		logout();
	}
}

export default function authentication(state = initialState, action) {
	switch (action.type) {
		case AUTHENTICATING:
			return {
				...state,
				isAuthenticating: true,
			};
		case NOT_AUTHED:
			return {
				...state,
				isAuthed: false,
				isAuthenticating: false,
				authedId: '',
			};
		case IS_AUTHED:
			return {
				...state,
				isAuthed: true,
				isAuthenticating: false,
				authedId: action.uid,
			};
		default:
			return state;
	}
}