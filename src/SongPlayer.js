import { BsFillPlayFill,BsFillSkipEndFill,BsFillSkipStartFill,BsFillVolumeUpFill,BsSliders } from "react-icons/bs";
import { IconContext } from "react-icons";
import useFetch from "./useFetch";
import useEffect from "react";
import disk from "./img/fococlipping-20220301-154545.png";
import {useContext} from "react";
import {SongContext} from "./App";

const SongPlayer = () => {
    const sg= useContext(SongContext);
    return ( 
        <div className="sPlayer">
            { <div className="image"></div> }

                <div className="names">
                    <div className="songName">{sg.sname}</div>
                    <div className="Artist">{sg.sartist}</div>
                </div>
            <IconContext.Provider value={{style:{color:"white",background:"transparent"}}}>
                <div className="icons">
                    <div className="icon1"><BsFillSkipStartFill /></div>
                    <div className="icon2"><BsFillPlayFill /></div>
                    <div className="icon3"><BsFillSkipEndFill /></div>
                    <div className="icon4">5:00</div>
                    <div className="icon5"></div>
                    <div className="icon6">5:00</div>
                    <div className="icon7"><BsFillVolumeUpFill /></div>
                    <div className="icon8"></div>
                    <div className="icon9"><BsSliders /></div>
                </div>
            </IconContext.Provider>
        </div>
     );
}
 
export default SongPlayer;