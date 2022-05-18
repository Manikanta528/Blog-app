import './header.css'
import bg from"../assets/T_1.svg";

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">React & node</span>
            <span className="headerTitleLg">Blog</span>
            <span className="headerTitleEs">&#8681; Explore More &#8681;</span>
        </div>
        <img src={bg} alt="backgroundImg" className="headerImg" />
    </div>
  )
}
