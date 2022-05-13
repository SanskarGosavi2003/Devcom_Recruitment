const Sp = (props) => {
    const Fa=props.FA;
    console.log("i have been accessed");
    return ( 
        <div className="SP">
            {Fa &&  Fa.map((song)=>(

            <button className="songpreview" key={song.id}>
                    <h6>{song.id}</h6>
                    <h2>{song.title}</h2>
                    <p>{song.artist}</p>
            </button>
            ))}
        </div>
     );
}
 
export default Sp;