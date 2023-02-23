
import { deletePost, getPosts } from "../../api/posts";
import footerAdmin from "../../components/footer-admin"
import headerAdmin from "../../components/header-admin"
import { useEffect, useState } from "../../lib"


const PostAdmin = () => {
  const[Posts,setPosts] = useState([]);
  useEffect(()=>{
    getPosts().then(({data})=>setPosts(data));
  },[]);

useEffect(function(){
  const btns = document.querySelectorAll(".btn-remove");
  for(let btn of btns){
  btn.addEventListener("click",function(){
    const id = btn.dataset.id;
    deletePost(id).then(()=>{
      const newPosts = Posts.filter((Post)=>Post.id != id);
        setPosts(newPosts);
      }).catch((err)=>{console.log(err)});
  });
}
});

  return (
    `
    ${headerAdmin()}

    <div class="container pt-5">
    <h1>Quản lý danh sách bài viết</h1>
    <table class="table table-bordered">
    <thead>
      <tr>
        <th>#</th>
        <th>Tiêu đề </th>
        <th>Ảnh</th>
        <th>Tiêu đề 2</th>
        <th>Nội dung 1</th>
        <th>Nội dung 2</th>
        <th>Người đăng</th>

        <th><a class=" btn btn-info btn-remove" href="/#/admin/post/add">Add</a></th>

      </tr>
    </thead>
    <tbody>
    ${Posts.map((Post)=>{
      return`
      <tr>
        <td>${Post.id}</td>
        <td>${Post.title}</td>
        <td><img style="width:50px" src="${Post.img}"></td>
        <td>${Post.text}</td>
        <td>${Post.content}</td>
        <td>${Post.content2}</td>
        <td>${Post.by}</td>
        

        <td>
          <button data-id="${Post.id}" class=" btn btn-danger btn-remove">Remove</button>
          <a class=" btn btn-info btn-remove" href="/#/admin/post/${Post.id}/edit">Edit</a>
          
        </td>
      </tr>
      `
    }).join("")}
   
    
      
    </tbody>
  </table></div>

  ${footerAdmin()}
    
    `
  )
}

export default PostAdmin