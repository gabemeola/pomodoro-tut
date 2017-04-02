import { firebaseAuth, facebookProvider, ref } from '!/config/constants';
import { AccessToken } from 'react-native-fbsdk';

export function getAccessToken() {
	return AccessToken.getCurrentAccessToken();
}

export function authWithToken(token) {
	return firebaseAuth.signInWithCredential(
		facebookProvider.credential(token)
	);
}

// Sets / Updates the users meta info in firebase
export function updateUser(user) {
	return ref.child(`users/${user.uid}`).set(user);
}