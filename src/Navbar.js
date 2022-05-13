import { FaStudiovinari } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { MdOutlineLocalLibrary } from "react-icons/md";
import { BiPodcast } from "react-icons/bi";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            
                    <div className="main-icon">
                        <IconContext.Provider value={{color:"#00ff6e", size:"2em"}}>
                            <Link to="/" className="main-icon"><FaStudiovinari /></Link>
                        </IconContext.Provider>
                    </div>
                    <div className="other-icons">
                        <IconContext.Provider value={{color:"rgb(180, 180, 180)", size:"2em"}}>
                            <Link to="/Library" className="Lib"><MdOutlineLocalLibrary /></Link>
                            <Link to="/Podcasts" className="Pods"><BiPodcast /></Link>
                        </IconContext.Provider>
                    </div>
                    <div className="personals">
                        <p>PERS</p>
                        <Link to="/favourites" className="Lib">FAV</Link>
                        <Link to="/top_picks" className="Pods">TOP</Link>
                    </div>
            
        </nav>
     );
}
 
export default Navbar;