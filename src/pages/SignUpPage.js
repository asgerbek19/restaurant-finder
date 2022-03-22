import { Link } from "react-router-dom"
import SignUpForm from "../components/SignUpForm"

export default function SignUpPage(){

    return(
        <div>
            <h1>Opret bruger</h1>
            <SignUpForm />
            <div> Har du allerede en bruger? <Link to="/log-ind">Log Ind her</Link></div>
        </div>
    )
}