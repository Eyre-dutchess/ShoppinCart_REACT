import { FaHeart, FaShoppingBag} from "react-icons/fa";
// import { useState } from "react";
import { useGlobalContext } from "../context";

const SingleItem = ({id, name, img, tag, area, cato}) => {

   
    const {favList,  cartList, searchList, handleCartBtn, handleFavBtn} = useGlobalContext();

   
    // function setClassName(id){
    //     if(favList.map(item=> item.id === id)){
    //         return "add-fav-btn active";
    //         setActiveFav(true)
    //     }else{
    //         return "add-fav-btn";
    //         setActiveFav(false)
    //     }
    // }
    return ( 
        <li className="meal-item">
                <img className="meal-img" src={img} alt="meal img" />
                <h3 className="meal-name">{name}</h3>
                {tag !== null && <p className="meal-tag">--{tag.toString().substring(0,25)}...</p>}
                {cato !== null && <p className="meal-cato">--{cato}</p>}
                <p className="meal-area">--{area}</p>
                <button onClick={()=>handleFavBtn(id, searchList)} 
                className= {favList.map(item=> item.id).includes(id) ? "add-fav-btn active" : "add-fav-btn" }><FaHeart /></button>
                <button onClick={()=> handleCartBtn(id, searchList)}
                className={cartList.map(item=> item.id).includes(id) ? "add-cart-btn active" : "add-cart-btn"}><FaShoppingBag /></button>
        </li>
     );
}
 
export default SingleItem;