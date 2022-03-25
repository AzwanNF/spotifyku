import '../../assets/styles/index.css';

function MusicWrapper({title, url, artists}) {
    return(
        <div className="Music">
            <div className="music-img">
                <img src={url}/>
            </div>
            <div className="music-info">
                <p className="music-title">{title}</p>
                <p className="music-artist">{artists}</p>
            </div>
            <div>
                <button className="btn-select">select</button>
            </div>
        </div>
    );
}

export default MusicWrapper;