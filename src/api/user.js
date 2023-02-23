import instance from "./config";

const signup = (user) => {
    return instance.post(`/signup`, user);
};

const signin = (user) => {
    return instance.post(`/signin`, user);
};
const getUser = (id)=>{
    return instance.get(`/users/${id}`);
};
const getUsers = ()=>{
    return instance.get('/users');
};
const updateUser = (user)=>{
    return instance.put(`/users/${user.id}`,user);
};
const deleteUser = (id)=>{
    return instance.delete(`/users/${id}`);
};

export {signup,signin,getUsers,updateUser,deleteUser,getUser}