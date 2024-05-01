import React from 'react'
import './Profile.scss'

const Profile = ({TestFeed, detail}) => {

  let data = detail[0]

  return (
    <div className='profileShell'>
      <div className="profileContainer">
            <div className="profileDetails">
              <div className="profileDP">
                <img src={data.pics} alt="profile pic" />
              </div>
              <div className="profileText">
                <div className="profileName">{data.name}</div>
                <div className="profileFollower">
                  <span>Post: {data.follower}</span>
                  <span>Follower: {data.follower}</span>
                  <span>Following: {data.follower}</span>
                </div>
              </div>
            </div>
          </div>
  </div>
  )
}

export default Profile