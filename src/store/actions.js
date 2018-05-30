import * as types from './mutation-types'

export const userLogin = ({ commit }, userInfo) => commit(types.LOGIN, userInfo)

export const userLogout = ({ commit }) => commit(types.LOGOUT)

export const updateUserInfo = ({ commit }, userInfo) => commit(types.UPDATE_USER_INFO, userInfo)

export const updateUserState = ({ commit }, login) => commit(types.UPDATE_USER_STATE, login)

export const updateIncrmentCount = ({ commit }, shopCount) => commit(types.UPDATE_INCREMENT_COUNT, shopCount)

export const updateDecrmentCount = ({ commit }, shopCount) => commit(types.UPDATE_DECRMENT_COUNT, shopCount)
