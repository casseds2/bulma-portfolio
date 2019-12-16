import Vue from "vue";
import Vuex from "vuex";
import technology from "./modules/technology";
import articles from "./modules/articles";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    technology,
    articles,
  },
});
