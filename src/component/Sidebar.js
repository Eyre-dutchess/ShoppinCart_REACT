import { useGlobalContext } from "../context";


const Sidebar = ({sidebarOpen}) => {
    const {sublinks} = useGlobalContext();
    return ( 
        <section className={`sidebar-section ${sidebarOpen ?"open" :""}`}>
            <ul className="sidebar-list">
                {sublinks.map((sublink, index)=>{
                    return (
                        
                            <li key={index} className="sidebar-link">
                                <h3>{sublink.page}</h3>
                                <ul className="sidebar-sub-list">
                                    {sublink.links.map((link, index)=>{
                                        return (
                                            <li key={index} className="sidebar-sub-item">
                                                {link.icon}{link.label}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </li>
                    )
                })}
                
            </ul>
        </section>
     );
}
export default Sidebar;