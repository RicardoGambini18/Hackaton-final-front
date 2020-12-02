import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cursos: [],
    curso: {},
    footer: true,
    nav: {}
  },
  mutations: {
    getCursosMutation(state, payload){
      state.cursos = payload
    },
    getCursoMutation(state, payload){
      state.curso = payload;
    },
    setFooterMutation(state,payload){
      state.footer = payload;
    },
    setNavMutation(state,payload){
      state.nav = payload;
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
    },
    async getCursoAction({commit}, id){
      try{
        let newUrl = `http://localhost:3000/cursos/${id}`;

        const data = await fetch(newUrl);
        const curso = await data.json();

        curso.subNombres = curso.nombre.split("\n");
        curso.descripcion=curso.descripcion.split("\n");
        curso.tamanohorario=curso.horario.length+1;

        commit('getCursoMutation', curso);
      }
      catch(error){
        console.log(error);
      }
    },
    setFooterAction({commit},view){
      commit('setFooterMutation',view)
    },
    setNavAction({commit},view){
      commit('setNavMutation',view)
    }
  },
  modules: {
  }
})
