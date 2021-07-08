import React from 'react'
import MyDayCard from "./mydaycards"
import UserRoom from "./userroom"
import PostItem from "./postitem"


export default function homeleft() {
  return (
    <div className="home_center">
      <div className="home_center_content">
        {/* My days */}
        <div className="my_day_cards_main">
          <div className="my_day_cards_container">
            <MyDayCard create="Create Story" poster={true} />
            <MyDayCard user="Mark Zackerburg" poster={true} />
            <MyDayCard user="Bill Gates" poster={true} />
            <MyDayCard user="Elon Mask" poster={true} />
            <MyDayCard user="Jeff Bezos" poster={true} />
          </div>
          <div className="arrow_slide"><i className="fas fa-chevron-right"></i></div>
        </div>
        {/* Post section*/}
        <div className="user_post_container">
          <div className="top_level">
            <div className="dp">
              {/* <Img layout="fill" src="/images/profile.JPG" alt="dp" /> */}
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
            <UserRoom />
            <UserRoom />
            <UserRoom />
            <UserRoom />
            <UserRoom />
            <UserRoom />
          </div>
        </div>
        {/* Users post */}
        <div className="post_container">
          <div className="user_post_content">
            <PostItem user={"Mark Zackurberg"}
              description={"Happy July 4th! "}
              video={"https://www.facebook.com/plugins/video.php?height=347&href=https%3A%2F%2Fweb.facebook.com%2Fzuck%2Fvideos%2F958428441660961%2F&show_text=false&width=560&t=0"}
            />
            <PostItem user={"Mark Zackurberg"} update={"Update Profie Picture"}
            />

            <PostItem user={"Mark Zackurberg"} update={"Update Profie Picture"}
              description={"Some good news reading: teams at the Chan Zuckerberg Initiative and Biohub have been building IDseq -- an open source infectious disease genetic sequencing tool that can serve as an early warning system around the world. We were building it when Covid hit, and in Cambodia it was used to confirm the country's first case and inform their prevention efforts."}
            />
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
