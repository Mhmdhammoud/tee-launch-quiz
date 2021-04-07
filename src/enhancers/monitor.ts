import {Dispatch} from 'react';
import {AppActions} from '../models';
import {AppState} from '../reducers';

const round = (number: number) => Math.round(number * 100) / 100;

const monitorReducerEnhancer = (createStore: any): any => (
	reducer: any,
	initialState: any,
	enhancer: any
): Dispatch<AppActions> => {
	const monitoredReducer = (state: AppState, action: AppActions): AppState => {
		const start = performance.now();
		const newState = reducer(state, action);
		const end = performance.now();
		const diff = round(end - start);
		console.log('reducer process time:', diff);
		return newState;
	};

	return createStore(monitoredReducer, initialState, enhancer);
};

export default monitorReducerEnhancer;