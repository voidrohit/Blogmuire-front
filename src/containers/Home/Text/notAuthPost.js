import React,{ useState , useEffect}from 'react';
import axios from 'axios';

import './Text.css'

const NotAuthPost = () => {

    const [post,setPost] = useState([]);
    let id = window.location.pathname

    useEffect(()=>{
        const fetchPost = async ()=>{
        const res = await axios.get("/posts"+id)
        setPost(res.data);
        }
        fetchPost();
    });
    return (
        <div style={{ display: "flex", flexDirection: "column"}}>
            <div id="text" className="text" style={{display: "block", margin: "auto"}} dangerouslySetInnerHTML={{__html: post.text}} />
        </div>
    )
}

export default NotAuthPost;