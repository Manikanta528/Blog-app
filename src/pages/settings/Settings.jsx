import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
              <span className="settingsUpdateTitle">Update Your Account</span>
              <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className="settingsForm">
              <label>Profile Picture</label>
              <div className="settingsPP">
              <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="pofile" />
              <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-regular fa-circle-user"></i>
              </label>
              <input type="file"  id="fileInput" style={{display:"none"}} />
              </div>
              <label>Username</label>
              <input type="text" placeholder="Username" />
              <label>Email</label>
              <input type="email" placeholder="example@mail.com" />
              <label>Password</label>
              <input type="Password" placeholder="Password" />
              <button className="settingsSubmitButton">Update</button>
            </form>
        </div>

        <Sidebar/>
    </div>
  )
}
