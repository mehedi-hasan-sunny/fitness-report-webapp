import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    step: {
      name: '',
      email: '',
      phoneNumber: '',
      profilePicture: '',
      gender: '',
      age: 30,
      height: 152.4,
      weight: 70,
      smoker: '',
      exercise: '',
      hasMedicalHistory: null,
      medicalHistory: [],
    }
  },
  mutations: {
    setStepData: (state, payload) => {
      if(payload instanceof Object){
        Object.keys(payload).forEach((key)=>{
          state.step[key] = payload[key];
        })
      }
    },
  },
  actions: {
    setStep({commit}, payload) {
      commit('setStepData', payload)
    },
  },
  getters: {
    stepData: state => state.step,
  },
  modules: {
  }
})
