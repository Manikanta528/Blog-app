
import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img className="postImg" src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="postImg" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">JS</span>
                <span className="postCat">DSA</span>
            </div>
            <span className="postTitle">
                Lorem ipsum dolor sit amet.
            </span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo unde in, consectetur animi quasi voluptate id iusto libero repellat dolorem architecto itaque ex explicabo consequuntur reprehenderit autem quam sed? Porro consectetur corporis, nostrum ratione ipsa autem illo aut, enim soluta veritatis necessitatibus sequi natus placeat.
        </p>
    </div>
  )
}
