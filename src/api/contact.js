import instance from "./config";

const getContact = ()=>{
    return instance.get('/contact');
};

const addContact = (contact)=>{
    return instance.post(`/contact`,contact);
};

const deleteContact = (id)=>{
    return instance.delete(`/contact/${id}`);
};

export{getContact,addContact,deleteContact}