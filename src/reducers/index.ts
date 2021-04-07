import utilReducer from './utilReducer';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
util:utilReducer
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;