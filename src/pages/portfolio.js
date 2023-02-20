import { getPortfolios } from "../api/portfolio";
import { useEffect, useState } from "../lib";

const portfolio = () => {
    const[portfolios,setPortfolio] = useState([]);
    useEffect(()=>{
      getPortfolios().then(({data})=>setPortfolio(data));
    },[]);

    
  return (
    `
        <section class="section bg-custom-gray" id="portfolio">
            <div class="container">
                <h1 class="mb-5"><span class="text-danger">Dự án của tôi</h1>
                <div class="portfolio">

                    <div class="filters">
                        <a href="#" data-filter=".new" class="active">
                            New
                        </a>
                        <a href="#" data-filter=".advertising">
                            Advertising
                        </a>
                        <a href="#" data-filter=".branding">
                            Branding
                        </a>
                        <a href="#" data-filter=".web">
                            Web
                        </a>
                    </div>
                    <div class="portfolio-container"> 
                    <div class="row">
                    ${portfolios.map((portfolio)=>{
                        return`
                        <div class="col-md-6 col-lg-4">
                            <div class="portfolio-item">
                                <img style="height:450px" src="${portfolio.img}" class="img-fluid" alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates">
                                <div class="content-holder">
                                    <a class="img-popup" href="${portfolio.img}"></a>
                                    <div class="text-holder">
                                        <h6 class="title">Tên dự án : ${portfolio.name}</h6>
                                        <p class="subtitle">Mô tả : ${portfolio.content}</p>
                                        <p class="subtitle">Thời gian hoàn thành : ${portfolio.time}h</p>
                                        <p class="subtitle">Ngôn ngữ lập trình : ${portfolio.language}</p>

                                        <a class="subtitle" href="${portfolio.demo}">Web Demo</a><br>
                                        <a class="subtitle" href="${portfolio.github}">Link github</a>

                                    </div>
                                </div>   
                            </div>             
                        </div>                      
                        `
                      }).join("")}</div>
                    </div> 
                </div>  
            </div>            
        </section>
    `
  )
}

export default portfolio