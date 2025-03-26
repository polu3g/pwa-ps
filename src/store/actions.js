export const FETCH_TODO_REQUEST = "FETCH_TODO_REQUEST";
export const FETCH_TODO_SUCCESS = "FETCH_TODO_REQUEST_SUCCESS";
export const FETCH_TODO_FAILURE = "FETCH_TODO_REQUEST_FAILURE";

export const fetchTodo = () => ({
  type: FETCH_TODO_REQUEST,
  payload: {
    request: {
      url: "/todos/1",
    },
  },
});
