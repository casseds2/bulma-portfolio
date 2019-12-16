/* eslint no-shadow: ["error", { "allow": ["state"] }] */
/* eslint no-param-reassign: ["error", { props: true, "ignorePropertyModificationsFor": ["state"] }] */
import { FirebaseService } from "../../api";

const getDefaultState = () => ({
  articles: [],
});

const state = getDefaultState();

const getters = {
  articles: state => state.articles,
};

const actions = {
  async fetchArticles({ commit }) {
    const data = await FirebaseService.fetchArticles();
    commit("setArticles", data);
  },
};

const mutations = {
  setArticles(state, articles) {
    state.articles = articles;
  },
};

export default {
  state,
  actions,
  getters,
  mutations,
};
