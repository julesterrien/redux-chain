# redux-chain
Redux-chain allows you to make multiple action creators calls in a single dispatch call.
Note (May 9th): this is an experimental first version. I'll be completing & fully testing it in the next couple weeks.

# Installation
Download
```bash
npm install --save redux-chain
```

Build
```bash
npm run build
```

Test
```bash
npm run test
```

## Installation
1. Import & add the middleware to your Redux store
```js
import { createStore, applyMiddleware } from 'redux';
import { chainMiddleware } from 'redux-chain';
import rootReducer from './reducers/index';

const store = createStore(
  rootReducer,
  applyMiddleware(chainMiddleware)
);
```

2. Import `chain` and dispatch sets of synchronous actions
```js
import { chain } from 'redux-chain'
dispatch(chain(
	signIn(),
	clickOnButton()
	signOut(),
));

// dispatch is provided by Redux
```

## Note
At this point, redux-chain only supports synchronous actions and every action must be redux compliant (have at least a type key/val).

## Do more with less
You can do even more with less by combining `redux-chain` with `novux` (github.com/neednova/novux), a tool that lets you manage all your app's state with two simple actions and a single reducer generator.
