import React from "react";
import { assets } from "../../assets/assets";

const BlogTableItem = ({ blog, fetchBlogs, index }) => {
  const { title, createdAt } = blog;
  const BlogDate = new Date(createdAt);

  return (
    <tr className=" border-y border-gray-300">
      <td>{index}</td>
      <td>{title}</td>
      <td>{BlogDate.toDateString()}</td>
      <td>
        <p>{blog.isPublished ? 'Published':'Unpublished'}</p>
      </td>
      <td>
        <button>
            {blog.isPublished ? 'Unpublish':'Publish'}
        </button>
        <img src={assets.cross_icon}  alt="" />
      </td>
    </tr>
  );
};

export default BlogTableItem;
