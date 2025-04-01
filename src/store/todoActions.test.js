import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { fetchTodo, FETCH_TODO_REQUEST, FETCH_TODO_SUCCESS, FETCH_TODO_FAILURE } from "./todoActions";

const mock = new MockAdapter(axios);
const mockStore = configureMockStore([thunk]);

describe("Todo Actions", () => {
  it("should dispatch FETCH_TODO_SUCCESS on successful API call", async () => {
    const store = mockStore({});
    const mockData = { id: 1, title: "Test Todo" };

    mock.onGet("https://jsonplaceholder.typicode.com/todos/1").reply(200, mockData);

    await store.dispatch(fetchTodo());

    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: FETCH_TODO_REQUEST });
    expect(actions[1]).toEqual({ type: FETCH_TODO_SUCCESS, payload: mockData });
  });

  it("should dispatch FETCH_TODO_FAILURE on API failure", async () => {
    const store = mockStore({});
    mock.onGet("https://jsonplaceholder.typicode.com/todos/1").reply(500);

    await store.dispatch(fetchTodo());

    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: FETCH_TODO_REQUEST });
    expect(actions[1].type).toEqual(FETCH_TODO_FAILURE);
  });
});
