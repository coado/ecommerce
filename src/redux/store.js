import { createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';
//middleware that catches actions and logging in console
const middlewares = [];

// heroku automatycznie ustawia NODE_ENV na production
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
};

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// creating persistet version of our store
export const persistor = persistStore(store);
 

