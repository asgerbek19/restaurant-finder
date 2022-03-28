import { getAuth,signOut } from "firebase/auth";
import { NavLink } from "react-router-dom";
import homeicon from "../images/homeicon.png";
import likeicon from "../images/likeicon.png";
import staricon from "../images/staricon.png";
import logout from "../images/logout.png"


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