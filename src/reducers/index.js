import { combineReducers } from 'redux';
import heroesReducer from './herosReducer';
import powersReducer from './powersReducer';
import counterReducer from './counterReducer';

const rootReducer = combineReducers({
  heroes: heroesReducer,
  powers: powersReducer,
  counter: counterReducer,
});

export default rootReducer;
