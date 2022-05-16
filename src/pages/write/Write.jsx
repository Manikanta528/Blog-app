import "./write.css"

export default function Write() {
  return (
    <div className='write'>
        <img className="writeImg" src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="profile" />
        <form className='writeForm'>
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i className="writeIcon fa-solid fa-circle-plus"></i>
                </label>
                <input type="file"  id="fileInput" style={{display:"none"}} />
                <input type="text"  className='writeInput' placeholder='Title...' autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea type="text"  className="writeInput writeText"  placeholder='Tell Your Story...'></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}
