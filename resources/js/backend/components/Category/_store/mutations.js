const PULL_CATEGORY = (state, category) => {
    state.category = category;
  };
const MERGE_DATA = (state, data) => {
    _.merge(state.category, data)
};

  export default {
    PULL_CATEGORY,
    MERGE_DATA
  };
