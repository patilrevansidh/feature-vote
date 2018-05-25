import { createStore, applyMiddleware, combineReducers  } from 'redux';
import thunk from 'redux-thunk';
import featuresReducer from '../modules/reducers/features';

 
// Note: this API requires redux@>=3.1.0

const rootReducer = combineReducers({
    featuresReducer,
})

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;