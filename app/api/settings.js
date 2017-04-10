import { ref } from '!/config/constants';

export function setTimer(duration, uid) {
	return ref.child(`settings/${uid}/timerDuration`)
		.set(duration)
}

export function setRest(duration, uid) {
	return ref.child(`settings/${uid}/restDuration`)
		.set(duration)
}

export function fetchSettings(uid) {
	return ref.child(`settings/${uid}`)
		.once('value')
		.then((snapshot) => {
			const timerDuration = 20;
			const restDuration = 5;
			const settings = snapshot.val();

			// If Settings is NULL then return some default values
			if(settings === null) {
				return {
					timerDuration,
					restDuration,
				}
			}

			return {
				timerDuration: !!settings.timerDuration ? settings.timerDuration : timerDuration,
				restDuration: !!settings.restDuration ? settings.restDuration : restDuration,
			}
		})
}