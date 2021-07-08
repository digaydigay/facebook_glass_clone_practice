import React from 'react'
import MyDayCard from "./mydaycards"
import UserRoom from "./userroom"
import PostItem from "./postitem"
import Img from "next/image"
import dp from "../pages/images/profile.jpg"
import mark from "../pages/images/mark.jpg"

export default function homeleft() {
  return (
    <div className="home_center">
      <div className="home_center_content">
        {/* My days */}
        <div className="my_day_cards_main">
          <div className="my_day_cards_container">
            <MyDayCard create="Create Story" dp={dp} />
            <MyDayCard user="Mark Zackerburg" dp={mark} />
            <MyDayCard user="Bill Gates" dp={mark} />
            <MyDayCard user="Elon Mask" dp={mark} />
            <MyDayCard user="Jeff Bezos" dp={mark} />
          </div>
          <div className="arrow_slide"><i className="fas fa-chevron-right"></i></div>
        </div>
        {/* Post section*/}
        <div className="user_post_container">
          <div className="top_level">
            <div className="dp">
              <Img layout="fill" src={dp} alt="dp" />
            </div>
            <button className="create_post">Whats On Your Mind?</button>
          </div>
          <div className="bottom_level">
            <div className="option"><span className="material-icons md-36"> video_camera_back</span><h6>Live Video</h6></div>
            <div className="option"><span className="material-icons md-36">collections</span><h6>Photo/ Video</h6></div>
            <div className="option"><span className="material-icons md-36">mood</span> <h6>Feeling/ Activity</h6></div>
          </div>
        </div>
        {/* create room section  */}
        <div className="room_container">
          <div className="room">
            <div className="create_room"><i className="fas fa-video"></i> <h5>Create Room</h5></div>
            <UserRoom dp={mark} />
            <UserRoom dp={mark} />
            <UserRoom dp={mark} />
            <UserRoom dp={mark} />
            <UserRoom dp={mark} />
            <UserRoom dp={mark} />
            <UserRoom dp={mark} />
            <UserRoom dp={mark} />
            <UserRoom dp={mark} />
          </div>
        </div>
        {/* Users post */}
        <div className="post_container">
          <div className="user_post_content">
            <PostItem user={"Mark Zackurberg"}
              description={"Happy July 4th! "}
              video={"https://www.facebook.com/plugins/video.php?height=347&href=https%3A%2F%2Fweb.facebook.com%2Fzuck%2Fvideos%2F958428441660961%2F&show_text=false&width=560&t=0"}
            />
            <PostItem user={"Mark Zackurberg"} update={"Update Profie Picture"} />
            <PostItem user={"Mark Zackurberg"}
              video={"https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Fzuck%2Fvideos%2F10113254118477121%2F&show_text=false&width=560&t=0"}
            />
            <PostItem big={true} user={"Mark Zackurberg"}
              video={"https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fweb.facebook.com%2Fzuck%2Fvideos%2F10112961446504101%2F&show_text=false&width=476&t=0"}
            />
          </div>
        </div>
        <div className="loading_post">Loading <span className="c1 fas fa-circle"></span> <span className="c2 fas fa-circle"></span> <span className="c3 fas fa-circle"></span></div>
      </div>
    </div>
  )
}
