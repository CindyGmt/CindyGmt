const state = {
    resizeWidth: null
}
const mutations = {
    SET_RESIZEWIDTH: (state, data) => {
        state.resizeWidth = data
    }
}
export default {
    state,
    mutations
}