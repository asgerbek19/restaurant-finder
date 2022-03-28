import { Link } from "react-router-dom"
import logo from "../images/logo.png";

export default function WelcomePage(){

    return(
        <div className="welcomepage">
<img className="welcomepagelogo"src={logo} alt="Muncho Logo"/>
<h2>Opdag spændende og unikke
restauranter og caféer</h2>
<div className="btn-flex">
<Link to="/opret-bruger" className="btn">Opret Bruger</Link>
<Link to="/log-ind" className="btn">Log Ind</Link>
</div>
</div>
    )
}