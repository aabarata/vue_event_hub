export const namespaced = true;

const getInitialState = () => {
  return {
    todos: []
  };
};

export const state = getInitialState();

export const mutations = {
  SET_TODOS(state, todos) {
    state.todos = todos;
  }
};

export const actions = {
  setTodos: ({ commit }, payload) => commit("SET_TODOS", payload)
};

export const getters = {
  getFirstFiveTodos: (state) => {
    return state.todos.slice(0, 5);
  }
};
