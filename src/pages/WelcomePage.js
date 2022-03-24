import { Link } from "react-router-dom"

export default function WelcomePage(){

    return(
        <div className="onboarding">
<h1>Muncho</h1>
<h2>Udforsk mulighederne nær dig</h2>
<div className="btn-flex">
<Link to="/opret-bruger" className="btn">Opret Bruger</Link>
<Link to="/log-ind" className="btn">Log Ind</Link>
</div>
</div>
    )
}