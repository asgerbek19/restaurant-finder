import { getAuth,signOut } from "firebase/auth";
import { NavLink } from "react-router-dom";
import homeicon from "../images/homeicon-w.png";
import likeicon from "../images/likeicon-w.png";
import staricon from "../images/staricon-w.png";
import logout from "../images/logout-w.png"


export default function Nav() {
        const auth = getAuth();
        function handleSignOut(){
                signOut(auth);
        }
        return (
                <nav className="navbar">
                        <NavLink to="/"><img src={homeicon} alt="Home"/></NavLink>
                        <NavLink to="/gemte"><img src={likeicon} alt="Home"/></NavLink>
                        <NavLink to="/bedst-bedoemte"><img src={staricon} alt="Home"/></NavLink>
                        <div onClick={handleSignOut}><img src={logout} alt="Home"/></div>
                </nav>
        );
} 