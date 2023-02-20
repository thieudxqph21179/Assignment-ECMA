import instance from "./config";

const getResumes = ()=>{
    return instance.get('/resume');
};
const getResume = (id)=>{
    return instance.get(`/resume/${id}`);
};

const addResume = (resume)=>{
    return instance.post(`/resume`,resume);
};

const updateResume = (resume)=>{
    return instance.put(`/resume/${resume.id}`,resume);
};

const deleteResume = (id)=>{
    return instance.delete(`/resume/${id}`);
};

export{getResume,addResume,updateResume,deleteResume,getResumes}