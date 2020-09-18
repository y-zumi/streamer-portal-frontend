import React from 'react';
import './App.css';
import {StreamingSignItem, StreamingMedia} from './StreamingSignItem/StreamingSignItem.tsx';

function App() {
  return (
    <div className="App">
        <h2>加藤純一さんの配信</h2>
        <StreamingSignItem media={StreamingMedia.youtube} isStreaming={true} />
        <StreamingSignItem media={StreamingMedia.twitch} isStreaming={false} />
        <StreamingSignItem media={StreamingMedia.niconico} isStreaming={false} />
    </div>
  );
}

export default App;
