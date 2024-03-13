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
            <Link className="link" to="/protected/rewards">Rewards</Link>
            <h1 className="logo">Asocial. Admin</h1>
            <Link to="/protected" className="link">Home</Link>
        </div>
        <div>
            <Outlet/>
        </div>
        </>
    )
}