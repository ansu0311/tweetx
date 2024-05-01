import React from "react";
import "./FeedTile.scss";
import calculateTimeDifference from "../TimeDif/TimeDif";

const FeedTile = ({ FeedCard }) => {
  const inputDateTime = FeedCard.time;

  return (
    <div className="feedShell">
    <div className="feedContainer">
      <div className="feedDetails">
        <div className="DP_Profile">
        <div className="feedDP">
          <img src={FeedCard.pics} alt="profile pic" />
        </div>
        <div className="feedName">{FeedCard.name}</div>
        </div>
        <div className="feedTime">{calculateTimeDifference(inputDateTime)}</div>
      </div>
      <div className="feedText">{FeedCard.feed}</div>
    </div>
    <div className="feedCircle"></div>
    </div>
  );
};

export default FeedTile;
