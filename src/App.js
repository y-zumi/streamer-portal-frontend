import React, { useState, useEffect } from 'react';
import './App.css';
import GlobalHeader from './GlobalHeader/GlobalHeader.tsx';
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import { StreamingSignItem, StreamingMedia } from './StreamingSignItem/StreamingSignItem.tsx';
import axios from 'axios';


function App() {
  const [youtubeLive, setYoutubeLive] = useState(false)
  const [twitchLive, setTwitchLive] = useState(false)
  const [niconicoLive, setNiconicoLive] = useState(false)

  useEffect(() => {
    const fn = async () => {
      await axios.post(
        "https://streamer-portal-backend-wt4p7y7x6q-an.a.run.app/live_statuses",
        {
          headers: { 'Content-Type': 'application/json' },
          data: { streamer_id: "UCx1nAvtVDIsaGmCMSe8ofsQ" }
        },
      ).then((res) => {
        console.log(res.data.live_statuses);
        res.data.live_statuses.map(d => {
          console.log(d)
          switch (d.platform_type) {
            case "youtube":
              setYoutubeLive(d.is_live)
            case "twitch":
              setTwitchLive(d.is_live)
            case "niconico":
              setNiconicoLive(d.is_live)
          }
        })
      })

    }
    fn()
  }, [])

  return (
    <div className="App">
      <GlobalHeader />
      <div id='twitterContainer'>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="unkochan1234567"
          options={{ height: 1000, width: 250 }}
        />
      </div>
      <h2 id='title'>加藤純一さんの配信</h2>
      <StreamingSignItem media={StreamingMedia.youtube} isStreaming={youtubeLive} />
      <StreamingSignItem media={StreamingMedia.twitch} isStreaming={twitchLive} />
      <StreamingSignItem media={StreamingMedia.niconico} isStreaming={niconicoLive} />
    </div>
  );
}

export default App;
