import React from 'react'
import youtubeIcon from '../images/youtube-icon.png'
import twitchIcon from '../images/twitch-icon.png'
import niconicoIcon from '../images/niconico-icon.png'
import './StreamingSignItem.css'

declare namespace StreamingMedia {
    export function image(media: StreamingMedia)
}

enum StreamingMedia {
    youtube,
    twitch,
    niconico
}

function image(media: StreamingMedia) {
    switch (media) {
        case StreamingMedia.youtube:
            return youtubeIcon
        case StreamingMedia.twitch:
            return twitchIcon
        case StreamingMedia.niconico:
            return niconicoIcon
    }
}

const StreamingSignItem: React.FC<Props> = ({media, isStreaming}) => {
    return (
        <div className={`SteamingSignItem ${isStreaming ? 'Streaming' : ''}`}>
            <img src={image(media)} />
            <p>{isStreaming ? "配信中" : "未配信"}</p>
        </div>
    )
}

interface Props {
    media: StreamingMedia
    isStreaming: boolean
}

export { StreamingSignItem, StreamingMedia }
