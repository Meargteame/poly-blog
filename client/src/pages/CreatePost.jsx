import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'
export default function CreatePost(){
    return(
       <form>
        <input type="title" placeholder={'Title'}></input>
        <input type="summary" placeholder={'Summary'}></input>
        <input type="file"></input>
        <ReactQuill/>
       </form>
    )
}