import data from '../data.js'
import React from 'react' 
import MusicWrapper from '../component/Track';
import '../assets/styles/App.css';


function App() {
  return(
    <div className='App'>
      <div className='container'>
        {data.map(item => (
          <MusicWrapper key={item.id} url={item.album.images[0].url} title={item.name} artists={item.artists[0].name}/>
        ))};
      </div>
    </div>
  );
}

export default App;