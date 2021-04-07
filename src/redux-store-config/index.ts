import { applyMiddleware, compose, createStore } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import monitorReducersEnhancer from '../enhancers/monitor';
import loggerMiddleware from '../middlewares/logger';
import { AppActions } from '../models';
import rootReducer, { AppState } from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const configStore = () => {
  const middlewares = [
    loggerMiddleware,
    thunk as ThunkMiddleware<AppState, AppActions>,
  ];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
  const composedEnhancers: any = compose(...enhancers);
  const store = createStore(
    rootReducer,
    composeWithDevTools(composedEnhancers)
  );
  if (process.env.NODE_ENV !== 'production' && (module as any).hot) {
    (module as any).hot.accept('../reducers', () =>
      store.replaceReducer(rootReducer)
    );
  }

  return store;
};
export default configStore;
