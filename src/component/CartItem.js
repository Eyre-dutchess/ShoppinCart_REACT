import { FaChevronDown, FaChevronUp} from "react-icons/fa";
import { useGlobalContext } from "../context";

const CartItem = ({img, name, price, amount, id}) => {
    const {removeCart, increCart, decreCart} = useGlobalContext();
    return ( 
        <li className="cart-item" >
            <img className="cart-img" src={img} alt="cart img" />
            <div className="cart-info">
                <h3 className="cart-name">{name}</h3>
                <p className="cart-price">${price}</p>
                <button 
                onClick={()=> removeCart(id)}
                className="small remove-cart-btn">REMOVE</button>
            </div>
            <div className="cart-amount">
                <button 
                onClick={()=> increCart(id)}
                className="incre-btn"><FaChevronUp /></button>
                <span className="amount">{amount}</span>
                <button 
                onClick={()=> decreCart(id)}
                className="decre-btn"><FaChevronDown /></button>
            </div>
        </li>
     );
}
 
export default CartItem;