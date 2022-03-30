import { getAuth,signOut } from "firebase/auth";
import { useNavigate, NavLink } from "react-router-dom";
import homeicon from "../images/homeicon-w.png";
import likeicon from "../images/likeicon-w.png";
import infoicon from "../images/infoicon-w.png";
import signout from "../images/logout-w.png";

//Daniel & Stefanos

export default function Nav() {
        const auth = getAuth();
        const navigate = useNavigate();
        function handleSignOut(){
                signOut(auth);
            navigate("/log-ind");
        }

        return (
                <nav className="navbar">
                        <NavLink to="/"><img src={homeicon} alt="Hjem"/></NavLink>
                        <NavLink to="/gemte"><img src={likeicon} alt="Gemte"/></NavLink>
                        <NavLink to="/om-os"><img src={infoicon} alt="Om Os"/></NavLink>
                        <div onClick={handleSignOut}><img src={signout} alt="Log Ud"/></div> 
                        
                </nav>
        );
} 