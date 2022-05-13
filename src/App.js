import Navbar from "./Navbar";
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Search from "./Search";
import Content from "./Content";
import CHITS from "./CHITS";
import THITS from "./THITS";
import AHITS from "./AHITS";
import SongPlayer from "./SongPlayer";
import FAVS from "./Favourites";
import Lib from "./Library";
import TOPS from "./Tops";
import Pod from "./Podcasts";
import { useState, createContext }from "react";

export const SongContext=createContext();

function App() {
  const [SN,setSN]=useState('Shape Of You');
  const [SA,setSA]=useState('ED SHEERAN');
  const SG={
    sname: [SN,setSN],
    sartist : [SA,setSA]
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <SongContext.Provider value={SG}>
          <Search />
          <SongPlayer />
          <div className="cnt">
            <Switch>
              <Route exact path="/">
                <Content />
              </Route>
              <Route exact path="/ChillHits">
                <CHITS />
              </Route>
              <Route exact path="/TopHits">
                <THITS />
              </Route>
              <Route exact path="/Acoustics">
                <AHITS />
              </Route>
              <Route exact path="/favourites">
                <FAVS />
              </Route>
              <Route exact path="/Library">
                <Lib/>
              </Route>
              <Route exact path="/top_picks">
                <TOPS />
              </Route>
              <Route exact path="/Podcasts">
                <Pod />
              </Route>
            </Switch>
          </div>
        </SongContext.Provider>
      </div>
    </Router>
  );
}

export default App;
