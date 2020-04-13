const pullData = ({ commit, state }, payload) => {
  commit('PULL_CATEGORY', payload.category);
};

const mergeData = ({ commit, state }, payload) => {
  commit('MERGE_DATA', payload);
};

const setDataField = ({ commit, state }, payload) => {
  commit('SET_DATA_FIELD', payload);
};

export default {
  pullData,
  mergeData,
  setDataField,
};
