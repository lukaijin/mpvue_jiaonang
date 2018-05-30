import * as types from '../mutation-types'
const state = {
  shopCount: 0
}

const mutations = {
  [types.UPDATE_INCREMENT_COUNT] (state) {
    state.shopCount += 1
  },
  [types.UPDATE_DECRMENT_COUNT] (state) {
    state.shopCount -= 1
  },
  decrement: (state) => {
    const obj = state
    obj.count -= 1
  }

}

export default {
  state,
  mutations
}
