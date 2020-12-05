import Vue from 'vue'
import Vuex from 'vuex'
import {db,auth} from './../firebase'
import router from './../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cursos: [],
    curso: {},
    footer: true,
    nav: {},
    usuario: null,
    error: null,
    carrito: []
  },
  mutations: {
    getCursosMutation(state, payload){
      state.cursos = payload;
    },
    getCursoMutation(state, payload){
      state.curso = payload;
    },
    setFooterMutation(state,payload){
      state.footer = payload;
    },
    setNavMutation(state,payload){
      state.nav = payload;
    },
    setErrorMutation(state, payload){
      state.error = payload; 
    },
    setUsuarioMutation(state,payload){
      state.usuario = payload;
      state.error = null;
    },
    addCarritoMutation(state,payload){
      state.carrito.push(payload)
    },
    deleteCarritoMutation(state,payload){
      state.carrito = state.carrito.filter( item => item.id !== payload)
    }
  },
  actions: {
    getCursosAction({commit}){
      const cursos = [];
      db.collection('cursos').get()
        .then(res=>{
          res.forEach(doc => {
            let curso = doc.data();
            curso.id = doc.id;
            curso.subNombres = curso.nombre.split("\n");

            cursos.push(curso);

            commit('getCursosMutation', cursos)
          })
        })
    },
    getCursoAction({commit}, id){
      db.collection('cursos').doc(id).get()
        .then(doc => {
          let curso = doc.data();
          curso.id = doc.id;

          curso.subNombres = curso.nombre.split("\n");
          curso.descripcion=curso.descripcion.split("\n");
          curso.tamanohorario=curso.horario.length+1;

          commit('getCursoMutation', curso)
        })
    },
    setFooterAction({commit},view){
      commit('setFooterMutation',view)
    },
    setNavAction({commit},view){
      commit('setNavMutation',view)
    },
    registrarUsuarioAction({commit}, usuarioRegistro){
      if(usuarioRegistro.pass1 == usuarioRegistro.pass2){
        auth.createUserWithEmailAndPassword(usuarioRegistro.email,usuarioRegistro.pass1)
        .then(res=>{
          res.user.updateProfile({
            displayName: usuarioRegistro.nombre
          })
          const usuario={
            email: res.user.email,
            uid: res.user.uid,
            nombre: usuarioRegistro.nombre
          }
          commit('setUsuarioMutation',usuario)
          if(window.location.pathname!="/"){
            router.push('/')
          }
        })
        .catch(error=>{
          commit('setErrorMutation', error)
        })
      }
      else{
        commit('setErrorMutation','Las contraseñas no coinciden.')
      }
    },
    logInUsuarioAction({commit},usuarioLogin){
      auth.signInWithEmailAndPassword(usuarioLogin.email,usuarioLogin.password)
        .then(res=>{
          const usuario = {
            email: res.user.email,
            uid: res.user.uid,
            nombre: res.user.displayName
          }
          commit('setUsuarioMutation', usuario);
          if(window.location.pathname!="/"){
            router.push('/')
          }
        })
        .catch(error=>{
          commit('setErrorMutation',error)
        })
    },
    logOutAction({commit}){
      auth.signOut()
        .then(()=>{
          commit('setErrorMutation',null)
        })
    },
    cargarUsuarioAction({commit}){
      auth.onAuthStateChanged(user=>{
        if(user){
          const usuario = {
            email: user.email,
            uid: user.uid,
            nombre: user.displayName
          }
          commit('setUsuarioMutation', usuario);
        }else{
          commit('setUsuarioMutation', null)
        }
      })
    },
    addCarritoAction({commit}, id){
      db.collection('cursos').doc(id).get()
        .then(doc => {          
          let curso = {
            id: doc.id,
            nombre: doc.data().nombre,
            precio: doc.data().precio,
            descuento: doc.data().descuento,
            img: doc.data().img
          }

          commit('addCarritoMutation', curso)
        })
    },
    deleteCarritoAction({commit},id){
      db.collection('cursos').doc(id).get()
        .then(() => {          
          commit('deleteCarritoMutation', id)
        })
    }
  },
  modules: {
  }
})
