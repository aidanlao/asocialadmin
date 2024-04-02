import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { BUSINESSMANAGER, LOGIN, NOTAPPROVED, PROTECTED, USERS } from "../../lib/routes";
export default function Layout() {
    const { user, isLoading } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (!isLoading && !user) {
            navigate(LOGIN);
        }
        if (!isLoading && user?.approved == "false") {
          navigate(NOTAPPROVED);
        }
      }, [user, isLoading]);
    
    if (isLoading) return (<div className="loading">
    
        <p>Loading authentication...</p>
    
    </div>);

    return (
        <>
        <div className="navigation">
        <div className="logobox">
            <h1 className="logo">aSocial</h1>
            <p>B2B Rewards Manager</p>
            </div>
            <Link to={PROTECTED} className="link">Home</Link>
            <Link to={USERS} className="link">Manage Users</Link>
            <Link to={BUSINESSMANAGER} className="link">Businesses</Link>
        
        </div>
        <div>
            <Outlet/>
        </div>
        </>
    )
}