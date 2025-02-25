import React, { useState } from "react";
import "./BlogPost.css";

const BlogPost = ({ post }) => {
  const [expanded, setExpanded] = useState(false);

  if (!post) {
    return <p className="no-content">No post available.</p>;
  }

  const { title, content, date } = post;

  // Format Date
  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Unknown Date";

  // Content Preview (Show first 100 characters)
  const preview = content?.length > 100 ? content.slice(0, 100) + "..." : content;

  return (
    <div className="blog-post">
      <h2>{title || "Untitled Post"}</h2>
      <p className="post-date">{formattedDate}</p>
      <p>{expanded ? content : preview}</p>
      {content?.length > 100 && (
        <button onClick={() => setExpanded(!expanded)} className="read-more">
          {expanded ? "Show Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

export default BlogPost;
