import MDEditor from '@uiw/react-md-editor';

import { Link } from "react-router-dom"
import "./post.css"

export default function Post({post}) {
    const PF = "http://localhost:4000/images/";
  return (
    <div className="post">
        {post.photo &&(
        <img 
            className="postImg" 
            src={PF + post.photo}
            alt="postImg" 
        />
        )}
        <div className="postInfo">
            <div className="postCats">
                {post.categories.map((c) =>(
                    <span className="postCat">{c.name}</span>
                ))}
            </div>
            <Link to={`/post/${post._id}`} className="link">
                <span className="postTitle">
                    {post.title}
                </span>
            </Link>
            <hr />
            <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <MDEditor.Markdown className="postDesc" source={post.desc} />
    </div>
  )
}
