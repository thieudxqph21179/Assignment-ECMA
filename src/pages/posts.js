import { getPosts } from "../api/posts";
import { useEffect, useState } from "../lib";


const posts = () => {
    const[Posts,setPosts] = useState([]);
    useEffect(()=>{
      getPosts().then(({data})=>setPosts(data));
    },[]);
  return (
    `
    
    <section class="section" id="blog">
    <div class="container">
        <h2 class="mb-5">Latest <span class="text-danger">News</span></h2>
        <div class="row">
        ${Posts.map((Post)=>{
            return`
            <div class="blog-card">
                <div class="img-holder">
                    <img src="${Post.img}" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page">
                </div>
                <div class="content-holder">
                    <h6 class="title">${Post.title}</h6>

                    
                    <p>${Post.content}</p>

                    <p><b>${Post.text}</b></p>
                    <p>${Post.content2}</p>

                </div>
            </div><!-- end of blog wrapper -->
            `
        }).join("")} 

        </div>
    </div>
</section>
    `
  )
}

export default posts