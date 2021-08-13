import React,{ useState , useEffect}from 'react';
import axios from 'axios';

import NotAuthPost from './notAuthPost';

const AuthPost = () => {

    const [post,setPost] = useState([]);
    let id = window.location.pathname

    const styles={
        display: "flex",
        flexDirection: "column",
        width: "5em",
        margin: "auto",
    }

    useEffect(()=>{
        const fetchPost = async ()=>{
        const res = await axios.get("/posts"+id)
        setPost(res.data);
        }
        fetchPost();
    });

    const handleUpdate = async () => {
        let content = document.getElementById("text").innerHTML
        console.log(id, content)
        try {
          await axios.put("/posts/update" + id, {
              text: content
          });
          window.location.replace("/sign");
        } catch (err) {}
      };

    const handleDelete = async () => {
        try {
          await axios.delete("/posts/delete"+id);
          window.location.replace("/sign");
        } catch (err) {

        }
      };

      let Text = (post.name === JSON.parse(localStorage.getItem('user')).name)


    return (
      <div style={{ display: "flex", flexDirection: "column"}} >
          {(Text) ? 
          <>
              <div contenteditable="true" id="text" className="text" style={{display: "block", margin: "auto", cursor: "pointer"}} dangerouslySetInnerHTML={{__html: post.text}} />
              <div style={styles}>
                  <button onClick={handleUpdate}>Save Edit</button>
                  <button onClick={handleDelete}>Delete</button>
              </div> 
          </>: <NotAuthPost />
          }
      </div>
    )
}

export default AuthPost;
