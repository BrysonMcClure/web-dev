const data = [
  {
    _id: "123",
    do: "Accelerate the world's transition to sustainable energy",
    done: false
  },
  {
    _id: "234",
    do: "Reduce space transportation costs to become a spacefaring civilization",
    done: false
  },
];

/*const todosReducer = () => {
  return data;
}*/

const todosReducer = (state = data, action) => {
  switch (action.type) {
    //Updating the todo
    case 'update-todo':
      const newTodos = state.map(todo => {
        const newTodo = todo._id === action.todo._id ? action.todo : todo;
        return newTodo;
      });
      return newTodos;

      //Deleting the todo
    case 'delete-todo':
      return state
        .filter(todo =>
                  todo !== action.todo);

      //Creating new todo
    case 'create-todo':
      const newTodo = {
        ...action.todo,
        _id: (new Date()).getTime() + ""
      };
      return [
        ...state,
        newTodo
      ]
    default:
      return state;
  }
}


export default todosReducer;
