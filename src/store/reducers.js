import { FETCH_TODO_REQUEST, FETCH_TODO_SUCCESS, FETCH_TODO_FAILURE } from "./actions";

const initialState = {
  loading: false,
  todo: {},
  error: null,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODO_REQUEST:
      return { ...state, loading: true };
    case FETCH_TODO_SUCCESS:
      return { ...state, loading: false, todo: action.payload.data };
    case FETCH_TODO_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default todoReducer;
