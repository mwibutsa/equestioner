import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
export const middleware = [thunk];

const initialState = {};

export const createStoreWithMiddleware = applyMiddleware(...middleware)(
  createStore
);
export const store = createStoreWithMiddleware(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
