import axios from 'axios';
const state = () => ({
    listNews: [],
    info: '',

});
const mutations = {
    setList(state, param) {
        state.listNews = param;
    },
    setInfo(state, param) {
        state.info = param;
    }
};
const actions = {
    fetchList(store) {
        axios
            .get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9c2f39aed9944dbca999fbe39c614457`)
            .then((response) => {
                store.commit('setList', response.data.articles);
            })
            .catch((error) => {
                store.commit("setInfo", error)
            })
    }
};

export default {
    state,
    actions,
    mutations,
}