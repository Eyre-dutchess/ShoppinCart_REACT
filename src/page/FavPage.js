import { useGlobalContext } from "../context";
import FavSingle from "../component/FavSingle";
import { Link } from "react-router-dom";

const FavPage = () => {
    const {favList, setFavList} = useGlobalContext()
    function handleFavBtn(id){
        setFavList(
            favList.filter(item=> item.id !== id)
        )
    }

    if(favList.length === 0){
        return (
            <section className="fav-section">
                <h1>My collection</h1>
                <p>Empty now!</p>
                <Link to="/"><p>Go to Home</p></Link>
            </section>
        )
    }
    return ( 
        <section className="fav-section">
            <h1>My collection</h1>
            
            <ul className="favorite-list">
                {favList.map((favItem)=>{
                    return (
                        <FavSingle key={favItem.id} {...favItem} handleFavBtn = {handleFavBtn}/>
                    )
                })}
            </ul>
        </section>
     );
}
 
export default FavPage;