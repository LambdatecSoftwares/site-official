import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  button { 
    width: 250px;
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
    border: 1px solid #350647;
    transform: scale(1.2);
    -webkit-box-shadow: 2px 2px 5px 8px rgba(0,0,0,0.2);  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow: 2px 2px 5px 8px rgba(0,0,0,0.2);  /* Firefox 3.5 - 3.6 */
  box-shadow: 2px 2px 5px 8px rgba(0,0,0,0.2);  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
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
