const AUTHENTICATING = 'AUTHENTICATING';
const NOT_AUTHED = 'NOT_AUTHED';
const IS_AUTHED = 'IS_AUTHED';

const initialState = {
	isAuthed: false,
	isAuthenticating: false,
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