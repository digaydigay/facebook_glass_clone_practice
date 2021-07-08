import HomeLeft from "../components/homeleft"
import HomeCenter from "../components/homecenter"
import HomeRight from "../components/homeright"

export default function Home() {
  return (
    <>

      <div className="home_body">
        {/* <div className="home_body_content"> */}
        {/* Home Left */}
        <HomeLeft />
        {/* Home Center */}
        <HomeCenter />
        {/* Home Right */}
        <HomeRight />
        {/* </div> */}
      </div>

    </>
  )
}
