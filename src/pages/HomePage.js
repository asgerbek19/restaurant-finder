// Daníel, Mikkel, Stefanos

import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import articlepic1 from "../images/article1.png";
import articlepic2 from "../images/article2.png"
export default function HomePage(){
    const navigate = useNavigate();
    
    function handleNavigate(event){
        event.preventDefault();
        navigate("/praeferencer")
    }
function navigateToArticle1(event){
    event.preventDefault();
    navigate("/artikel-1")
}
function navigateToArticle2(event){
    event.preventDefault();
    navigate("/artikel-2")
}
    return(
        
        <div className="homepage" >
        <img src={logo} alt="Munch'o Logo" className="munchologo"/>
        <button onClick={handleNavigate}>Opdag</button>
        <div className="articles">
        <div className="article" onClick={navigateToArticle1}><img src={articlepic1} alt="Første artikel"/><h3 className="firstarticleheadline">Inspiration til en romantisk middag</h3></div>
        <div className="article" onClick={navigateToArticle2}><img src={articlepic2} alt="Anden artikel"/><h3 className="secondarticleheadline">4 steder med unik atmosfære</h3></div>
        </div>
        </div>
        
    )
}