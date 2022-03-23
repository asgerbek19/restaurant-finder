
export default function SearchBar({setValue}){
        function handleSearch(event){
                setValue(event.target.value.toLowerCase());
        }
        return <input type="search" placeholder="Søg" onChange={handleSearch}/>;
}

