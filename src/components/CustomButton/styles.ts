import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 88%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  button { 
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: #BABABA;
    border: 1px solid #BABABA;
    font-size: 20px;
    padding: 10px;
    background-color: transparent;
    border-radius: 50%;
    cursor: pointer;
    transition: .3s ease-in-out;
  }

  button:hover {
    transition: .3s ease-in-out;
    color: #000000;
    background-color: #BABABA;
  }

`;
