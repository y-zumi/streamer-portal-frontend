import React from 'react'
import youtubeIcon from './images/youtube-icon.png'

const StreamingSignItem: React.FC = () => {
    return (
        <div>
            <img src={youtubeIcon} />
            <h1>配信中</h1>
        </div>
    )
}

export default StreamingSignItem
