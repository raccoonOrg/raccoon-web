import React, { useState } from 'react';

const VideoPlayer: React.FC = () => {
  const [playRequested, setPlayRequested] = useState(false);
  const [audioIndex, setAudioIndex] = useState(0);

  const handlePlayRequest = () => {
    setPlayRequested(true);
  };

  const handleDoubleClick = () => {
    setAudioIndex(prevIndex => (prevIndex + 1) % audioFiles.length);
  };

  // Array of audio files
  const audioFiles = [
    'getlucky.mp3',
    'whatislove.mp3',
    'heyya.mp3',
    'partyrock.mp3',
    'rasputin.mp3',
    'shboom.mp3',
    'uptownfunk.mp3',
    'virtualinsanity.mp3',
    'wakemeup.mp3',
    'wiisports.mp3',
    'afterparty.mp3',
    'allmyfellas.mp3',
    'summer.mp3',
    'onemoretime.mp3',
    'entersandman.mp3',
    'feelgoodinc.mp3',
    'funkytown.mp3'
  ];

  // Function to get the current audio file
  const getCurrentAudioFile = () => {
    return audioFiles[audioIndex];
  };

  return (
    <div 
      style={{ 
        width: '100%', 
        height: '100vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#000', 
        position: 'relative' 
      }}
      onDoubleClick={handleDoubleClick}
    >
      {!playRequested && (
        <div style={{ position: 'absolute', zIndex: 1, cursor: 'pointer' }} onClick={handlePlayRequest}>
          <h1 style={{ color: '#fff', fontSize: '24px' }}>Click to Play</h1>
        </div>
      )}
      {playRequested && (
        <React.Fragment>
          <video style={{ width: '100%', height: 'auto' }} autoPlay loop muted>
            <source src="/raccoon.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <audio src={`/audio/${getCurrentAudioFile()}`} autoPlay loop />
        </React.Fragment>
      )}
    </div>
  );
};

export default VideoPlayer;