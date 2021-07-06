import React, { useState } from 'react'
import HomeLeftTopList from "./homelefttoplist"
import HomeLeftBottomList from "./homeleftbottomlist"


export default function Homeleft() {
  const [see, setSee] = useState(false)
  return (
    <div className="home_left">
      <div className="home_left_top_content">
        <ul>
          <HomeLeftTopList name='Jonathan Digay' />
          <HomeLeftTopList name='Friends' icon="fas fa-user-friends" />
          <HomeLeftTopList name='Pages' icon="fas fa-flag" />
          <HomeLeftTopList name='Jobs' icon="fas fa-briefcase" />
          <HomeLeftTopList name='Groups' icon="fas fa-users" />
          {
            see ?
              <>
                <HomeLeftTopList name='As Center' icon="fas fa-user-friends" />
                <HomeLeftTopList name='Ads Manager' icon="fas fa-flag" />
                <HomeLeftTopList name='Blood Donations' icon="fas fa-briefcase" />
                <HomeLeftTopList name='Campus' icon="fas fa-users" />
                <HomeLeftTopList name='Community Help' icon="fas fa-user-friends" />
                <HomeLeftTopList name='Emotional Health' icon="fas fa-flag" />
                <HomeLeftTopList name='Events' icon="fas fa-briefcase" />
                <HomeLeftTopList name='Favorites' icon="fas fa-users" />
              </>
              : null
          }
          {
            see ?
              <div className="see seemore" onClick={() => setSee(false)}>See Less</div>
              :
              <div className="see seemore" onClick={() => setSee(true)}>See More</div>
          }



        </ul>
      </div>
      <div className="home_left_bottom_content">
        <ul>
          <h5>Your Shortcuts</h5>
          <HomeLeftBottomList name='React Js Philippines' image={"https://scontent.fmnl6-1.fna.fbcdn.net/v/t1.6435-9/s960x960/64323817_436341810538961_2408392105094283264_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=825194&_nc_eui2=AeE_tdnEGYu_1nivBs6T6HhhSVLsw3dTfI5JUuzDd1N8jpjSOvGm1zmPYw1VaGb-RmMkozPkfVjOBjP8qHf-zqs9&_nc_ohc=BWyMZ2R84-wAX9pMu9-&_nc_ht=scontent.fmnl6-1.fna&tp=7&oh=a76c816b641eb119f352bd5e1c1e2ef5&oe=60E7590E"} />
          <HomeLeftBottomList name='Programming Philippines' image={"https://scontent.fmnl6-2.fna.fbcdn.net/v/t1.6435-9/s960x960/69950744_121533495886236_7172618044567453696_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=825194&_nc_eui2=AeHuO1BPSGsjHgPZFqaDaGNmj5yOepRIcpKPnI56lEhykjRXEGPctaEBM1VDDVhFFJKOGBh22pma-B1X_PX6e5lu&_nc_ohc=JA4cfuFgOykAX8__RHJ&tn=ozKrBFyh9EZ1oT4Q&_nc_ht=scontent.fmnl6-2.fna&tp=7&oh=f9c800505a24d10e1edfcabb04e33786&oe=60E74550"} />
          <HomeLeftBottomList name='Web App Devleloper Philippines' image={"https://scontent.fmnl6-1.fna.fbcdn.net/v/t1.6435-9/s960x960/101007468_10217161124355392_4024185301797699584_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=825194&_nc_eui2=AeGDaN7yDs6lwO4ibki39sGtaZCwpYLo_4dpkLClguj_h1D1Gc-41M3L05ueygG87S9TaRg2z4L9M6TIqHOE_qg8&_nc_ohc=fZsrmcf3BKQAX_jTM1J&_nc_ht=scontent.fmnl6-1.fna&tp=7&oh=805175f2c388aa9d1c748547b4015462&oe=60E8DB2C"} />
          <HomeLeftBottomList name='freeCodeCamp Manila' image={"https://scontent.fmnl6-2.fna.fbcdn.net/v/t1.18169-9/18199241_10210563063370531_9192704129359910881_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=825194&_nc_eui2=AeHQdkYVDQCj1HLsq7vLaaTuGl66QnVoMfEaXrpCdWgx8RrBfjcdFshlwFKnUsUlU8dw_qXWLx-fjHsWfA-ktg4k&_nc_ohc=jyqgj634YpUAX_726Pd&_nc_ht=scontent.fmnl6-2.fna&oh=a0e15c6c4d0713b0978418452439cf17&oe=60E8B303"} />
          <HomeLeftBottomList name='brad Traversy' image={"https://scontent.fmnl6-2.fna.fbcdn.net/v/t1.18169-9/15622129_1314192251964730_7714205027277088392_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=19026a&_nc_eui2=AeEkS3Myu5EdS7M9COOr1FV1I9n3TNyCj4Yj2fdM3IKPhm8UkNu6GfL2OHnkKeTMqAj9G4wrrRrswWfYwKeXnbfl&_nc_ohc=KDhmbANcwHQAX-Sppj8&_nc_ht=scontent.fmnl6-2.fna&oh=b6ea3ce7e3a6c5cfaa3cc9cc51914a12&oe=60E8F208"} />
          <HomeLeftBottomList name='Net Ninja' image={"https://scontent.fmnl6-2.fna.fbcdn.net/v/t1.6435-9/s960x960/109398129_1518071421698100_1835627423617270267_n.png?_nc_cat=104&ccb=1-3&_nc_sid=e3f864&_nc_eui2=AeFdTSMPhyD0AovvC3Gf-v__1yLuQew2FiDXIu5B7DYWIH2-zCleUMB92E5uRk8Is5RpRbF4ThGO0iRHwIeU0sra&_nc_ohc=3b8h29DV6I8AX-OPcus&_nc_ht=scontent.fmnl6-2.fna&tp=30&oh=e4674794ca1775a56f574237be6759b7&oe=60E77835"} />
        </ul>
      </div>
      <div className="home_left_footer" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div className="home_left_footer_content">
          <ul >
            <li>Privacy</li>
            <li>Terms</li>
            <li>Advertising</li>
            <li>Ad choice</li>
          </ul>
          <ul >
            <li>Cookies</li>
            <li>More</li>
            <li>Facebook 2021</li>
          </ul>
        </div>

      </div>
    </div>
  )
}
