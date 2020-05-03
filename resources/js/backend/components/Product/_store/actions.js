import api from '../_api';
const pullData = ({ commit, state }, payload) => {
    commit('PULL_PRODUCT', payload.product);
};
const mergeData = ({ commit, state }, payload) => {
    commit('MERGE_DATA', payload);
};
const searchApi = ({ commit, state }, payload) => {
    return api.searchApi(payload)
};
const searchIdProductApi = ({ commit, state }, payload) => {
    return api.searchIdProductApi(payload)
};

const removeApi = ({ commit, state }, payload) => {
    return api.removeApi(payload)
};

export default {
    pullData,
    mergeData,
    searchApi,
    searchIdProductApi,
    removeApi
};
