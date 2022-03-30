// Asger, Mikkel

import { useNavigate } from "react-router-dom"

export default function ArticlePage2() {
    const navigate = useNavigate();
    return(
        <div className="articlepage">
            <div onClick={() => navigate(-1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="43.459" height="41.069" viewBox="0 0 43.459 41.069">
                    <g id="Polygon_2" data-name="Polygon 2" transform="translate(43.459 23.407) rotate(148)" fill="#fff">
                    <path d="M 33.38788223266602 26.80785751342773 L 0.90433669090271 26.80785751342773 L 17.14610481262207 0.9402873516082764 L 33.38788223266602 26.80785751342773 Z" stroke="none"/>
                    </g>
                    </svg>
                </div>
         <div>
            <h1>Steder med unik atmosfære rundt om i Danmark</h1>
            <article>
            <h2>Aarhus</h2>
            <h3>Unico, noget for alle.</h3>
            <div className="restaurantimage">
            <img src="https://niipit.dk/unico/wp-content/uploads/sites/689/2021/01/Unico-banner.jpg" alt="Unico" />
</div>
            <p>Deres restaurant laver en fornyelse af den traditionsrige, danske mormormad, inspireret af det ny nordiske køkken, krydret med det franske landkøkken, lavet af lokale råvarer behandlet med omhu, respekt og kærlighed. Deres mad er altid inspireret af sæsonen – både i forhold til råvarer og farver og de har et stort fokus på bæredygtighed og dyrevelfærd. Så ønsker du et par hyggelige timer i det klassiske mormorkøkken, med en lille twist – så går du ikke galt i byen ved at give Unico et visit.  </p>
            </article>
            <article>
            <h2>Odense</h2>
            <h3>Café Fleuri</h3>
            <div className="restaurantimage">
            <img src="https://migogodense.dk/wp-content/uploads/2021/08/cafe-fleuri-800x480.jpg" alt="Cafe Fleuri" />
            </div>
            <p>Café Fleuri ligger midt i Odenses gamle Nørregade-kvarter. De vægter økologi og hjemmelavet mad højt og de sætter en ære i at give alle sanser en oplevelse når du besøger vores smukke cafe i ægte fransk landstil. Når vejret er til det skal du unde dig selv et besøg i deres helt unikke gårdhave fyld med smukke planter og helt uforstyrret fra byens støj.</p>
            </article>
            <article>
            <h2>København</h2>
            <h3>Mæxico</h3>
            <div className="restaurantimage">
            <img src="https://lobo-contract.dk/wp-content/uploads/2022/01/Mxico-Kbenhavn.jpg" alt="Mæxico" />
            </div>
            <p>Mæxico hed tidligere Barburrito. Her var den et sted for hurtige tacos og kolde øl. Efter seks år med dette koncept ændrede man stedet til en burrito bar og lavede konceptet om til en restaurantoplevelse.
            Nu handler det om at få smilene frem hos gæsterne med lækker mad og en god atmosfære. Tag gerne din veninde, kæreste eller mor under armen, fordi mange af retterne hos Mæxico er delevenlige.
            Mæxico er stedet, når du leder efter den festlige stemning og en omgang mexicansk mad. Du kan ikke gå forkert her!.</p>
            </article>
            <article>
            <h2>Aalborg</h2>
            <h3>Cafe Visa</h3>
            <div className="restaurantimage">
            <img src="https://kennedyarkaden.dk/wp-content/uploads/2021/03/Kennedy-Arkaden-HDR-15.jpg" alt="Cafe Visa" />
            </div>
            <p>Hos Café Visa bliver du inviteret indenfor i en moderne café. Deres koncept bygger på at være en traditionel café med moderne tankegange, hvor de skaber rammerne for en hyggelig aften. Derfor har du stadig mulighed for at finde alt på menukortet, hvad hjertet begærer såsom traditionelle og lækre caféburgere og sandwich, men de kan også friste med lækre, mexicanske burritos. Herudover tilbyder vi hos Café Visa en café med mange muligheder.</p>
            </article>
        </div>
        </div>
    )
}