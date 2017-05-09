const CHAIN = 'CHAIN';

/**
* chainMiddleware
* Add this middleware to your redux store to use the chain action
*/
export const chainMiddleware = ({ dispatch, getState }) => next => action => {
	if (action.type === CHAIN) {
		if (!Array.isArray(action.actions)) {
			return next(action);
		}
		return action.actions.forEach(act => next(act));
	}
	return next(action);
};

/**
* chain
* @param	{Objects}	args	the action creators to be chained
* @return {Object} 	an action creator object
*/
export const chain = (...args) => ({
	type: CHAIN,
	actions: args
});

export default { chainMiddleware, chain };