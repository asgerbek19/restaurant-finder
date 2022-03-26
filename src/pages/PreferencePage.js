import { useNavigate } from "react-router-dom";
import PreferenceForm from "../components/PreferenceForm"

export default function PreferencePage() {
        const navigate = useNavigate();
        return (
                <div className="preferencepage">
                <div onClick={() => navigate(-1)}><svg xmlns="http://www.w3.org/2000/svg" width="35" height="52" viewBox="0 0 35 52">
  <g id="Polygon_4" data-name="Polygon 4" transform="translate(0 52) rotate(-90)" fill="#942017">
    <path d="M 51.00571060180664 34.5 L 0.9942888617515564 34.5 L 26 0.8384657502174377 L 51.00571060180664 34.5 Z" stroke="none"/>
    <path d="M 26 1.676933288574219 L 1.988578796386719 34 L 50.01142120361328 34 L 26 1.676933288574219 M 26 0 L 52 35 L 0 35 L 26 0 Z" stroke="none" fill="#707070"/>
  </g>
</svg>
</div>
<div className="preference-center">
                <h2>Vælg by:</h2>
                <PreferenceForm />
                </div>
                </div>
        )
}