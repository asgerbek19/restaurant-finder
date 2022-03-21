import { NavLink } from "react-router-dom";

export default function Nav() {
        return (
                <nav>
                        <NavLink to="/">HomePage</NavLink>
                        <NavLink to="/gemte">Gemte</NavLink>
                        <NavLink to="/bedst-bedømte">Bedst bedømte</NavLink>
                </nav>
        );
} 