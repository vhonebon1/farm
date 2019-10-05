import { combineReducers } from 'redux';
import cart from './cartReducer';

//space to combine additional reducers later
const rootReducer = combineReducers({ cart });

export default rootReducer;
