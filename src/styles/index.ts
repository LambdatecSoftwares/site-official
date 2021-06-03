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
  width: 300px;
  pointer-events: none;
}

.logo-lambda-footer {
  position: absolute;
  width: 70px;
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
  height: 100vh;
}

section:nth-child(odd) {
  background-color: #fff;
}

section:nth-child(even) {
  background-color: #F2F2F2;
}

.titulo-section {
  font-weight: 500;
  font-size: 4rem;
  width: 100%;
  text-align: center;
}

.subtitulo-section {
  font-weight: 300;
  font-size: 1.2rem;
  font-family: 'Roboto', sans-serif;
  width: 100%;
  text-align: center;
}

`;
