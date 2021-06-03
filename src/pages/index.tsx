import Head from 'next/head'
import {Container} from '../styles/index'
import LogoGlitch from '../components/LogoGlitch'
import Typical from "react-typical"
import CustomButton from '../components/CustomButton'

export default function Home() {
  return (
    <Container>

      <Head>
        <title>Way beyond your mind</title>
        <meta name="description" content="Sistemas, aplicativos e soluções empresariais na área de tecnologia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <header>
        <video src="/bg-space.mp4" autoPlay loop muted/>
        <LogoGlitch />
        <Typical
        steps={["BEYOND", 1000, " WAY BEYOND YOUR MIND...", 5000]}
        loop={Infinity}
        wrapper="h1"
        className="titulo-header"
      />
      <CustomButton />
      </header>

      <main>
        
      </main>

    </Container>
    
  )
}
