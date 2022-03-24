import { useState } from "react";
import { Link } from "react-router-dom";
import { restaurants } from "../steder";


export default function PreferenceForm() {
    const [restaurant, setRestaurant] = useState([]);
    
    
    const [radio, setRadio] = useState("aarhus");
    
    

    function handleSubmit(){

        return;
    }
   

    return(
        <div>
            <h2>Vælg by</h2>
            <form onClick={handleSubmit}>
                <label>Aarhus</label><br/>
                <input type="radio" checked={radio === "aarhus"} name="bynavn" value="aarhus" onChange={(event) =>{setRadio(event.target.value)}}/><br/>
                <label>Odense</label><br/>
                <input type="radio" checked={radio === "odense"} name="bynavn" value="odense" onChange={(event) =>{setRadio(event.target.value)}}/><br/>
                <label>Aalborg</label><br/>
                <input type="radio" checked={radio === "aalborg"} name="bynavn" value="aalborg" onChange={(event) =>{setRadio(event.target.value)}}/><br/>
                <label>København</label><br/>
                <input type="radio" checked={radio === "koebenhavn"} name="bynavn" value="koebenhavn" onChange={(event) =>{setRadio(event.target.value)}}/><br/>
                <button></button>
            </form>
        </div>
    )
    
}