import styled from 'styled-components';

export const Container = styled.div`


header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  position: relative;
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
  margin-bottom: 10vh;
}

`;
