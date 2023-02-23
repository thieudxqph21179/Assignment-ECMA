import { deleteUser, getUsers } from "../../api/user";
import headerAdmin from "../../components/header-admin";
import { useEffect, useState } from "../../lib";

const usersAdmin = () => {

    const[Users,setUsers] = useState([]);
    useEffect(()=>{
      getUsers().then(({data})=>setUsers(data));
    },[]);
  
  useEffect(function(){
    const btns = document.querySelectorAll(".btn-remove");
    for(let btn of btns){
    btn.addEventListener("click",function(){
      const id = btn.dataset.id;
      deleteUser(id).then(()=>{
        const newUsers = Users.filter((user)=>user.id != id);
          setUsers(newUsers);
        }).catch((err)=>{console.log(err)});
    });
  }
  });
  return (
    `
    ${headerAdmin()}

    <div class="container pt-5">
    <h1>Quản lý danh sách người dùng</h1>
    <table class="table table-bordered">
    <thead>
      <tr>
        <th>#</th>
        <th>Tên </th>
        <th>Email</th>
        <th>Vai trò</th>
        

      </tr>
    </thead>
    <tbody>
    ${Users.map((user)=>{
      return`
      <tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.vaiTro}</td>


        <td>
          <button data-id="${user.id}" class=" btn btn-danger btn-remove">Remove</button>
          <a class=" btn btn-info btn-remove" href="/#/admin/user/${user.id}/edit">Edit</a>
          
        </td>
      </tr>
      `
    }).join("")}
   
    
      
    </tbody>
  </table></div>
    `
  )
}

export default usersAdmin