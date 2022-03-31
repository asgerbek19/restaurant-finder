// Asger, Mikkel

import { useNavigate } from "react-router-dom"

export default function ArticlePage1() {
    const navigate = useNavigate();
    return(
        <div className="articlepage">
            <div className="backarrow" onClick={() => navigate(-1)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="43.459" height="41.069" viewBox="0 0 43.459 41.069">
                <g id="Polygon_2" data-name="Polygon 2" transform="translate(43.459 23.407) rotate(148)" fill="#fff">
                <path d="M 33.38788223266602 26.80785751342773 L 0.90433669090271 26.80785751342773 L 17.14610481262207 0.9402873516082764 L 33.38788223266602 26.80785751342773 Z" stroke="none"/>
                </g>
                </svg>
            </div>
            <h1>Få inspiration til romantisk middag</h1>
            <article>
            <h2>Aarhus</h2>
            <h3>Oli-Bistro</h3>
            <div className="restaurantimage">
            <img src="https://fastly.4sqi.net/img/general/600x600/171107675_3EBwMzkkQK8ZOS7BMbHAlgCkMYfmRtr5cG2upHpELuM.jpg"alt="Oli-bistro" />
            </div>
            <p>Oli-Bistro er navnet, og det er en ærkefransk bistro, som lige så godt kunne have ligget i en fransk landsby. Maden er klassisk fransk inspireret, priserne er lave, og ejeren er et livsstykke uden lige. Så hvis du forestiller dig Paris’s gader, med rød-ternet due, et koldt glas hvidvin i autentiske omgivelser. Så er Oli-Bistro et must at besøge, hvis man elsker Frankrig og fransk mad. </p>
            </article>
            <article>
            <h2>Odense</h2>
            <h3>Salinaz</h3>
            <div className="restaurantimage">
            <img src="https://lh3.googleusercontent.com/p/AF1QipO03AQi-M3QlOiscFItWP6MCF3XIPjQI-B6oDDc=w600-k" alt="Salinaz" />
            </div>
            <p>Sprøde burgere og saftige steaks er bare noget af det, du får hos Salinaz i Odense. Salinaz er en steakhouse, der tager inspiration fra det sydamerikanske køkken. Her går man op i kød af høj kvalitet, så du får noget af en oplevelse for smagsløgene. Steakhouse-stemningen er i top og kommer man senere på aften, kan man godt sige, at der kommer lidt mere romantik i luften. Der tændes stearinlys, rødvinsglassene kommer på bordet og det dæmpede lys gør, at det er et perfekt sted at holde en romantisk middag med kæresten. Du kommer i hvert fald til at blive helt populær hos kæresten, hvis du inviterer ham eller hende med på Salinaz.  </p>
            </article>
            <article>
            <h2>København</h2>
            <h3>Blue Elephant </h3>
            <div className="restaurantimage">
            <img src="https://www.blueelephant.dk/images/billeder/008.jpg" alt="Blue Elephant" />
            </div>
            <p>Ønsker De at invitere deres udkårne på en romantisk middag, går du ikke galt i byen her. Hos Blue Elephant træder de ind i en helt anden verden med grønne planter, små rislende vandfald og levende lyd på bordene. Så hvis du ønsker en aften med alt gode fra det thailandske køkken, vil en aften hos Blue Elephant i de smukke omgivelser, tage dig med en tur til Thailand.</p>
            </article>
            <article>
            <h2>Aalborg</h2>
            <h3>Restaurant Rusk </h3>
            <div className="restaurantimage">
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/14/4f/ce/f9/photo0jpg.jpg" alt="Restaurant Rusk" />
            </div>
            <p>Hos Restaurant Rusk i Aalborg får man en fantastisk følelse af hygge og velvære i deres intime lokaler midt i Aalborg centrum, nærmere bestemt Brandstrupsgade. Rusk er en fransk-inspireret restaurant og brasserie med nordiske toner, og de vil til hver en tid udfordre samt berige din gane med gastronomi kreeret på kærligheden til de lokale råvarer. Netop lokale råvarer er et stort fokuspunkt for Restaurant Rusk, og maden er altid tilberedt med et stort engagement og passion.</p>
            </article>
        </div>
    )
}