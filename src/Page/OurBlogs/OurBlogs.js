import React, { useEffect, useState } from 'react';
import './OurBlogs.css';

const OurBlogs = () => {
    const [blogs,setblogs]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/blogs')
        .then(res=>res.json())
        .then(data=>setblogs(data))
    },[]);
    return (
        <div>
            <h1 className="text-danger my-5 fw-bold">Our Recent Blogs</h1>
            <div className="row container mx-auto">
            {
                blogs.map(blog=>
                        <div key={blog._id} className="blog-container col-lg-4 col-md-6 col-sm-12 text-start mb-5">
                            <img className="w-100 mb-3 rounded-3" src={blog.url} alt="news-pic" />
                            <h4 className="text-danger mb-3">{blog.name}</h4>
                            <p className="text-secondary">{blog.description}</p>
                            <button className="btn btn-danger mt-3 mb-5">Read More..</button>
                        </div>
                )
            }
            </div>
        </div>
    );
};

export default OurBlogs;