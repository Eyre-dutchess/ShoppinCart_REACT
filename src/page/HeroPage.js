import SearchForm from "../component/SearchForm";
import MainList from "../component/MainList";
import { useGlobalContext } from "../context";

const HeroPage = () => {
    const {closeSubmenu} = useGlobalContext();
    return ( 
        <section className="hero-section" onMouseOver={closeSubmenu}>
            <SearchForm />
            <MainList />
        </section>
     );
}
 
export default HeroPage;