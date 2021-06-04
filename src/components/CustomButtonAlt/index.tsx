import React, { ReactElement } from 'react';
import { Container } from './styles';
import { IconType } from 'react-icons/lib';

interface IProps {
  href: string;
  text?: string;
  icone?: ReactElement<IconType>;
}

const CustomButton = (props: IProps) => {
  
  const { 
    href,
    text,
    icone
  } = props
  
  return(
      <Container> 
          <a href={href}>
            <button>{text}
            {icone}
            </button>
          </a>
      </Container>
  );
}

export default CustomButton;