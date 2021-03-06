import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { authUser } from "../../../App";

function ViewBlog() {
  const { getId } = useParams();
  const [blog, setBlog] = useState({});
  const [userDetail, setUserDetail] = useState({});

  useEffect(() => {
    authUser
      .get(`/blogs/${getId}`)
      .then((res) => {
        console.log(res.data.blog);
        setBlog(res.data.blog);
        // let onlyDate = blog.date.split('T')[0];
        // alert(onlyDate);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="row">
        <div className="container col-10">
          <div className="row">
            <div className="col-lg-2">
              <button className="btn btn-danger mt-3" onClick={()=>window.location='/adminpage'} >Go Back</button>
            </div>
            <div className="col-lg-10">
              <h1 className="mt-4 my-5">{blog.Title}</h1>
              <p>Posted on {blog.date}</p>
              <p>Location :{blog.Location}</p>
              <img
                className="img-fluid rounded mb-5 "
                src="http://placehold.it/900x300"
                alt=""
              />
              <p className="lead my-4 my-auto">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ducimus, vero, obcaecati, aut, error quam sapiente nemo saepe
                quibusdam sit excepturi nam quia corporis eligendi eos magni
                recusandae laborum minus inventore?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut,
                tenetur natus doloremque laborum quos iste ipsum rerum obcaecati
                impedit odit illo dolorum ab tempora nihil dicta earum fugiat.
                Temporibus, voluptatibus.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos,
                doloribus, dolorem iusto blanditiis unde eius illum consequuntur
                neque dicta incidunt ullam ea hic porro optio ratione repellat
                perspiciatis. Enim, iure!
              </p>
              <blockquote className="blockquote">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
                <footer className="blockquote-footer">
                  Someone famous in
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error,
                nostrum, aliquid, animi, ut quas placeat totam sunt tempora
                commodi nihil ullam alias modi dicta saepe minima ab quo
                voluptatem obcaecati?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
                dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore
                quidem voluptates cupiditate voluptas illo saepe quaerat numquam
                recusandae? Qui, necessitatibus, est!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewBlog;
