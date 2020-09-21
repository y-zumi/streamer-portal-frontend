import React from 'react';
import './App.css';
import GlobalHeader from './GlobalHeader/GlobalHeader.tsx';
import {TwitterTimelineEmbed} from 'react-twitter-embed'
import {StreamingSignItem, StreamingMedia} from './StreamingSignItem/StreamingSignItem.tsx';


function App() {
  return (
    <div className="App">
        <GlobalHeader />
        <div id='twitterContainer'>
          <TwitterTimelineEmbed
              sourceType="profile"
              screenName="unkochan1234567"
              options={{height: 1000, width: 250}}
          />
        </div>
        <h2 id='title'>加藤純一さんの配信</h2>
        <StreamingSignItem media={StreamingMedia.youtube} isStreaming={true} />
        <StreamingSignItem media={StreamingMedia.twitch} isStreaming={false} />
        <StreamingSignItem media={StreamingMedia.niconico} isStreaming={false} />
    </div>
  );
}

export default App;
