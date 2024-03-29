import React from "react";
import HelloReduxExampleComponent
  from "./hello-redux-example-component";
import hello from "./reducers/hello";
import todosReducer from "./reducers/todos-reducer";
import Todos from "./todos-component"
import {Provider} from "react-redux";
import {createStore, combineReducers} from "redux";
const reducers = combineReducers({hello, todosReducer});
const store = createStore(reducers);


const ReduxExamples = () => {
  return(
    <Provider store={store}>
      <div>
        <h2>Redux Examples</h2>
        <Todos/>
        <HelloReduxExampleComponent/>
      </div>
    </Provider>
  );
};
export default ReduxExamples;
