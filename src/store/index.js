import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    series:[],
    misfavoritos:[]
  },

  getters:{
    enviarDataSeries(state){
      return state.series;      
    },
    enviarDataMisFavoritos(state){
      return state.misfavoritos;
    }
  },

  mutations: {
    llamarApiTvnaze(state, informacionApiTvmaze){
      state.series = informacionApiTvmaze;
    },
    MisFavoritos(state, informacionMisFavoritos){
      state.misfavoritos.push(informacionMisFavoritos);
    }, 
    quitarFavorito(state, id){
      state.misfavoritos.splice(id,1);
    }
  },

  actions: {
    llamarApiTvnaze(context,parametrosApiTvmaze){
      context.commit('llamarApiTvnaze', parametrosApiTvmaze);
    },
    MisFavoritos(context, parametroauxiliarMisFavoritos){
      context.commit('MisFavoritos', parametroauxiliarMisFavoritos)      
    },
    quitarFavorito(context,id){
      context.commit('quitarFavorito', id)
    }
  },

  modules: {
  }
})
