import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">About Us</span>
          <img src="https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1373&q=80" alt="about me" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Java</li>
          <li className="sidebarListItem">DSA</li>
          <li className="sidebarListItem">Js</li>
          <li className="sidebarListItem">Python</li>
          <li className="sidebarListItem">Web3</li>
          <li className="sidebarListItem">DBMS</li>
        </ul>
        </div>
        
    </div>
  )
}
