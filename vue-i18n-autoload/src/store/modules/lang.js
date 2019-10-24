export default {
  state: {
    languages: [],
  },
  getters: {
    languages: state => state.languages,
  },
  mutations: {
    setLanguages(state, langs) {
      state.languages = langs;
    },
  },
  actions: {
    addLanguages({ commit }, langs) {
      commit('setLanguages', langs);
    },
  },
};
