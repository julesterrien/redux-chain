const CHAIN = 'CHAIN';

/**
* chainMiddleware
* Intercepts the action creator of type 'CHAIN'
* Dispatch each action creator passed as arguments to chain()
*/
export const chainMiddleware = () => next => (action) => {
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
	actions: args,
});

export default { chainMiddleware, chain };
