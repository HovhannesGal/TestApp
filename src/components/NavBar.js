import React, { useContext } from "react";
import { Context } from "../index";
import "../App.css"
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";

const NavBar = observer( () => {
        const {user} = useContext(Context)
    return(
        <div>
        
        {user.isAuth ?
        <div className= "kar"><Link to="/" style={{color:"white",textDecoration:"none" ,marginRight:"70%",}}>G-Project</Link>
        <button className="btnNav" style={{marginRight: 5}}>Register</button>
        <button className="btnNav" style={{marginRight: 5}}>login</button>
        <button className="btnNav" style={{marginRight: 10}}></button>
        
        </div>
        
        :
        <div className= "kar"><Link to="/" style={{color:"white",textDecoration:"none" ,marginRight:"70%",}}>G-Project</Link>
        <button className="btnNav" style={{marginRight: 5}}>Register</button>
        <button className="btnNav" style={{marginRight: 5}}>login</button>
        <button className="btnNav" style={{marginRight: 10}}></button>
        
        </div>


        }
        
        </div>
        
    )

   
});

export default NavBar;