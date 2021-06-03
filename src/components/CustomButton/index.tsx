import React from 'react';
import { Container } from './styles';
import { IoIosArrowDown } from 'react-icons/io'

interface IProps {
  href: string;
}

const CustomButton = (props: IProps) => {
  
  const { 
    href
  } = props
  
  return(
      <Container> 
          <a href={href}><button><IoIosArrowDown /></button></a>
      </Container>
  );
}

export default CustomButton;