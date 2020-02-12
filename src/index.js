import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { courseReducer } from './redux/reducers/courseReducer';
import { userReducer } from './redux/reducers/userReducer';
import { reducer as formReducer } from 'redux-form';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    form: formReducer,
    courseReducer,
    userReducer
});

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
