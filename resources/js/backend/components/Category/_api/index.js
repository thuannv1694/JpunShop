const saveCategoryApi = async function(value) {
    const url = '/admin/category/addNewCategory';
    const response = await axios.post(url, value);
    return response;
};
const updateCategoryApi = async function(value) {
    const url = '/admin/category/update';
    const response = await axios.post(url, value);
    return response;
};
const removeCategoryApi = async function(value) {
    const url = '/admin/category/remove';
    const response = await axios.post(url, value);
    return response;
};
const getByIdCategoryApi = async function(config) {
    const url = '/admin/category/getById';
    const response = await axios.get(url, config);
    return response;
};
export default {
    saveCategoryApi,
    updateCategoryApi,
    removeCategoryApi,
    getByIdCategoryApi

}
