const searchApi = async function (config) {
    const url = '/admin/product/search';
    const response = await axios.get(url, config);
    return response;
};

const searchIdProductApi = async function (config) {
    const url = '/admin/product/searchIdProduct';
    const response = await axios.get(url, config);
    return response;
};

const removeApi = async function (value) {
    const url = '/admin/product/remove';
    const response = await axios.post(url, value);
    return response;
};

export default {
    searchApi,
    searchIdProductApi,
    removeApi

}
