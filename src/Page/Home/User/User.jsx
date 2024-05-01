import React, { useEffect, useState } from 'react'
import "./User.scss"
import UserTile from '../../../Components/UserTile/UserTile'

const User = ({detail,setDetail}) => {

  return (
    <div className='UserContainer'>
      {detail.map((card, index) => {
        return (
        <UserTile card={card} index={index} detail={detail} setDetail={setDetail}/>)})}
    </div>
  )
}

export default User