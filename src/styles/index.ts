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
    bottom: 20%;
    width: 100%;
    text-align: center;
    font-size: 20px;
    letter-spacing: 15px;
  }

section {
  height: 100vh;
}

section:nth-child(odd) {
  background-color: #fff;
}

section:nth-child(even) {
  background-color: #F2F2F2;
}



`;
