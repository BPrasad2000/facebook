import React from "react";
import "./Post.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendIcon from "@mui/icons-material/Send";
import ReplyIcon from "@mui/icons-material/Reply";

const Post = () => {
  return (
    <div className="Post">
      <div className="postContainer">
        <div className="postTop">
          <img src="/image/prasad.png" alt="" className="postImage" />
          <span className="postUserName">Buddhi Prasad</span>
          <span className="postTime">5 mins ago</span>
        </div>
        <div className="postCenter">
          <div className="postCaption">Hellow 😎...!</div>
          <img src="/image/prasad.png" alt="" className="postedImage" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="/image/like.png" alt="" className="reactionPic" />
            <img src="/image/love.png" alt="" className="reactionPic" />
            <img src="/image/haha.png" alt="" className="reactionPic" />
            <span className="likeCount">Kavindu and 225 other</span>
          </div>
          <div className="postBottomRight">
            <span className="commentCunt">20 comments</span>
          </div>
        </div>
      </div>
      <hr />
      <div className="postbtns">
        <div className="btn">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="btn">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="btn">
          <SendIcon />
          <p>Send</p>
        </div>
        <div className="btn">
          <ReplyIcon />
          <p>Share</p>
        </div>
      </div>
      <hr />
      <div className="Post">
      <div className="postContainer">
        <div className="postTop">
          <img src="/image/g2.jpg" alt="" className="postImage" />
          <span className="postUserName">Madusha</span>
          <span className="postTime">1 mins ago</span>
        </div>
        <div className="postCenter">
          <div className="postCaption">Travelling Sri Lanka😍</div>
          <img src="/image/g2.jpg" alt="" className="postedImage" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="/image/like.png" alt="" className="reactionPic" />
            <img src="/image/love.png" alt="" className="reactionPic" />
            <img src="/image/haha.png" alt="" className="reactionPic" />
            <span className="likeCount">prasad and 40 other</span>
          </div>
          <div className="postBottomRight">
            <span className="commentCunt">5 comments</span>
          </div>
        </div>
      </div>
      <hr />
      <div className="postbtns">
        <div className="btn">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="btn">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="btn">
          <SendIcon />
          <p>Send</p>
        </div>
        <div className="btn">
          <ReplyIcon />
          <p>Share</p>
        </div>
      </div>
      <hr />
    </div>
    </div>

    
  );
};

export default Post;
