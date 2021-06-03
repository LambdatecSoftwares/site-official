import React from 'react';
import { Container } from './styles';

// interface IProps {
//   height: number;
//   width: number;
// }

const LogoGlitch = () => {
  
  // const { 
  //   height, 
  //   width 
  // } = props;

  return(
      <Container>
          <img src="/glitch-logo.gif" alt="logo-glitch"/>
      </Container>
  );
}

export default LogoGlitch;