import React from "react";
import { BiSolidUserCircle } from "react-icons/bi";

import "../components_styles/UserData.css";

function UserData(props) {

  return (
    <div className="User">
      <div className="UserImg">
         {props.userImg ? (
          <img src={props.userImg} alt="img" />
         ) : (
          <BiSolidUserCircle /> 
         )
        }
      </div>    
      <p>{props.userName}</p>
    </div>
  );
}

export default UserData;


