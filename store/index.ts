export const state = () => ({
  api_path: 'http://localhost:3000',
  logged: false,
  token: '',
  user_id: -1
});

export const mutations = {
  setLogin(state: any, value: Boolean) {
    state.logged = value;
  },
  setToken(state: any, value: String) {
    state.token = value;
  },
  setUserId(state: any, value: Number) {
    state.user_id = value;
  }
}
export const getters = {
  getApiPath(state: any) {
    return state.api_path;
  },
  getCategoria(state: any) {
    return state.categoria;
  },
  isLogged(state: any) {
    return state.logged;
  },
  getToken(state: any) {
    return state.token;
  },
  getUserId(state: any) {
    return state.user_id;
  }
}
