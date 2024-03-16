import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { LOGIN } from "../../lib/routes";
export default function Layout() {
    const { user, isLoading } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (!isLoading && !user) {
          navigate(LOGIN);
        }
      }, [user, isLoading]);
    
    if (isLoading) return "Loading auth user...";

    return (
        <>
        <div className="navigation">
        <div className="logobox">
            <h1 className="logo">aSocial</h1>
            <p>B2B Rewards Manager</p>
            </div>
            <Link to="/protected" className="link">Home</Link>
        </div>
        <div>
            <Outlet/>
        </div>
        </>
    )
}