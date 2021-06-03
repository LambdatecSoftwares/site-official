import Head from 'next/head'
import {Container} from '../styles/index'
import LogoGlitch from '../components/LogoGlitch'


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
      </header>

      <main>
        
      </main>

    </Container>
    
  )
}
