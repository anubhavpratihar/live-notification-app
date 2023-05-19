import React, { useState } from 'react';
import Heart from "./heart.png";
import comment from "./chat.png";
import share from "./send.png";
import info from "./info.png";
import heartfilled from "./heartfilled.png";

const Card = ({ post, socket, user }) => {
  const [liked, setLiked] = useState(false);

  const handleNotification = (type) => {
    setLiked(true);
    socket.emit("sendNotification", {
      senderName: user,
      recieverName: post.username,
      type,
    });
  };

  return (
    <div className="card">
      <div className="info">
        <img src={post.userImg} alt="User" className="userImg" />
        <span>{post.fullname}</span>
      </div>
      <img src={post.postImg} alt="Post" className="postImg" />
      <div className="interactions">
        {liked ? (
          <>
            <img src={heartfilled} alt="Like button" className="card_icons" />
            <img src={comment} alt="Comment button" className="card_icons" />
            <img src={share} alt="Share button" className="card_icons" />
            <img src={info} alt="Info button" className="card_icons" />
          </>
        ) : (
          <>
            <img
              src={Heart}
              alt="Like button"
              className="card_icons"
              onClick={() => handleNotification(1)}
            />
            <img
              src={comment}
              alt="Comment button"
              className="card_icons"
              onClick={() => handleNotification(2)}
            />
            <img
              src={share}
              alt="Share button"
              className="card_icons"
              onClick={() => handleNotification(3)}
            />
            <img src={info} alt="Info button" className="card_icons" />
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
