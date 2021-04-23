import React from 'react';

import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import {store, persistor} from './redux/store';

// persistor for localStorage

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>

            <PersistGate persistor={persistor}>
                <App />
            </PersistGate> 
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
    );

