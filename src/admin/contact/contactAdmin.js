import { deleteContact, getContact } from "../../api/contact";
import headerAdmin from "../../components/header-admin";
import { useEffect, useState } from "../../lib";


const contactAdmin = () => {
  
  const[Contacts,setContacts] = useState([]);
  useEffect(()=>{
    getContact().then(({data})=>setContacts(data));
  },[]);

useEffect(function(){
  const btns = document.querySelectorAll(".btn-remove");
  for(let btn of btns){
  btn.addEventListener("click",function(){
    const id = btn.dataset.id;
    deleteContact(id).then(()=>{
      const newContacts = Contacts.filter((user)=>user.id != id);
        setContacts(newContacts);
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
        <th>Nôi dung</th>
        

      </tr>
    </thead>
    <tbody>
    ${Contacts.map((contact)=>{
      return`
      <tr>
        <td>${contact.id}</td>
        <td>${contact.name}</td>
        <td>${contact.email}</td>
        <td>${contact.message}</td>


        <td>
          <button data-id="${contact.id}" class=" btn btn-danger btn-remove">Remove</button>
          
        </td>
      </tr>
      `
    }).join("")}
   
    
      
    </tbody>
  </table></div>
    `
  )
}

export default contactAdmin