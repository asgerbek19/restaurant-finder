import { getAuth,signOut } from "firebase/auth";
import { NavLink } from "react-router-dom";

export default function Nav() {
        const auth = getAuth();
        function handleSignOut(){
                signOut(auth);
        }
        return (
                <nav>
                        <NavLink to="/">HomePage</NavLink>
                        <NavLink to="/gemte">Gemte</NavLink>
                        <NavLink to="/bedst-bedomte">Bedst bedømte</NavLink>
                        <button onClick={handleSignOut}>Log ud</button>
                </nav>
        );
} 