import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cursos: []
  },
  mutations: {
    getCursosMutation(state, payload){
      state.cursos = payload
    }
  },
  actions: {
    async getCursosAction({commit}){
      try{
        const data = await fetch("http://localhost:3000/cursos");
        const cursos = await data.json();

        cursos.forEach(curso => {
          curso.subNombres = curso.nombre.split("\n")
        });
        
        commit('getCursosMutation', cursos);
      }
      catch(error){
        console.log(error);
      }
    }
  },
  modules: {
  }
})
