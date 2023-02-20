import instance from "./config";

const signup = (user) => {
    return instance.post(`/signup`, user);
};

const signin = (user) => {
    return instance.post(`/signin`, user);
};
export {signup,signin}