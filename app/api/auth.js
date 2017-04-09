import { firebaseAuth, facebookProvider, ref } from '!/config/constants';
import { AccessToken, LoginManager } from 'react-native-fbsdk';

export function getAccessToken() {
	return AccessToken.getCurrentAccessToken();
}

export function authWithToken(token) {
	return firebaseAuth.signInWithCredential(
		facebookProvider.credential(token)
	);
}

/**
 * Sets / Updates the users meta info in firebase.
 * @param user {string}
 * @return {Promise}
 */
export function updateUser(user) {
	return ref.child(`users/${user.uid}`).set(user);
}

export function logout() {
	// Signs out Locally through facebook SDK
	LoginManager.logOut();
	// Signs out with Firebase
	firebaseAuth.signOut();
	// Removes Any Current Database Listeners
	ref.off();
}