import { compose, legacy_createStore as createStore, applyMiddleware } from "redux";

import { persistReducer, persistStore } from "redux-persist";

import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

import storage from "redux-persist/lib/storage";

import createSagaMiddleware from 'redux-saga'

import { rootSaga } from "./root-saga";

const persistConfig = {
    key: 'root',
    storage,
};

const sagaMiddleware = createSagaMiddleware();

const presistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [process.env.NODE_ENV !== 'production' && logger, sagaMiddleware ].filter(
    Boolean
);

const composedEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares));

export const store = createStore(presistedReducer, undefined, composedEnhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);