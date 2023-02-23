import { getUser, updateUser } from "../../api/user";
import headerAdmin from "../../components/header-admin";
import { router, useEffect, useState } from "../../lib";

const userAdminEdit = ({id}) => {
    const[user,setuser] = useState([]);
    useEffect(()=>{
      getUser(id).then(({data})=>setuser(data));
    },[]);
    useEffect(()=>{
      const form =document.querySelector("#form-add");
      const username = document.querySelector("#user-name");
      const useremail = document.querySelector("#user-email");
      const uservaitro = document.querySelector("#user-vaitro");
      
  
      form.addEventListener("submit",function(e){
          e.preventDefault();
          //tạo project mới
          const formData= {
              id,
              name: username.value, 
              email: useremail.value,
              vaiTro: uservaitro.value
             
          };
          console.log("vaitro",formData)

          updateUser(formData).then(()=>router.navigate("/admin/user"));
      });
  });
  
  return (
    `
    ${headerAdmin()}
    
    <div class="container" style="padding-top:100px">
    <form action="" id="form-add">
    <div class="form-group">
      <label for="" class="form-label">Tên người dùng :</label>
      <input type="text" class="form-control" id="user-name" value="${user.name}">
    </div>
    <div class="form-group">
    <label for="" class="form-label">Email :</label>
    <input type="text" class="form-control" id="user-email" value="${user.email}">
  </div>
  <div class="form-group">
  <label for="" class="form-label">Vai trò :</label>
  <input type="text" class="form-control" id="user-vaitro" value="${user.vaiTro}">
</div>
    
    <button class="btn btn-primary">Sửa</button>
   </form></div>
    `
  )
}

export default userAdminEdit