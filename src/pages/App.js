import data from '../data.js'
import React from 'react' 
import MusicWrapper from '../component/Track';
import '../assets/styles/App.css';


function App() {
  return(
    <div className='App'>
      <div className='container'>
        <MusicWrapper title={data.album.name} url={data.album.images[0].url} artists={data.album.artists[0].name}/>
      </div>
    </div>
  );
}

export default App;