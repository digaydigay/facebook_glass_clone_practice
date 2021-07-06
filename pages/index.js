import Head from 'next/head'


import HomeLeft from "../components/homeleft"
import HomeCenter from "../components/homecenter"
import HomeRight from "../components/homeright"

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="facebook clone" content="facebook" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fork-awesome@1.1.7/css/fork-awesome.min.css" integrity="sha256-gsmEoJAws/Kd3CjuOQzLie5Q3yshhvmo7YNtBG7aaEY=" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet" />
      </Head>
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
