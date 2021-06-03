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
          <video src="/glitch-logo.mp4" autoPlay loop muted/>
      </Container>
  );
}

export default LogoGlitch;