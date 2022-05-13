import useFetch from "./useFetch";
import { useState } from "react";
import {useContext} from "react";
import {SongContext} from "./App";

const FAVS = () => {
    const {data:songs,loading,error}=useFetch('http://localhost:7000/Favourites');
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
        <div className="Favs">
            <div className="image"></div>
            <div className="titles">
                <p>PLAYLIST</p>
                <h1>LIKED SONGS</h1>
            </div>
            {error && <div> {error} </div>}
            {loading && <div>Loading ...</div>}
            {songs &&  songs.map((song)=>(

                    <button className="songpreview" onClick={()=>handleSelect(song,song.id)} key={song.id}>
                            <h6>{song.id}</h6>
                            <h2>{song.title}</h2>
                            <p>{song.artist}</p>
                            { console.log(currentSongTitle+" "+currentSongArtist+" "+currentSongId) }
                    </button>
            ))}
            
        </div>
     );
}
 
export default FAVS;