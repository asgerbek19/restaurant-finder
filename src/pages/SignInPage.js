import SignInForm from "../components/SignInForm";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.png"
export default function SignInPage(){
    const navigate = useNavigate();
    return (
    <main className="onboarding">
        <div onClick={() => navigate("/")}>
        <svg xmlns="http://www.w3.org/2000/svg" width="43.459" height="41.069" viewBox="0 0 43.459 41.069">
        <g id="Polygon_2" data-name="Polygon 2" transform="translate(43.459 23.407) rotate(149)" fill="#fff">
        <path d="M 33.38788223266602 26.80785751342773 L 0.90433669090271 26.80785751342773 L 17.14610481262207 0.9402873516082764 L 33.38788223266602 26.80785751342773 Z" stroke="none"/>
        <path d="M 17.14610481262207 1.88056755065918 L 1.808650970458984 26.30785751342773 L 32.48354721069336 26.30785751342773 L 17.14610481262207 1.88056755065918 M 17.14610481262207 -3.814697265625e-06 L 34.29220581054688 27.30785751342773 L -3.814697265625e-06 27.30785751342773 L 17.14610481262207 -3.814697265625e-06 Z" stroke="none" fill="#707070"/>
        </g>
        </svg>

</div>
            <img src={logo} alt="Muncho Logo" className="onboardinglogo"/>
        <h1>Log ind</h1>
  <SignInForm/>
   <div className="userredirect"> Har du ikke en bruger? <Link to="/opret-bruger">Opret en her</Link></div>
   </main>
    )
}
