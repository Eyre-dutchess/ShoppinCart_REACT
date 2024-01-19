
import { FaSearch } from "react-icons/fa";
import { useGlobalContext } from "../context";

const SearchForm = () => {
    const {term, setTerm} = useGlobalContext();

    function handleSubmit(e){
        e.preventDefault();
        
    }
    return ( 
        <form onSubmit={handleSubmit} className="search-form">
            <input onChange={(e)=> setTerm(e.target.value)} value={term} type="text" className="search-input" placeholder="e.g. dinner" />
            <button className="search-btn"><FaSearch /></button>
        </form>
     );
}
 
export default SearchForm;