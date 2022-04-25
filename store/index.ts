export const state = () => ({
  api_path: 'http://localhost:3000'
});

export const mutations = {
}
export const getters = {
  getApiPath(state: any) {
    return state.api_path;
  },
  getCategoria(state: any) {
    return state.categoria;
  }
}
