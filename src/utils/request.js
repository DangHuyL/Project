import axios from 'axios';

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (path, objects = {}) => {
    const res = await request.get(path, objects);
    return res.data;
};
export default request;
