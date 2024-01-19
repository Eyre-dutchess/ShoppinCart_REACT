import { useGlobalContext } from "../context";
import Submenu from "./Submenu";

const Navbar = () => {
    const {sublinks, getSubmenu, openSubmenu} = useGlobalContext();
    function handleHover(e){
        openSubmenu();
        const pageName = e.target.textContent;
        const loc = e.target.getBoundingClientRect();
        const curCenter = (loc.left + loc.right)/2;
        const curBottom = loc.bottom ;
        getSubmenu(pageName, {curCenter, curBottom})
    }


    
    return ( 
        <nav className="header-nav" onMouseOver={openSubmenu}>
            <ul className="nav-list">
                {sublinks.map((sublink, index)=>{
                    return (
                        <li onMouseOver={handleHover} key={index} className="nav-item">{sublink.page}</li>
                    )
                })}
                
            </ul>
            <Submenu />
        </nav>
     );
}
 
export default Navbar;