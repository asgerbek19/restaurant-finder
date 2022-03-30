// Mikkel

import { useNavigate } from "react-router-dom";

export default function AboutPage() {

    const navigate = useNavigate();

    return(
        <div className="aboutpage">
            <div onClick={() => navigate(-1)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="43.459" height="41.069" viewBox="0 0 43.459 41.069">
                <g id="Polygon_2" data-name="Polygon 2" transform="translate(43.459 23.407) rotate(148)" fill="#fff">
                <path d="M 33.38788223266602 26.80785751342773 L 0.90433669090271 26.80785751342773 L 17.14610481262207 0.9402873516082764 L 33.38788223266602 26.80785751342773 Z" stroke="none"/>
                </g>
                </svg>
            </div>
            <h1>Om os</h1>
            <img src="../images/logo.png" alt="" />
            <div className="about-text">
            <p>
                Hos Munch'o har vi altid været inspireret af de små, mindre kendte 
                og måske endda skjulte restauranter og caféer, som man kan finde rundt omkring.
                De besidder oftest en hyggelig og charmerende atmosfære, der gør, at oplevelsen 
                bliver helt anderledes og unik.
            </p>
            <p>
                Med Munch'o har vi til intention at give folk muligheden for at opdage de unikke
                steder vi har her i Danmark, så de mindre besøgte steder har mulighed for at få 
                mere eksponering så vel som anerkendelse, og derved blive mere populære.
            </p>
            </div>
        </div>
    )
}