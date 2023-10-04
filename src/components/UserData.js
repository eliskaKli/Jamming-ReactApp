import React, { useCallback } from "react";
import { BiSolidUserCircle } from "react-icons/bi";

import "../components_styles/UserData.css";


function UserData(props) {
   const handleLogin = useCallback(
      (event) => {
         props.onLogin(event.target.value);
      }, [props.onLogin]
   );

 return (
    <div className="User" onLogin={handleLogin}>
        <img 
        src={props.userImg ? props.userImg : BiSolidUserCircle } 
        alt="img"
        /> 
        <p>{props.userName}</p>
    </div>
 )
}

export default UserData;




