import React, { useEffect, useState } from 'react';
import './OurBlogs.css';

const OurBlogs = () => {
    const [blogs, setblogs] = useState([]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_KEY}/blogs`)
            .then(res => res.json())
            .then(data => setblogs(data))
    }, []);
    return (
        <div className="pt-5" style={{ minHeight: "85vh" }}>
            <h2 className="fw-bold mt-3 mb-5">Our Recent Blogs</h2>
            {blogs?.length > 0 ?
                <div className="row container mx-auto">
                    {
                        blogs?.map(blog =>
                            <div key={blog?._id} className="blog-container col-lg-4 col-md-6 col-sm-12 text-start mb-5 border" data-aos="fade-down"
                                data-aos-easing="linear"
                                data-aos-duration="1500">
                                <img className="w-100 mb-3 rounded-3" src={blog?.url} alt="news-pic" />
                                <span className="bg-warning px-2 py-1 rounded-3">Date: {blog?.date}</span>
                                <h4 className="mb-3 mt-2">{blog?.name}</h4>
                                <p className="text-secondary">{blog?.description}</p>
                                <button className="btn btn-danger mt-2 mb-4">Read More..</button>
                                <span className="ms-4 author">Post By - {blog?.by}</span>
                            </div>
                        )
                    }
                </div> :
                <div className="d-flex justify-content-center align-items-center">
                    <div className="spinner-border text-danger text-center d-block" role="status">
                    </div>
                </div>
            }
        </div>
    );
};

export default OurBlogs;