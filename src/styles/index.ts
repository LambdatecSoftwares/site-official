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

.card {
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

.conteudo-texto-card {
  height: 90%;
  width: 50%;
}

.observacao-section {
  text-align: center;
  font-style: italic;
}

`;
