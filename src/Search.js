import { render } from "@testing-library/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Sp from "./SearchPage";
import useFetch from "./useFetch";
import {useContext} from "react";
import {SongContext} from "./App";

const Search = () => {
    const {data:songs,loading,error}=useFetch('http://localhost:7000/songs');
    const [currentValue,setCurrentValue]=useState('');
    const [filteredSongs,setFilteredSongs]=useState(null);
    function onSearch(val){
        setCurrentValue(val.target.value);
        console.log("there was some change");
        var reg=new RegExp(currentValue,"i");
        setFilteredSongs(songs.filter((song)=>{
            return(reg.test(song.title)||reg.test(song.artist));
        }));
        
        console.log(filteredSongs);
        
    }
    const sg=useContext(SongContext);
    const [currentSongTitle,setCurrentSongTitle]=sg.sname;
    const [currentSongArtist,setCurrentSongArtist]=sg.sartist;
    const [currentSongId,setCurrentSongId]=useState('');

    const handleSelect=(song,ID)=>{
        setCurrentSongTitle(song.title);
        setCurrentSongArtist(song.artist);
        setCurrentSongId(song.id);
    }

        return ( 
            <div className="search">
                <form>
                    <input type="text" placeholder="Search..." className="sch" onChange={onSearch}/>
                        <button type="button" className="schbut">
                        </button>
                </form>
                <div className="SP">
                    {console.log("i was accessed 1")}
                    {filteredSongs &&  filteredSongs.map((song)=>(

                        <button className="songpreview" key={song.id} onClick={()=>handleSelect(song,song.id)}>
                                {/* <h6>{song.id}</h6> */}
                                <h2>{song.title}</h2>
                                <p>{song.artist}</p>
                                { console.log(currentSongTitle+" "+currentSongArtist+" "+currentSongId) }
                        </button>
                    
                    ))}
                </div>
            </div>
            );
}
 
export default Search;