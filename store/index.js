import Vuex from 'vuex'
import inputStrings from './inputStrings'
import {_} from 'vue-underscore'

const shuffleStrings = _.shuffle(inputStrings)

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      counter: 0,

      interval: 60,
      strings: [],
      displayString: '',
      inputStrings: shuffleStrings,
      inputStringsBase: shuffleStrings.concat(),
      missCount: 0,
      typeSuccessCount: 0,
      successStage: 0,
      isDied: false
    }),
    mutations: {
      increment (state) {
        state.counter++
      },

      choice(state) {
        let mondai = state.inputStrings.pop()
        if (!mondai) {
          state.inputStrings = state.inputStringsBase.concat()
          mondai = state.inputStrings.pop()
        }
        state.displayString = mondai.displayString
        state.strings = mondai.inputString.split('')
      },
      typeMiss(state) {
        state.missCount++
      },
      typeSuccess(state) {
        state.typeSuccessCount++
      },
      stageSuccess(state) {
        state.successStage++
      },
      die(state) {
        state.isDied = true
      },
      resetAll(state) {
        state.isDied = false
        state.interval = 60
        state.strings = []
        state.missCount = 0
        state.successStage = 0
        state.typeSuccessCount = 0
        state.displayString = ''
      },
      decrementInterval(state, decrement) {
        state.interval -= decrement
      }
    }

  })
}

export default createStore
