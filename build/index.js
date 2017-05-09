'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var CHAIN = 'CHAIN';

/**
* chainMiddleware
* Add this middleware to your redux store to use the chain action
*/
var chainMiddleware = exports.chainMiddleware = function chainMiddleware(_ref) {
	var dispatch = _ref.dispatch,
	    getState = _ref.getState;
	return function (next) {
		return function (action) {
			if (action.type === CHAIN) {
				if (!Array.isArray(action.actions)) {
					return next(action);
				}
				return action.actions.forEach(function (act) {
					return next(act);
				});
			}
			return next(action);
		};
	};
};

/**
* chain
* @param	{Objects}	args	the action creators to be chained
* @return {Object} 	an action creator object
*/
var chain = exports.chain = function chain() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	return {
		type: CHAIN,
		actions: args
	};
};

exports.default = { chainMiddleware: chainMiddleware, chain: chain };