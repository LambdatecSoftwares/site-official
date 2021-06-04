import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  button { 
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #ffffff;
    border: 1px solid #ffffff;
    padding: 20px;
    font-size: 30px;
    background-color: transparent;
    border-radius: 50px;
    cursor: pointer;
    transition: .3s ease-in-out;
  }

  a {
    text-decoration: none;
  }

  button:hover {
    transition: .3s ease-in-out;
    background-color: #350647;
  }

  .container-button-contato {
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: blue;
  }

  .icone-button {
    font-size: 40px;
  }

`;
