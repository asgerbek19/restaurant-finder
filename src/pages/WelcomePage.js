import { Link, useNavigate } from "react-router-dom"
import logo from "../images/logo.png";
import infoicon from "../images/infoicon-w.png"

export default function WelcomePage(){
const navigate = useNavigate();

function handleNavigate(event){
    event.preventDefault();
    navigate("/om-os");
};
    return(
      
        <div className="welcomepage">
<img className="welcomepagelogo"src={logo} alt="Muncho Logo"/>
<h2>Opdag spændende og unikke
restauranter og caféer</h2>
<div className="btn-flex">
<Link to="/opret-bruger" className="btn">Opret bruger</Link>
<Link to="/log-ind" className="btn">Log ind</Link>
<img onClick={handleNavigate} src={infoicon} alt="Om Munch'o"/>
</div>
</div>
    )
}