import SignInForm from "../components/SignInForm";
import { Link } from "react-router-dom";

export default function SignInPage(){
   
    return (
        <main className="onboarding">
        <h1>Log ind</h1>
  <SignInForm/>
   <div> Har du ikke en bruger? <Link to="/opret-bruger">Opret en her</Link></div>
   </main>
    )
}
