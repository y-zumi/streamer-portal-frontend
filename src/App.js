import React from 'react';
import './App.css';
import {StreamingSignItem, StreamingMedia} from './StreamingSignItem/StreamingSignItem.tsx';

function App() {
  return (
    <div className="App">
        <StreamingSignItem media={StreamingMedia.youtube} isStreaming={true} />
        <StreamingSignItem media={StreamingMedia.twitch} isStreaming={false} />
        <StreamingSignItem media={StreamingMedia.niconico} isStreaming={false} />
    </div>
  );
}

export default App;
