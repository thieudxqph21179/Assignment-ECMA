import { deleteHeader, getHeaders } from "../../api/header";
import headerAdmin from "../../components/header-admin";
import { useEffect, useState } from "../../lib";

const headerADMIN = () => {
    const[Header,setHeader] = useState([]);
  useEffect(()=>{
    getHeaders().then(({data})=>setHeader(data));
  },[]);

useEffect(function(){
  const btns = document.querySelectorAll(".btn-remove");
  for(let btn of btns){
  btn.addEventListener("click",function(){
    const id = btn.dataset.id;
    deleteHeader(id).then(()=>{
      const newHeader = Header.filter((Header)=>Header.id != id);
        setHeader(newHeader);
      }).catch((err)=>{console.log(err)});
  });
}
});
  return (
    `
    ${headerAdmin()}

    <div class="container pt-5">
    <h1>Quản lý Menu</h1>
    <table class="table table-bordered">
    <thead>
      <tr>
        <th>#</th>
        <th>Menu </th>
        <th>Link</th>
       

        <th><a class=" btn btn-info btn-remove" href="/#/admin/post/add">Add</a></th>

      </tr>
    </thead>
    <tbody>
    ${Header.map((Header)=>{
      return`
      <tr>
        <td>${Header.id}</td>
        <td>${Header.menu}</td>
        <td>${Header.href}</td>
       

        <td>
          <button data-id="${Header.id}" class=" btn btn-danger btn-remove">Remove</button>
          <a class=" btn btn-info btn-remove" href="/#/admin/${Header.id}/edit">Edit</a>
          
        </td>
      </tr>
      `
    }).join("")}
   
    
      
    </tbody>
  </table></div>

    `
  )
}

export default headerADMIN