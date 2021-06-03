import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    height: 50vh;
    width: 30vw;
  video {
    width: 100%;
    height: 100%;
    pointer-events: none;
    object-fit: cover;
  }
`;
