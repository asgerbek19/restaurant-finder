

export default function PreferenceForm() {

    return(
        <div>
            <h2>Vælg by</h2>
            <form>
                <label for="aarhus">Aarhus</label><br></br>
                <input type="radio" id="aarhus" name="bynavn" value="aarhus"/><br></br>
                <label for="odense">Odense</label><br></br>
                <input type="radio" id="odense" name="bynavn" value="odense"/><br></br>
                <label for="aalborg">Aalborg</label><br></br>
                <input type="radio" id="aalborg" name="bynavn" value="aalborg"/><br></br>
                <label for="kobenhavn">København</label><br></br>
                <input type="radio" id="kobenhavn" name="bynavn" value="kobenhavn"/>
            </form>
        </div>
    )
}