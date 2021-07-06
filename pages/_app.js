import '../styles/globals.css'
import Layout from "./layout/layout"
import "../styles/header.css"
import "../styles/bgoverlay.css"
import "../styles/homebody.css"
import "../styles/homeright.css"
import "../styles/homeleft.css"
import "../styles/homecenter.css"
import { InputContextProvider } from "../Api/contextinput"

function MyApp({ Component, pageProps }) {
  return (

    <InputContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </InputContextProvider >

  )
}

export default MyApp
