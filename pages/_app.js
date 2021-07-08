import '../styles/globals.css'
import Layout from "./layout/layout"
import "../styles/header.css"
import "../styles/bgoverlay.css"
import "../styles/homebody.css"
import "../styles/homeright.css"
import "../styles/homeleft.css"
import "../styles/homecenter.css"
import { InputContextProvider } from "../Api/contextinput"
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="facebook clone" content="facebook" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" referrerPolicy="no-referrer" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fork-awesome@1.1.7/css/fork-awesome.min.css" integrity="sha256-gsmEoJAws/Kd3CjuOQzLie5Q3yshhvmo7YNtBG7aaEY=" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet" />
      </Head>
      <InputContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </InputContextProvider >
    </>
  )
}

export default MyApp
