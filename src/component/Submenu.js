import { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";

const Submenu = () => {
    const {page:{name, links}, location, submenuOpen} = useGlobalContext();
    
    const submenuContainer = useRef(null);
    useEffect(()=>{
        const {curCenter, curBottom} = location;
        submenuContainer.current.style.left = `calc(${curCenter}px - 15em)`;
        submenuContainer.current.style.top = `calc(${curBottom}px - 1.5em)`;
       
    }, [name, links, location])
    

    return ( 
        <article className={`submenu-container ${submenuOpen ? "show" :""}`} ref={submenuContainer}>
            <h3>{name}</h3>
            <ul className="submenu-list">
                {links.map((link, index)=>{
                    return (
                        <li className="submenu-item" key={index}>
                            {link.icon}
                            {link.label}
                            </li>
                    )
                })}
            </ul>
        </article>
     );
}
 
export default Submenu;