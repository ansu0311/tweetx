import React, { useEffect, useState } from "react";
import "./UserTile.scss";

const UserTile = ({ card, index, detail, setDetail }) => {

    const [data,setData] = useState(card)

    const handleFollow = () =>{
        setData({...data, follow:(!data.follow)})
        let modifiedDetail = detail;
        modifiedDetail.splice(index, 0, data);
        setDetail(modifiedDetail)
    }

  return (
    <div>
          <div key={index} className="userContainer">
            <div className="userDetails">
              <div className="userDP">
                <img src={data.pics} alt="profile pic" />
              </div>
              <div className="userText">
                <div className="userName">{data.name}</div>
                <div className="userFollower">Following: {data.follower}</div>
              </div>
            </div>
            <button onClick={() => handleFollow()} className={`followBtn ${(detail[index].follow)?"":"Following"}`}>{(detail[index].follow)?"Following":"Follow"}</button>
          </div>
    </div>
  );
};

export default UserTile;
