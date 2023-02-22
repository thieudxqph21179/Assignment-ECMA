import instance from "./config";

const getPosts = ()=>{
    return instance.get('/posts');
};
const getPost = (id)=>{
    return instance.get(`/posts/${id}`);
};

const addPost = (post)=>{
    return instance.post(`/posts`,post);
};

const updatePost = (post)=>{
    return instance.put(`/posts/${post.id}`,post);
};

const deletePost = (id)=>{
    return instance.delete(`/posts/${id}`);
};

export{getPost,addPost,updatePost,deletePost,getPosts}