import { applyMiddleware, createStore,compose} from "redux";
import thunk from "redux-thunk";
import creducer from './reducer'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(creducer,composeEnhancers(
    applyMiddleware(thunk)
))
export default store;

