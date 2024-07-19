import React from 'react';
import {Link,useNavigate} from 'react-router-dom'
const Nav = () => {
  const auth =localStorage.getItem('user')

  const navigate = useNavigate();
  const logout = () =>{
    localStorage.clear();
    navigate("/signup")
  }

  return (
    <>
      <ul className='nav-ul'>
       <li><Link to = "/">Products</Link></li>
       <li><Link to = "/add">Add Products</Link></li>
       <li><Link to = "/update">Update Products</Link></li>
      
       <li><Link to = "/profile">Profile</Link></li>
       
       {
        auth?<Link onClick ={logout}to = "/signup">Logout</Link>
       :<>
       <li><Link to = "/signup">Signup</Link></li>
       <li><Link to = "/login">Login</Link></li>
       </>
       }
      </ul>
    </>
  );
};

export default Nav;
