import axios from 'axios';

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, objects = {}) => {
    const res = await httpRequest.get(path, objects);
    return res.data;
};
export default httpRequest;
