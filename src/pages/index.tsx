import Head from 'next/head'
import {Container} from '../styles/index'
import LogoGlitch from '../components/LogoGlitch'
import Typical from "react-typical"
import CustomButton from '../components/CustomButton'
import {GrReactjs} from 'react-icons/gr'
import {ImEye} from 'react-icons/im'
import {ImGoogle} from 'react-icons/im'
import {VscScreenFull} from 'react-icons/vsc'


export default function Index() {
  return (
    <Container>

      <Head>
        <title>Way beyond your mind</title>
        <meta name="description" content="Sistemas, aplicativos e soluções empresariais na área de tecnologia" />
        <link 
        rel="preconnect" 
        href="https://fonts.gstatic.com"
        />
        <link 
        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap" 
        rel="stylesheet"
        />
         <link
            rel="preload"
            href="/fonts/meticula-outline.ttf"
            as="font"
            crossOrigin=""
          />
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
            <h1 className="numero-card">1</h1>
            <hr className="separador-card" />
            <div className="conteudo-texto-card">
              <h4>LEVANTAMENTO DE REQUISITOS</h4>
              <p>Nossa equipe de especialistas analisa 
                seu projeto e encontra pontos de melhoria 
                para aumento de performance e redução de custos</p>
            </div>
          </div>
          
          <div className="card">
            <h1 className="numero-card">2</h1>
            <hr className="separador-card" />
            <div className="conteudo-texto-card">
            <h4>PLATAFORMAS E TECNOLOGIAS</h4>
              <p>As plataformas e as tecnologias serão escolhidas 
                para atender exatamente suas demandas.</p>
            </div>
          </div>

          <div className="card">
            <h1 className="numero-card">3</h1>
            <hr className="separador-card" />
            <div className="conteudo-texto-card">
            <h4>IDENTIDADE VISUAL</h4>
              <p>Nossos profissionais irão analisar sua
                 marca para que tenha um engajamento maior no mercado digital.</p>
            </div>
          </div>
          
          <div className="card">
            <h1 className="numero-card">4</h1>
            <hr className="separador-card" />
          <div className="conteudo-texto-card">
          <h4>VERSÃO DE TESTES</h4>
              <p>Nossa equipe irá realizar todos os tipos de testes
                 necessários para que haja NENHUMA chance de erro 
                 na implantação do seu projeto.</p>
            </div>
          </div>

        <p className="observacao-section">O processo completo de implementação do Lambda Pack tem duração 
          prevista de 45 dias, mas pode variar de acordo com a complexidade 
          do projeto ou estrutura necessária. Em casos de urgência, a LambdaTec 
          disponibilizará uma equipe de elite para lançar seu projeto no menor prazo possível.</p>
        </div>
      
      </section>

      
      <section>
      <h1 className="titulo-section">THE POWER OF MIND</h1>
        <p className="subtitulo-section">Trabalhamos com as mais atuais ferramentas e tecnologias do mercado, tais como:</p>
      
        <div className="container-cards-tecnologias">
          
          <div className="card-tec">
          <GrReactjs className="card-tec-icon"/>
          <div className="container-text-tec">
          <h4 className="titulo-card-tec">REACT</h4>
              <p className="subtitulo-card-tec">Todos os nossos projetos são desenvolvidos ReactJS e/ou ReactNative, 
                o que proporciona maior agilidade no processamento e aplicações bem 
                organizadas e escaláveis, ou seja, de fácil manutenção, mesmo que cresça 
                em complexidade e tamanho.</p>
          </div>
          </div>
          
          <div className="card-tec">
          <ImEye className="card-tec-icon"/>
          <div className="container-text-tec">
          <h4 className="titulo-card-tec">ID VISUAL</h4>
              <p className="subtitulo-card-tec">A equipe de designers da LambdaTec irão analisar sua marca,
               seu nicho de mercado e a personalidade de seu público alvo, para que finalmente possam elaborar
                sua identidade visual, paleta de cores mais adequadas, etc...</p>
            </div>
          </div>
          
          <div className="card-tec">
          <ImGoogle className="card-tec-icon"/>
          <div className="container-text-tec">
          <h4 className="titulo-card-tec">SEO</h4>
              <p className="subtitulo-card-tec">SEO é a sigla para Search Engine Optimization, que significa 
              otimização para mecanismos de busca, ou otimização de sites. Nós iremos usar os robôs de pesquisa
              do Google e outros motores de busca para te dar vantagem e sua empresa irá aparecer nas primeiras 
              páginas das pesquisas.</p>
            </div>
          </div>
          
          <div className="card-tec">
          <VscScreenFull className="card-tec-icon"/>
          <div className="container-text-tec">
          <h4 className="titulo-card-tec">RESPONSIVE</h4>
              <p className="subtitulo-card-tec">Um site responsivo é aquele cuja disposição dos elementos e o 
              conteúdo se adaptam de acordo com o tamanho da tela do usuário. O processo de criação de sistemas 
              é configurado para que sua exibição seja otimizada em qualquer tela, desde smartphones até grandes 
              monitores.</p>
            </div>
          </div>

        </div>
     
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
