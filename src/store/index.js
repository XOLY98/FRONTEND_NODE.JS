import axios from 'axios'
import { createStore } from 'vuex'
const bedURL =""
export default createStore({
  state: {
    users:null,
    user:null,
  products:null,
  product:null,
  showSpinner:true,
  message:null
  },
  getters: {
  },
  mutations: {
    setUsers(state,values){
      state.users=values
    },
    setUser(state,value){
      state.user=value
    },
    setMessage(state,value){
      state.message=value;
    }
  },
  actions: {
    async fetchUsers(context){
      const res= await axios.get(`${bedURL}Users`);
      const {results,err}=await res.data;
      if (results){
        context.commit('setUsers',results)
      }else{
        context.commit('setMessage',err)
      }

    }
  },
  modules: {
  }
})
