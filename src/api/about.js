import instance from "./config";

const getAbout = ()=>{
    return instance.get('/profile');
};

const updateAbout = (profile)=>{
    return instance.put(`/profile/${profile.id}`,profile);
};

const deleteAbout = (id)=>{
    return instance.delete(`/profile/${id}`);
};
export{getAbout,updateAbout,deleteAbout}