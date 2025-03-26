import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo } from "../store/actions";

const Todo = () => {
  const dispatch = useDispatch();
  const { todo, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  return (
    <div>
      <h2>Todo Item</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {todo && (
        <div>
          <p><strong>ID:</strong> {todo.id}</p>
          <p><strong>Title:</strong> {todo.title}</p>
          <p><strong>Completed:</strong> {todo.completed ? "Yes" : "No"}</p>
        </div>
      )}
    </div>
  );
};

export default Todo;
