import { useState } from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";

const Todos = () => {
  const [todos, setTodos] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );

  const addNewTodo = (totoValue) => {
    let newTodos = [...todos];
    const todo = {
      id: new Date().getTime(),
      value: totoValue,
      isDone: false,
    };
    newTodos.push(todo);
    updateState(newTodos);
  };

  const updateState = (newTodos) => {
    console.log(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  const deleteTodo = (todoId) => {
     console.log(todoId);
    let newTodos = [...todos];
    newTodos = newTodos.filter(todo => todo.id != todoId);
    updateState(newTodos);
  };

  const editTodo = (updatedTodo) => {
    let newTodos = [...todos];
    newTodos = newTodos.map(todo => {
        if(updatedTodo.id === todo.id)
        {
           todo.value = updatedTodo.value;
        }
        return todo;
    });

    updateState(newTodos);

  };

  const isDoneHandler = (todoId) => {
    let newTodos = [...todos];
    newTodos = newTodos.map(todo => {
        if(todoId === todo.id)
        {
           todo.isDone = ! todo.isDone;
        }
        return todo;
    });

    updateState(newTodos);
  };

  return (
    <div>
      <h3 style={{ color: "#ff8533", margin: "30px 0", textAlign: "center" }}>
        Todo App
      </h3>

      {todos.length == 0 ? (
        <h5>No task is there</h5>
      ) : (
        todos.map((item, index) => (
          <Todo
            key={item.key}
            index={index + 1}
            todo={item}
            onDelete={deleteTodo}
            onEdit={editTodo}
            doneHandler={isDoneHandler}
          />
        ))
      )}
      <AddTodo addTodo={addNewTodo} />
    </div>
  );
};

export default Todos;
