import { useState } from "react";
import { editUser } from "../../hooks/users";
export default function User({ approved, id, username, email }) {
    function onComplete(message) {
        console.log(message);
    }
    const [localApproved, setLocalApproved] = useState(approved);
    return (

<>
        <div className="user">
            <h2>{username}</h2>
            <p>{email}</p>
            <p>Status: {localApproved}</p>
            <div className="buttonGroup">
            <button onClick={()=> { editUser(id,"true",onComplete); setLocalApproved("true");}}>Approve</button>
            <button onClick={()=> { editUser(id,"false",onComplete); setLocalApproved("false");}}>Remove Approval</button>
      
            </div>
            </div>
</>
        
    );
}