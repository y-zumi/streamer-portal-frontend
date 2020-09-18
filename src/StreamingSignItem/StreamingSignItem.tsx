import React from 'react'
import youtubeIcon from '../images/youtube-icon.png'
import './StreamingSignItem.css'

const StreamingSignItem: React.FC = () => {
    return (
        <div className='SteamingSignItem'>
            <img src={youtubeIcon} />
            <p>配信中</p>
        </div>
    )
}

export default StreamingSignItem
