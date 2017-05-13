# redux-chain
Redux-chain allows you to dispatch multiple actions calls using a single dispatch call.

```js
import { chain } from 'redux-chain'
dispatch(chain(
	signIn(),
	clickOnButton()
	signOut(),
));
```

# Installation
Download
```bash
npm install --save redux-chain
```

Build
```bash
npm run build
```

## Installation & Usage
Import & add the middleware to your Redux store
```js
import { createStore, applyMiddleware } from 'redux';
import { chainMiddleware } from 'redux-chain';
import rootReducer from './reducers/index';

const store = createStore(
  rootReducer,
  applyMiddleware(chainMiddleware)
);
```

To enable thunk actions (or other useful middleware), simply apply redux-chain before other middleware.

```js
import { createStore, applyMiddleware } from 'redux';
import { chainMiddleware } from 'redux-chain';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const middleware = [chainMiddleware, thunk]; // not: [thunk, chainMiddleware]

const store = createStore(
  rootReducer,
  applyMiddleware(middleware)
);
```

## Do more with less
I love to combine `redux-chain` with `novux` (github.com/neednova/novux), a tool that helps declare state changes simply, clearly and quickly.
```js
import { chain } from 'redux-chain'
import { update, reset } from 'novux'

const todos = [1, 2];

dispatch(chain(
	update('todos', 'Add a todo', {
		todos: todos.push(3);
	}),
	reset('todos', 'Reset todos', {
		reset: ['todos'],
	}),
));
```
