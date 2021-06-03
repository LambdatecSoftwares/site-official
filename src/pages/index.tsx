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
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" 
        rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <header>
        <video src="/bg-space.mp4" autoPlay loop muted/>
        <LogoGlitch />
        <Typical
        steps={["BEYOND", 1000, " WAY BEYOND YOUR MIND", 5000]}
        loop={Infinity}
        wrapper="h3"
        className="titulo-header"
      />
        <CustomButton href="#sec1"/>
      </header>

      <section>
        <p id="sec1"></p>
        <h1 className="titulo-section">LAMBDA PACK</h1>
        <p className="subtitulo-section">Seu projeto desenvolvido e funcionando com força total e sem preocupação!</p>
        <div className="container-cards">
          <div className="card">
            
          </div>
        </div>
      </section>

      
      <section>
      <h1 className="titulo-section">THE POWER OF MIND</h1>
        <p className="subtitulo-section">Trabalhamos com as mais atuais ferramentas e tecnologias do mercado, tais como:</p>
      </section>

      
      <section>
      <h1 className="titulo-section">THE MIND CONTROL</h1>
        <p className="subtitulo-section">Suporte, monitoramento e consultoria LambdaTec para você ir mais longe com performance e segurança.</p>
      </section>

      <footer>
         <video src="/bg-space.mp4" autoPlay loop muted/>
         <img src="/astronaut-footer.svg" alt="astronauta" className="logo-astronaut-footer"/>
         <img src="/lambda-footer.png" alt="logo-lambda" className="logo-lambda-footer"/>
     
      </footer>

    </Container>
    
  )
}
