import {useNavigate} from "react-router-dom";



export default function ResultCard({ restaurant }) {
    const navigate = useNavigate();
  

   
    function handleClick() {
        navigate(`resultater/${restaurant.name}`)
    }
    
   
    

    
    return(
        <div className="Results">
        <div className="ResultCard">
            <h2>{restaurant.name}</h2>
            <p>{restaurant.desc}</p>
            <button onClick={handleClick}>Læs mere</button>
            <img src="#" alt="Bedømmelse" />
        </div>
        </div>
    )

  
}