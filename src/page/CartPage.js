import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

import CartItem from "../component/CartItem";

const CartPage = () => {
    const {cartItems, totalValue, clearCart} = useGlobalContext();
   

    if(cartItems.length === 0){
        return ( 
        <section className="cartpage-section">
            <h1>Your cart</h1>
            <p>is empty now</p>
            <Link to="/"><p>GO Search</p></Link>    
        </section>
     )
    }
    
    return (
            <section className="cartpage-section">
                <h1>Your cart</h1>
                <div className="cart-container">
                    <ul className="cart-list">
                        {cartItems.map(cart=>{
                            return (
                                <CartItem key={cart.id} {...cart} />
                            )
                        })}
                    </ul>
                </div>  
                <div className="total-container">
                    <h3>Total: $ </h3>
                    <p className="total-out">{totalValue}</p>
                    <button
                    onClick={clearCart}
                    className="clear-cart-btn">Clear All</button>
                </div>
            </section> 
        )
    }
    

 
export default CartPage;