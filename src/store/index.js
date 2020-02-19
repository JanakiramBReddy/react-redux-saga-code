import { createStore,compose,applyMiddleware } from 'redux';
import { persistStore,persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducers from '../reducers';
import rootSagas from '../sagas';

import middleware,{sagaMiddleware} from './middleware';

const persistConfig = {
    key:'root',
    storage,
}

const persistantReducer = persistReducer(persistConfig,rootReducers);

const configStore = (initialState = {}) => {
    let store = createStore(
        persistantReducer,{},compose(applyMiddleware(...middleware))
    )
    sagaMiddleware.run(rootSagas)
    
    let persistor = persistStore(store)

    return {store,persistor}
}

const {store,persistor} = configStore();

global.store = store;

export {store,persistor};
 



