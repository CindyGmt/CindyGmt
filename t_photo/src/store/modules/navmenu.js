const state = {
    observerName: '',
    ifShow:true
}
const mutations = {
    SET_OBSERVERNAME: (state, data) => {
        state.observerName = data
    },
    SET_IFSHOW: (state, data) => {
        state.ifShow = data
    }
}
export default {
    state,
    mutations
}