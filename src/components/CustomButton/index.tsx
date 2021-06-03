import React from 'react';
import { Container } from './styles';
import { IoIosArrowDown } from 'react-icons/io'

const CustomButton = () => {
  return(
      <Container> 
          <button><IoIosArrowDown /></button>
      </Container>
  );
}

export default CustomButton;