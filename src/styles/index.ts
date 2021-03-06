import styled from 'styled-components';

export const Container = styled.div`

@media (min-width: 1025px) and (max-width: 100000px) {

header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  position: relative;
}

.container-icones-rede-social {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: absolute;
  top: 0;
  right: 0;
  width: 30%;
  padding: 20px;
}

.icone-redes-sociais {
  font-size: 30px;
  color: #ffffff;
  cursor: pointer;
  transition: .3s ease-in-out;
}

.icone-redes-sociais:hover {
  transition: .3s ease-in-out;
  color: #BABABA;
}

footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  width: 100%;
  position: relative;
  pointer-events: none;
}

.logo-astronaut-footer {
  position: absolute;
  right:0;
  top: -100px;
  width: 350px;
  pointer-events: none;
}

.logo-lambda-footer {
  position: absolute;
  height: 75px;
  width: 80px;
}

video {
    width: 100%;
    height: 100%;
    z-index: -1;
    background-position: fixed;
    pointer-events: none;
    background-repeat: repeat;
    object-fit: fill;
  }

  .titulo-header {
    position: absolute;
    color: white;
    left: 0;
    bottom: 20%;
    width: 103%;
    text-align: center;
    font-size: 20px;
    letter-spacing: 15px;
  }

section {
  padding-top: 5vh;
  padding-bottom: 5vh;
}

section:nth-child(odd) {
  background-color: #ffffff;
}

section:nth-child(even) {
  background-color: #F2F2F2;
}

.sec-contato {
  height: 50vh;
  background-image: linear-gradient(#A729D8, #8A05BE);
  -webkit-box-shadow: 8px -2px 10px 8px rgba(0,0,0,0.3);  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow: 8px -2px 10px 8px rgba(0,0,0,0.3);  /* Firefox 3.5 - 3.6 */
  box-shadow: 8px -2px 10px 8px rgba(0,0,0,0.3);  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
}

.titulo-section {
  font-weight: 500;
  font-size: 4rem;
  font-family: 'Open Sans', sans-serif;
  width: 100%;
  text-align: center;
}

.subtitulo-section {
  font-weight: 300;
  font-size: 1.2rem;
  font-family: 'Open Sans', sans-serif;
  width: 100%;
  text-align: center;
  margin-bottom: 5vh;
}

.container-cards {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin-left: 10%;
}

.container-cards-tecnologias {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 90vw;
  margin-left: 5vw;
}

.card-pack {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 410px;
  height: 200px;
  border-radius: 8px;
  border: 1px solid #BABABA;
  background-color: #ffffff;
  margin-bottom: 5vh;
  box-sizing: border-box;
}

.card-sup {
  width: 80%;
  padding: 2vw;
  border-radius: 8px;
  border: 1px solid #BABABA;
  background-color: #ffffff;
  margin-bottom: 5vh;
  box-sizing: border-box;
}

.titulo-card-sup {
  font-size: 30px;
  letter-spacing: 30px;
  font-weight: 400;
  font-family: 'Open Sans', sans-serif;
}

.titulo-card-contato {
  width: 100%;
  font-size: 30px;
  font-weight: 400;
  letter-spacing: 5px;
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  color: #ffffff;
}

.subtitulo-card-contato {
  width: 100%;
  margin-bottom: 10vh;
  font-size: 20px;
  font-weight: 300;
  text-align: center;
  color: #ffffff;
}

.card-tec {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40vw;
  height: 30vh;
  margin: 2.5vw;
  box-sizing: border-box;
}

.titulo-card-tec {
  font-family: 'Open Sans', sans-serif;
  font-size: 30px;
  font-weight: 400;
  letter-spacing: 15px;
}

.subtitulo-card-tec {
  font-family: 'Open Sans', sans-serif;
}

.card-tec-icon {
  font-size: 150px;
  margin-right: 1vw;
}

.container-text-tec {
  width: 90%;
  box-sizing: border-box;
}

.numero-card {
  font-family: 'MeticulaOutline', sans-serif;
  font-size: 150px;
}

.separador-card {
  background-color: #BABABA;
  color: #BABABA;
  width: 1px;
  height: 160px;
}

.separador-card-v2 {
  background-color: #BABABA;
  color: #BABABA;
  height: 1px;
  margin-top: 1vh;
  margin-bottom: 1vh;
}

.conteudo-texto-card {
  height: 90%;
  width: 50%;
}

.observacao-section {
  text-align: center;
  font-style: italic;
}

.observacao-section-footer {
  text-align: center;
  font-style: italic;
  margin-bottom: 5vh;
}
}

@media (min-width: 0px) and (max-width: 1024px) {

header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 105vh;
  width: 100%;
  position: relative;
}

.container-icones-rede-social {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: absolute;
  top: 10px;
  right: 0;
  width: 100%;
}

.icone-redes-sociais {
  font-size: 30px;
  color: #ffffff;
  cursor: pointer;
  transition: .3s ease-in-out;
}

.icone-redes-sociais:hover {
  transition: .3s ease-in-out;
  color: #BABABA;
}

footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 30vh;
  width: 100%;
  position: relative;
  pointer-events: none;
}

.logo-astronaut-footer {
 display: none;
}

.logo-lambda-footer {
  position: absolute;
  height: 75px;
  width: 80px;
}

video {
    width: 100%;
    height: 100%;
    z-index: -1;
    background-position: fixed;
    pointer-events: none;
    background-repeat: repeat;
    object-fit: fill;
  }

  .titulo-header {
    position: absolute;
    color: white;
    left: 0;
    bottom: 20%;
    width: 100%;
    text-align: center;
    font-size: 12px;
    letter-spacing: 3px;
  }

section {
  padding-top: 5vh;
  padding-bottom: 5vh;
  width: 100%;
}

section:nth-child(odd) {
  background-color: #ffffff;
}

section:nth-child(even) {
  background-color: #F2F2F2;
}

.sec-contato {
  background-image: linear-gradient(#A729D8, #8A05BE);
}

.titulo-section {
  font-weight: 600;
  font-size: 25px;
  letter-spacing: 10px;
  font-family: 'Open Sans', sans-serif;
  width: 100%;
  text-align: center;
}

.subtitulo-section {
  font-weight: 300;
  font-size: 15px;
  font-family: 'Open Sans', sans-serif;
  width: 100%;
  text-align: center;
  margin-bottom: 5vh;
}

.container-cards {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 95%;
  margin-left: 2.5%;
}

.card-pack {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #BABABA;
  background-color: #ffffff;
  margin-bottom: 5vh;
  box-sizing: border-box;
}
.container-cards-tecnologias {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 95%;
}


.card-sup {
  width: 90%;
  padding: 2vw;
  border-radius: 8px;
  border: 1px solid #BABABA;
  background-color: #ffffff;
  margin-bottom: 5vh;
  box-sizing: border-box;
}

.titulo-card-sup {
  font-size: 20px;
  letter-spacing: 5px;
  font-weight: 400;
  font-family: 'Open Sans', sans-serif;
}

.titulo-card-contato {
  width: 100%;
  font-size: 30px;
  font-weight: 400;
  letter-spacing: 5px;
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  color: #ffffff;
}

.subtitulo-card-contato {
  width: 100%;
  margin-bottom: 5vh;
  font-size: 20px;
  font-weight: 300;
  text-align: center;
  color: #ffffff;
}

.card-tec {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 5vh;
}

.titulo-card-tec {
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  letter-spacing: 5px;
  font-weight: 600;
}

.subtitulo-card-tec {
  font-family: 'Open Sans', sans-serif;
}

.card-tec-icon {
  font-size: 150px;
}

.container-text-tec {
  width: 100%;
  box-sizing: border-box;
}

.numero-card {
  font-family: 'MeticulaOutline', sans-serif;
  font-size: 150px;
}

.separador-card {
  background-color: #BABABA;
  color: #BABABA;
  width: 1px;
  height: 160px;
}

.separador-card-v2 {
  background-color: #BABABA;
  color: #BABABA;
  height: 1px;
  margin-top: 1vh;
  margin-bottom: 1vh;
}

.conteudo-texto-card {
  width: 50%;
}

.observacao-section {
  text-align: center;
  font-style: italic;
}

.observacao-section-footer {
  text-align: center;
  font-style: italic;
  margin-bottom: 5vh;
}
}

`;
