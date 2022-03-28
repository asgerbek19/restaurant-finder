import { useNavigate } from "react-router-dom"
import logo from "../images/logo.png"
export default function HomePage(){
    const navigate = useNavigate();
    
    function handleNavigate(event){
        event.preventDefault();
        navigate("/praeferencer")
    }

    return(
        <div className="homepage" >
        <img src={logo} alt="Munch'o Logo" className="munchologo"/>
        <button onClick={handleNavigate}>Opdag</button>
        </div>
        
    )
}