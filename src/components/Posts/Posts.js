import { NavLink } from "react-router-dom";
import './posts.css'

export default function Posts({ posts }) {
  
  return (
    <div className="posts">
      {posts.map((p) => (
        <NavLink to={'/'+p._id} style={{textDecoration: 'none', color: "black", textAlign: 'center',height: '60px', width: "100%", display: "inline-block", overflow: 'hidden'}}><span className="post" dangerouslySetInnerHTML={{__html: p.text}} /></NavLink>
      ))}
    </div>
  );
}
