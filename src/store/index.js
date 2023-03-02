import axios from "axios";
import { createStore } from "vuex";
const bedURL = "https://stylettos.onrender.com/";
export default createStore({
  state: {
    consumers: null,
    consumer: null,
    catalogues: null,
    catalogue: null,
    showSpinner: true,
    message: null,
  },
  getters: {},
  mutations: {
    setConsumers(state, values) {
      state.users = values;
    },
    setConsumer(state, value) {
      state.user = value;
    },
    setMessage(state, value) {
      state.message = value;
    },
    setCatalogue(state, values) {
      state.catalogues = values;
    },
    setItem(state, value) {
      state.product = value;
    },
  },
  actions: {
    async fetchConsumers(context) {
      const res = await axios.get(`${bedURL}Consumers`);
      const { results, err } = await res.data;
      if (results) {
        context.commit("setConsumers", results);
      } else {
        context.commit("setMessage", err);
      }
    },
    async fetchCatalogue(context) {
      const res = await axios.get(`${bedURL}Catalogue`);
      const { results, err } = await res.data;
      if (results) {
        // console.log(results);
        context.commit("setCatalogue", results);
      } else {
        context.commit("setItem", err);
      }
    },
  },
  modules: {},
});
