import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './rootReducer';

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk),
    // other store enhancers if any
  ),
);
const persistor = persistStore(store);
export { store, persistor };
