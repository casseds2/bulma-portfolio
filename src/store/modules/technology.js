/* eslint no-shadow: ["error", { "allow": ["state"] }] */
/* eslint no-param-reassign: ["error", { props: true, "ignorePropertyModificationsFor": ["state"] }] */
import { FirebaseService } from "../../api";

const getDefaultState = () => ({
  technologies: [],
});

const state = getDefaultState();

const getters = {
  technologies: state => state.technologies,
};

const actions = {
  async fetchTechnologies({ commit }) {
    const data = await FirebaseService.fetchTechnology();
    commit("setTechnologies", data);
  },
};

const mutations = {
  setTechnologies(state, technologies) {
    state.technologies = technologies;
  },
};

export default {
  state,
  actions,
  getters,
  mutations,
};
