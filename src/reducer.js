const reducer = (state, action) =>{
    if(action.type === "DISPLAY_CART"){
        return {...state, cartItems: action.payload}
    }
    if(action.type === "CLEAR_CART"){
       return {...state, cartItems: []} 
    }
    if(action.type === "REMOVE_CART"){
        let tempCart = state.cartItems.filter((item)=> item.id !== action.payload);
        return {
            ...state, cartItems: tempCart
        }
    }
    if(action.type === "GET_TOTAL"){
        let {totalAmount, totalValue} = state.cartItems.reduce( 
            (itemTotal, cartItem) =>{
                const {price, amount} =  cartItem;
                const itemValue = price * amount;

                itemTotal.totalAmount += amount;
                itemTotal.totalValue += itemValue;
                return itemTotal
            } ,
            {totalAmount: 0, totalValue: 0}
        )
        return {...state, totalAmount, totalValue}
    }
    if(action.type === "INCREASE"){
        let tempCart = state.cartItems.map((item)=>{
            if(item.id === action.payload){
                return {...item, amount: item.amount + 1}
            }
             return item
        })
        return {...state, cartItems: tempCart}
    }
    if(action.type === "DECREASE"){
        let tempCart = state.cartItems.map((item)=>{
            if(item.id === action.payload){
                return {...item, amount: item.amount - 1}
            }
            return item
        }).filter((item)=> item.amount !== 0);
        return {...state, cartItems: tempCart}
    }
    throw new Error('no matching action type')
}

export default reducer;