import Head from 'next/head'
import {Container} from '../styles/index'
import LogoGlitch from '../components/LogoGlitch'
import Typical from "react-typical"
import CustomButton from '../components/CustomButton'
import CustomButtonAlt from '../components/CustomButtonAlt'
import {GrReactjs} from 'react-icons/gr'
import {ImEye} from 'react-icons/im'
import {ImGoogle} from 'react-icons/im'
import {AiOutlineFullscreen} from 'react-icons/ai'
import { IoIosArrowDown } from 'react-icons/io'
import { IoIosRocket } from 'react-icons/io'
import {GoMarkGithub} from 'react-icons/go'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {ImWhatsapp} from 'react-icons/im'

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
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
        </link>
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
        <CustomButton 
        href="#sec1"
        icone= {<IoIosArrowDown />}
        />
        <div className="container-icones-rede-social">
          <a href="https://github.com/LambdatecSoftwares" target="_blank">
            <GoMarkGithub className="icone-redes-sociais" title="Nosso repositório de projetos no GitHub"/>
          </a>
          <a href="#">
            <FaLinkedinIn className="icone-redes-sociais" title="Confira nosso perfil no LinkedIn"/>
          </a>
          <a href="https://www.facebook.com/LambdaTecSorocaba" target="_blank">
            <FaFacebookF className="icone-redes-sociais" title="Curta nossa página no Facebook"/>
          </a>
          <a href="https://api.whatsapp.com/send?phone=5515988309658&text=Ol%C3%A1!%20Estou%20vindo%20do%20site%20da%20Lambda%20e%20gostaria%20de%20ter%20mais%20informa%C3%A7%C3%B5es%20e%20detalhes%20sobre%20os%20projetos." target="_blank">
            <ImWhatsapp className="icone-redes-sociais" title="Fale com a gente no WhatsApp"/>
          </a>
        </div>

      </header>

      <section>
       
        <p id="sec1"></p>
        <h1 className="titulo-section">LAMBDA PACK</h1>
        <p className="subtitulo-section">Seu projeto desenvolvido e funcionando com força total e sem preocupação!</p>
        
        <div className="container-cards">
          
          <div className="card-pack">
            <h1 className="numero-card">1</h1>
            <hr className="separador-card" />
            <div className="conteudo-texto-card">
              <h4>LEVANTAMENTO DE REQUISITOS</h4>
              <p>Nossa equipe de especialistas analisa 
                seu projeto e encontra pontos de melhoria 
                para aumento de performance e redução de custos</p>
            </div>
          </div>
          
          <div className="card-pack">
            <h1 className="numero-card">2</h1>
            <hr className="separador-card" />
            <div className="conteudo-texto-card">
            <h4>PLATAFORMAS E TECNOLOGIAS</h4>
              <p>As plataformas e as tecnologias serão escolhidas 
                para atender exatamente suas demandas.</p>
            </div>
          </div>

          <div className="card-pack">
            <h1 className="numero-card">3</h1>
            <hr className="separador-card" />
            <div className="conteudo-texto-card">
            <h4>IDENTIDADE VISUAL</h4>
              <p>Nossos profissionais irão analisar sua
                 marca para que tenha um engajamento maior no mercado digital.</p>
            </div>
          </div>
          
          <div className="card-pack">
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
          <AiOutlineFullscreen className="card-tec-icon"/>
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
       
        <div className="container-cards">
        
        <div className="card-sup">
            <h4 className="titulo-card-sup">SUPORTE</h4>
            <hr className="separador-card-v2" />
            <p className="subtitulo-card-sup">Conte com nossa equipe de especialistas sempre que precisar atráves de canais de atendimento rápidos 
              e diretos como Telegram, Messenger ou WhatsApp. Você sempre terá contato com quem realmente entende do 
              assunto, sem chatbots ou mensagens automáticas.</p>
        </div>

        <div className="card-sup">
            <h4 className="titulo-card-sup">MONITORAMENTO</h4>
            <hr className="separador-card-v2" />
            <p className="subtitulo-card-sup">Sua infra-estrutura é monitorada sem intervalos 24 horas por dia, 7 dias 
            por semana, por profissionais especializados e prontos para tomar ações necessárias em casos de pico de 
            acessos, problemas de hardware ou software ou ataques. O monitoramento acontece de maneria pró-ativa, desse
            modo nossa equipe estará trabalhando na resolução de problemas mesmo antes do report.</p>
        </div>

        <div className="card-sup">
            <h4 className="titulo-card-sup">CONSULTORIA</h4>
            <hr className="separador-card-v2" />
            <p className="subtitulo-card-sup">Nossa equipe trabalha sempre de maneira pró-ativa procurando e sugerindo 
            novas soluções que otimizem os recursos e os resultados do seu projeto. Conte com a consultoria da LambdaTec 
            para fortaceler o presente e discutir o futuro da sua solução.</p>
        </div>

          <p className="observacao-section-footer">O gerenciamento da estrutra é realizado pela equipe da LambdaTec e, caso 
          solicitado, por profissionais de TI especializados dentro da empresa do cliente, para que o ambiente seja 
          mantido estável e seguro. As configurações e acessos nos servidores são otimizados para que sejam feitos 
          através de chamados.
          </p>
        </div>
      </section>

      <section className="sec-contato">
      <div className="container-cards">
        <h4 className="titulo-card-contato">FAÇA UM ORÇAMENTO E CONTRATE A LAMBDA</h4>
        <p className="subtitulo-card-contato">Nossa equipe entrará em contato por email ou telefone para coletar mais informações.</p>
      
        <CustomButtonAlt
        href="https://api.whatsapp.com/send?phone=5515988309658&text=Ol%C3%A1!%20Estou%20vindo%20do%20site%20da%20Lambda%20e%20gostaria%20de%20ter%20mais%20informa%C3%A7%C3%B5es%20e%20detalhes%20sobre%20os%20projetos." 
        text="Clique aqui"
        icone= {<IoIosRocket className="icone-button" />}    
        />

      </div>
      </section>

      <footer>
         <video src="/bg-space.mp4" autoPlay loop muted/>
         <img src="/astronaut-footer.svg" alt="astronauta" className="logo-astronaut-footer"/>
         <img src="/lambda-footer.png" alt="logo-lambda" className="logo-lambda-footer"/>
     
      </footer>

    </Container>
    
  )
}
