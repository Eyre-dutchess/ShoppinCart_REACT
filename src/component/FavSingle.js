import { FaHeart, FaShoppingBag} from "react-icons/fa";
import { useGlobalContext } from "../context";

const FavSingle = ({id, img, name, handleFavBtn}) => {
    const  {favList, cartList, handleCartBtn} = useGlobalContext();
    return ( 
        <li className="favorite-item" key={id}>
            <img src={img} alt="fav-item" />
            <h3 className="favorite-name">{name}</h3>
            <button onClick={()=> handleFavBtn(id)}
            className= {favList.map(item=> item.id).includes(id) ? "add-fav-btn active" : "add-fav-btn" }><FaHeart /></button>
            <button onClick={()=>handleCartBtn(id, favList)}
            className={cartList.map(item=> item.id).includes(id) ? "add-cart-btn active" : "add-cart-btn"}><FaShoppingBag /></button>
        </li>
     );
}
 
export default FavSingle;