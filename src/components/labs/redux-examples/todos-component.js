import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

const Todos = () => {
  //Reducer State Link
  const todos
    = useSelector(state => state.todosReducer);
  //Local object State Link
  const [todo, setTodo] = useState({ _id: '', do: '', done: false});

  //Dispatch Stuff
  const dispatch = useDispatch();

  //Updating our todo as usual with a dispatcher
  const updateTodoClickHandler = (todo) => {
    const action = {
      type: 'update-todo',
      todo
    };
    dispatch(action);
  }

  //Same thing as creating, except we send a specific todo object now, not just the current state one, and type delete for our action
  const deleteTodoClickHandler = (todo) => {
    const action = {
      type: 'delete-todo',
      todo
    };
    dispatch(action);
  }

  //Dispatcher to send an action carrying the todo object payload to the reducer by calling dispatch on click
  const createTodoClickHandler = () => {
    const action = {
      type: 'create-todo',
      todo
    };
    dispatch(action);
  }

  //Use state local state manipulation to a local variable
  const todoChangeHandler = (event) => {
    const doValue = event.target.value;
    const newTodo = {
      ...todo,
      do: doValue
    };
    setTodo(newTodo);
  }

  return(
    <>
      <h3>Todos</h3>
      <ul className="list-group">
        {/*List Item That is our input field*/}
        <li className="list-group-item">
          <input
            onChange={todoChangeHandler}
            value={todo.do}
            className="form-control"/>
          {/*This changing lets us know that our local todo object was infact then updated by setTodo*/}

          {/*List Item That is our button to trigger sending the local todo object via our dispatcher over to our reducer for up stream storage */}
          <button onClick={createTodoClickHandler}
                  className="btn btn-primary">
            Create New Todo
          </button>
        </li>

        {
          todos.map(todo => {
            return(
                      <li className="list-group-item" key={todo.do}>
                        {todo.do}

                        {/*Adding a checkbox to show task done status. Linking with event handler for checkbox activation to update object accordingly.*/}
                        <input checked={todo.done}
                               onChange={(event) =>
                                 updateTodoClickHandler(
                                   {...todo,
                                     done: event.target.checked})}
                               type="checkbox"/>

                        {/*Adding in a Delete button with linked event handler, making package with todo payload and sending it to recuder*/}
                        <button onClick={() =>
                          deleteTodoClickHandler(todo)}
                                className="btn btn-danger float-end">
                          Delete
                        </button>
                      </li>
            );}
          )
        }
      </ul>
    </>
  );
};
export default Todos;
