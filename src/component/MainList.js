
import { useGlobalContext } from "../context";
import SingleItem from "./SIngleItem";

const MainList = () => {
    const {searchList,  closeSubmenu} = useGlobalContext();
   
    // if(searchList === []){
    //     return ( 
    //         <ul className="meal-list" onMouseOver={closeSubmenu}>
    //             {mealList.map((meal)=>{
    //                 return (
    //                     <SingleItem key={meal.id} {...meal} mealList = {mealList} />
    //                 )
    //             })}
                
    //         </ul>
    //      );
    // }
    
    if(searchList){
        return(
            <ul className="meal-list" onMouseOver={closeSubmenu}>
                {searchList.map((meal)=>{
                    return (
                        <SingleItem key={meal.id} {...meal} mealList = {searchList} />
                    )
                })}
                
            </ul>
        )
    }
    
}
 
export default MainList;