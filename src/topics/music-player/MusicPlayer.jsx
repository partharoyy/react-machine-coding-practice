import { useEffect, useRef, useState } from 'react';
import './MusicPlayer.css';

const tracks = [
  {
    title: 'Track 1',
    source: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    image: 'https://i.pinimg.com/originals/13/04/c2/1304c21b242f729ee3e8792e411465d7.jpg',
  },
  {
    title: 'Track 2',
    source: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    image:
      'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/colorful-sky-cloud-cd-cover-music-design-template-a116bc2d5aa000ac0dbebe2e8a43c821_screen.jpg?ts=1640356346',
  },
];

function MusicPlayer() {
  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songProgress, setSongProgress] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setSongProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isPlaying]);

  function handlePlayPause() {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying((prev) => !prev);
  }

  function handleSkipSong(direction) {
    if (direction === 'backward') {
      setCurrentSong((prevTrack) => (prevTrack + 1) % tracks.length);
    } else if (direction === 'forward') {
      setCurrentSong((prevTrack) => (prevTrack - 1 + tracks.length) % tracks.length);
    }

    setSongProgress(0);
  }

  return (
    <div className='music-container'>
      <h1>Music Player</h1>
      <div className='music-title'>{tracks[currentSong].title}</div>
      <img src={tracks[currentSong].image} alt={tracks[currentSong].title} className='music-label' />
      <audio ref={audioRef} src={tracks[currentSong].source} />
      <div className='music-progress'>
        <div style={{ width: `${songProgress}%`, background: isPlaying ? '#3498db' : '#a43636', height: '15px' }}></div>
      </div>
      <div className='button-container'>
        <button onClick={() => handleSkipSong('backward')}>Backward</button>
        <button onClick={handlePlayPause}>Play/Pause</button>
        <button onClick={() => handleSkipSong('forward')}>Forward</button>
      </div>
    </div>
  );
}

export default MusicPlayer;
