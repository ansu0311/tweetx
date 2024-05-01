import React from 'react'
import './Feed.scss'
import FeedTile from '../../../Components/FeedTile/FeedTile'

const Feed = ({TestFeed}) => {

  return (
  <div className='FeedContainer'>
    <div className="FeedBtn button">Write</div>
  {TestFeed.map((FeedCard,index) => {
    return(<FeedTile key={index} FeedCard={FeedCard} />)
  })}
  </div>
  )
}

export default Feed