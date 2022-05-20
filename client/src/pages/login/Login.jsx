import "./login.css"
import { Link } from "react-router-dom"
import  backGroundImg  from "../../components/assets/loginBg.svg"

export default function Login() {
  return (
    <div className="login" style={{ backgroundImage: `url(${backGroundImg})` }}>
      
        <div className="loginCard">
        <span className="loginTitle">Login</span>
        <form className="loginForm">
            <label>Email</label>
            <input type="text" className="loginInput" placeholder="Enter Your Email.." />
            <label>Password</label>
            <input type="password" className="loginInput" placeholder="Enter Your Password.." />
            <button className="loginButton">Login</button>
        </form>
        <button className="loginRegisterButton"><Link to='/register' className="link">Register</Link></button>
        </div>
    </div>
  )
}
