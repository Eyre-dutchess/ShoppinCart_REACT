import React, { useCallback, useEffect, useReducer, useState } from "react";
import { useContext } from "react";
import data from "./data";
import reducer from "./reducer"

const urlSearch = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const LSFav = ()=>{
    let list = localStorage.getItem('fav-list');
    if (list) {
        return (list = JSON.parse(localStorage.getItem('fav-list')));
    } else {
        return [];
    }
} 
const LSCart = ()=>{
    let list = localStorage.getItem('cartt-list');
    if (list) {
        return (list = JSON.parse(localStorage.getItem('cartt-list')));
    } else {
        return [];
    }
} 


const initialState ={
    cartItems: LSCart(),
    totalAmount:0,
    totalValue: 30
}


const AppContext = React.createContext();
const AppProvider = ({children}) =>{
   const [sublinks, setSublinks] = useState(data);
   const [page, setPage] = useState({name:"", links: []});
   const [location, setLocation] = useState({});
   const [submenuOpen, setSubmenuOpen] = useState(false);

   const [term, setTerm] = useState("");
   const [searchList, setSearchList] = useState([]);

   const [state, dispatch] = useReducer(reducer, initialState);

   const [favList, setFavList] = useState(LSFav());
   const [cartList, setCartList] = useState(state.cartItems);
   const [activeFav, setActiveFav] = useState(false);
   const [activeCart, setActiveCart] = useState(false);

   function openSubmenu(){
    setSubmenuOpen(true)
   }
   function closeSubmenu(){
    setSubmenuOpen(false)
   }
   function getSubmenu(title, coordinates){
        const curLinks = data.find((item)=> item.page === title);
        setPage({name: title, links: curLinks.links })
        setLocation({...coordinates});
   } 

    const getMealBySearch = useCallback( async () =>{
        
        try {
            const resp = await fetch(urlSearch+term);
            const data = await resp.json("");
            const {meals} = data;
            console.log(meals);
            if(meals){
                const newSearchedList = meals.map(meal=>{
                    const {
                        idMeal,
                        strArea,
                        strCategory,
                        strInstructions,
                        strMeal,
                        strMealThumb,
                        strTags,
                        strYoutube
                        } = meal;
                        return {
                            id: idMeal,
                            name: strMeal,
                            area: strArea,
                            cato: strCategory,
                            instru: strInstructions,
                            img: strMealThumb,
                            tag: strTags,
                            link: strYoutube
                        } 
                })
                setSearchList(newSearchedList);
            }else{
                setSearchList([])
            }
            
        } catch (error) {
            console.log(error)
        }
   }, [term])


   useEffect(()=>{
    getMealBySearch(term)
   }, [ getMealBySearch, term])

   useEffect(()=>{
    localStorage.setItem("fav-list", JSON.stringify(favList))
    localStorage.setItem("cartt-list", JSON.stringify(state.cartItems))
   }, [favList, state])

   function handleFavBtn(id, list){
    if(activeFav){
        setActiveFav(false)
        const newList = favList.filter((favItem)=>
            favItem.id !== id
        )
        setFavList(newList)
    }
    else{
        setActiveFav(true)
        const curItem = list.find(item=> item.id === id);
        const favItem = {
            id: id,
            name: curItem.name,
            img: curItem.img,
        }
        if(favList.map(item=> item.id).includes(id)){
            setFavList(favList)
        }else{
            setFavList([...favList, favItem])
        }
    }
    }
    function handleCartBtn(id, list){
    if(activeCart){
        const newCartList = cartList.filter(item => item.id !== id);
        dispatch({type: "DISPLAY_CART", payload: newCartList})
        setActiveCart(false)
    }else{
        setActiveCart(true)
        const curItem = list.find(item=> item.id === id);
        const newCartItem = {
            id: id,
            name: curItem.name,
            img: curItem.img,
            amount: 1,
            active: true,
            price: Math.floor((Math.random()+1)*20)
        }
        if(cartList.map(item=> item.id).includes(id)){
            setCartList(cartList)
            dispatch({type: "DISPLAY_CART", payload: cartList})
        }else{
            setCartList([...cartList, newCartItem])
            dispatch({type: "DISPLAY_CART", payload: [...cartList, newCartItem]})
        }
        
    }
    
    }



   
   const clearCart = () =>{
    dispatch({type: "CLEAR_CART"})
   }
   const removeCart=(id) => {
    dispatch({type: "REMOVE_CART", payload: id})
   }
   useEffect(()=>{
        dispatch({type: "GET_TOTAL"})
   }, [state])
   const increCart = (id) =>{
    dispatch({type: "INCREASE", payload: id})
   }
   const decreCart = (id) =>{
    dispatch({type: "DECREASE", payload: id})
   }

    return (
        <AppContext.Provider value = {{
            sublinks , getSubmenu, page, location, submenuOpen, openSubmenu, closeSubmenu,
             favList, setFavList,
            term, setTerm,  searchList, setSearchList, 
            cartList, setCartList,
            handleCartBtn, handleFavBtn,
            ...state, clearCart, removeCart, increCart, decreCart, 
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(AppContext)
}
export {AppContext, AppProvider};