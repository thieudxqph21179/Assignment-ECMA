
import { deletePortfolio, getPortfolios } from "../../api/portfolio";
import footerAdmin from "../../components/footer-admin"
import headerAdmin from "../../components/header-admin"
import { useEffect, useState } from "../../lib"


const portfolioAdmin = () => {
  const[portfolios,setPortfolio] = useState([]);
  useEffect(()=>{
    getPortfolios().then(({data})=>setPortfolio(data));
  },[]);

useEffect(function(){
  const btns = document.querySelectorAll(".btn-remove");
  for(let btn of btns){
  btn.addEventListener("click",function(){
    const id = btn.dataset.id;
    deletePortfolio(id).then(()=>{
      const newPortfolio = portfolios.filter((portfolio)=>portfolio.id != id);
        setPortfolio(newPortfolio);
      }).catch((err)=>{console.log(err)});
  });
}
});

  return (
    `
    ${headerAdmin()}

    <div class="container pt-5" >
    <h1>Quản lý dự án</h1>
    <table class="table table-bordered ">
    <thead>
      <tr>
      <th>#</th>
      <th>Tên dự án</th>
      <th>Mô tả</th>
      <th>Ảnh</th>
      <th>Thời gian làm</th>
      <th>Công nghệ</th>
      <th>Demo</th>
      <th>Link github</th>
    <th><a class=" btn btn-info btn-remove" href="/#/admin/portfolio/add">Add</a></th>

      </tr>
    </thead>
    <tbody>
    ${portfolios.map((portfolio)=>{
      return`
      <tr>
        <td>${portfolio.id}</td>
        <td>${portfolio.name}</td>
        <td>${portfolio.content}</td>
        <td ><img style="width:50px" src="${portfolio.img}"></td>
        <td>${portfolio.time}</td>
        <td>${portfolio.language}</td>
        <td><a href="${portfolio.demo}">${portfolio.demo}</a></td>
        <td><a href="${portfolio.github}">${portfolio.github}</a></td>

        <td>
          <button data-id="${portfolio.id}" class=" btn btn-danger btn-remove">Remove</button>
          <a class=" btn btn-info btn-remove" href="/#/admin/portfolio/${portfolio.id}/edit">Edit</a>
          
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

export default portfolioAdmin