import React from 'react'
import Img from "next/image"
import mark from "../pages/images/mark.jpg"
export default function postitem({ user, video, update, description, big }) {
  return (
    <div className="post_item">

      {/* post header starts*/}
      <div className="post_header">

        <div className="user_post_info">
          <div className="dp">
            {/* <Img layout="fill" src="/images/profile.JPG" alt="dp" /> */}
          </div>
          <div className="post_user_time">
            <h5 className="user">{user}</h5>
            <p className="time">6h</p>
          </div>
          {update &&
            <div className="profile_update">
              <h6>{update}</h6>
            </div>
          }
        </div>
        <div className="post_menu">
          <i className="fas fa-ellipsis-h"></i>
        </div>
      </div>
      {/* post header ends*/}

      {/* post description starts*/}

      <div className="post_description">
        {description && description}
      </div>

      {/* post description endss*/}

      {/* post body starts */}
      {
        !video ?
          <div className="img_container">
            <Img layout="fill" src={mark} alt="dp" />
          </div>
          :
          <div className={!big ? "iframe_wrapper" : "iframe_wrapper iframe_wrapper_big"}>
            <iframe src={video} allowFullScreen={true} ></iframe>
          </div>
      }
      {/* post body ends */}

      {/* post react section start */}
      <div className="user_acts_action">

        <div className="users_acts">
          <div className="reacts">
            <>
              <i className="fas fa-thumbs-up"></i>
              <i className="fas fa-heart"></i>
            </>
            <a href="#">1k</a>
          </div>
          <div className="comment_share">
            <div className="comments">
              <a href="#">500 Comments</a>
            </div>
            <div className="shares">
              <a href="">15k Shares</a>
            </div>
          </div>
        </div>

        <div className="react_btns">
          <div className="like">
            <i className="fas fa-thumbs-up"></i>{" "}Like
          </div>
          <div className="comment_share_btns">
            <div className="comment">
              <i className="fas fa-comment"></i>{" "}Comment
            </div>
            <div className="share">
              <i className="fas fa-share"></i>{" "}Share
            </div>
          </div>
        </div>

        {/* post react section ends */}
      </div>


    </div>
  )
}
