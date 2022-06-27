import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
import VideoContainer from './VideoContainer';
import {VideoProvider, VideoStateContext} from './AppProvider';
import { StaticVideosArray } from './StaticVideosArray';
import { useContext } from 'react';
import { useEffect } from 'react';


function App() {

  const{setShowVideoList}=useContext(VideoStateContext);

  useEffect(() => {
    setShowVideoList(StaticVideosArray);
  }, []);




  return (
    <div className="App">
     <h>Inside App</h>
     <div>
            <SearchBar/>
            <VideoContainer/>
     </div>
    </div>
  );
}

export default App;
