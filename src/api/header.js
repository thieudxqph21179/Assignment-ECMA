import instance from "./config";

const getHeaders = ()=>{
    return instance.get('/header');
};
const getHeader = (id)=>{
    return instance.get(`/header/${id}`);
};

const addHeader = (Header)=>{
    return instance.post(`/header`,Header);
};

const updateHeader = (Header)=>{
    return instance.put(`/header/${Header.id}`,Header);
};

const deleteHeader = (id)=>{
    return instance.delete(`/header/${id}`);
};

export{getHeader,addHeader,updateHeader,deleteHeader,getHeaders}