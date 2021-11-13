import { combineReducers } from 'redux';
import { state } from './State/state.reducer';

export const rootReducer = combineReducers({
    state:state
});