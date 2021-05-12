import { createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './root-reducer';
import rootSaga from './root-saga';

// it can get some options passed in
const sagaMiddleware = createSagaMiddleware();
//middleware that catches actions and logging in console
const middlewares = [sagaMiddleware];
// heroku automatycznie ustawia NODE_ENV na production
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
};
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga)

// creating persistet version of our store
export const persistor = persistStore(store);
 

