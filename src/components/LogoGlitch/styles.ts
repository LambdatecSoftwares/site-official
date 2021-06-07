import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   position: absolute; 
   height: 80vh;
   width: 100%;
    top: 0;

    img {
    width: 95%;
    height: 100%;
    pointer-events: none;
    object-fit: cover;
  }
`;
