const PULL_CATEGORY = (state, category) => {
  state.category = category;
};

const SET_INIT_FORM = (state, form) => {
  state.form = form
};

export default {
  PULL_CATEGORY,
  SET_INIT_FORM,
};
