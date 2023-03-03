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
  getters: {
    getConsumers:(state)=>state.consumers,

    showsSpinner(state) {
      return state.showSpinner
    }
  },
  mutations: {
    setConsumers(state, values) {
      state.consumers = values;
    },
    setConsumer(state, value) {
      state.consumer = value;
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
    showSpinner(state, value){
      state.showSpinner = value
    }
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
      context.commit('showSpinner', true)

      const res = await axios.get(`${bedURL}Catalogue`);
      const { results, err } = await res.data;
      if (results) {
        // console.log(results);
        context.commit("setCatalogue", results);
        context.commit("showSpinner", false);
      } else {
        context.commit("setItem", err);
        context.commit("showSpinner", true);
      }
    },
  },
  modules: {},
});
