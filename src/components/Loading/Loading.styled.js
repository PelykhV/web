import styled from 'styled-components';

export const LoadingStyled = styled.div `
  position: relative;
  -webkit-box-reflect: below -20px 
  linear-gradient(transparent, rgba(0, 0, 0, .2));
  display: flex;
  justify-content: center;
  margin-top: 9%;
  
  span {
    position: relative;
    display: inline-block;
    font-size: 4rem;
    text-transform: uppercase;
    animation: waviy 1s infinite;
    animation-delay: calc(.1s * var(--i));
  }
  
  @keyframes waviy {
    0%,
    40%,
    100% {
      transform: translateY(0);
    }
    
    20% {
      transform: translateY(-20px);
    }
  }
`