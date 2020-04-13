import api from '../_api';
const pullData = ({ commit, state }, payload) => {
  commit('PULL_CATEGORY', payload.category);
};
const mergeData = ({ commit, state }, payload) => {
    commit('MERGE_DATA', payload);
};
const saveCategoryApi = ({ commit, state }, payload) => {
    return api.saveCategoryApi(payload)
};
const updateCategoryApi = ({ commit, state }, payload) => {
    return api.updateCategoryApi(payload)
};
const removeCategoryApi = ({ commit, state }, payload) => {
    return api.removeCategoryApi(payload)
};
const getByIdCategoryApi = ({ commit, state }, payload) => {
    return api.getByIdCategoryApi(payload)
};

export default {
    pullData,
    mergeData,
    saveCategoryApi,
    updateCategoryApi,
    removeCategoryApi,
    getByIdCategoryApi
};
