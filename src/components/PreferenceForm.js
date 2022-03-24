import { useState } from "react";
import { Link } from "react-router-dom";



export default function PreferenceForm() {
    
    const [radio, setRadio] = useState("aarhus");

    return(
        <div>
            <h2>Vælg by</h2>
            <form>
                <label for="aarhus">Aarhus</label><br/>
                <input type="radio" checked={radio === "aarhus"} id="aarhus" value="aarhus" onChange={(event) =>{setRadio(event.target.value)}}/><br/>
                <label for="odense">Odense</label><br/>
                <input type="radio" checked={radio === "odense"} id="odense" value="odense" onChange={(event) =>{setRadio(event.target.value)}}/><br/>
                <label for="aalborg">Aalborg</label><br/>
                <input type="radio" checked={radio === "aalborg"} id="aalborg" value="aalborg" onChange={(event) =>{setRadio(event.target.value)}}/><br/>
                <label for="koebenhavn">København</label><br/>
                <input type="radio" checked={radio === "koebenhavn"} id="koebenhavn" value="koebenhavn" onChange={(event) =>{setRadio(event.target.value)}}/><br/>
                <Link to="/resultater" className="btn">Videre</Link>
            </form>
        </div>
    )
    
}