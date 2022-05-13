import { Link } from "react-router-dom";
import chits from './img/chits.jpg';
import Ahits from './img/Ahits.jpg';
import thits from './img/thits.jpg';
const Content = () => {
    return ( 
        <div className="content">
            <div className="firstrow">
                <h1>The Bests</h1>
                <Link to="/ChillHits" className="Chits"><img src={chits} alt="" /></Link>
                <Link to="/TopHits" className="Thits"><img src={thits} alt="" /></Link>
                <Link to="/Acoustics" className="Ahits"><img src={Ahits} alt="" /></Link>
                <Link to="/ChillHits" className="Chits1"><img src={chits} alt="" /></Link>
                <Link to="/Acoustics" className="Ahits1"><img src={Ahits} alt="" /></Link>
            </div>
            <div className="secondrow">
                <h1>Your picks</h1>
                
                
                <Link to="/Acoustics" className="Ahits"><img src={Ahits} alt="" /></Link>
                <Link to="/TopHits" className="Thits"><img src={thits} alt="" /></Link>
                <Link to="/ChillHits" className="Chits1"><img src={chits} alt="" /></Link>
                <Link to="/Acoustics" className="Ahits1"><img src={Ahits} alt="" /></Link>
                <Link to="/ChillHits" className="Chits"><img src={chits} alt="" /></Link>
            </div>
            <div className="thirdrow">
                <h1>You Might Like</h1>
                <Link to="/ChillHits" className="Chits"><img src={chits} alt="" /></Link>
                
                <Link to="/Acoustics" className="Ahits"><img src={Ahits} alt="" /></Link>
                <Link to="/ChillHits" className="Chits1"><img src={chits} alt="" /></Link>
                <Link to="/TopHits" className="Thits"><img src={thits} alt="" /></Link>
                <Link to="/Acoustics" className="Ahits1"><img src={Ahits} alt="" /></Link>
            </div>
        </div>
     );
}
 
export default Content;