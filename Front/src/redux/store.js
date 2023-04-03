import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducer';
import  ThunkMiddleware  from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //Conectar con la extension del navegador redux devtools

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(ThunkMiddleware)) // poder usar el middleware y hacer peticiones a un server externo 
);

export default store;