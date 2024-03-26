import { useNavigate } from "react-router-dom"
import { LOGIN } from "../../lib/routes";
export default function NotApproved() {

    const navigate = useNavigate();
    return (

        <>
            <div className="notApproved">
                <h1>Unfortunately, you are not approved yet. 
                    Contact an admin to approve your account.
                </h1>
                <button onClick={()=>{ navigate(LOGIN)}}>Back to Login</button>
            </div>
        </>
    )
}