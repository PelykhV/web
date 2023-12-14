import styled from 'styled-components';


export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
  flex-wrap: wrap;
`;

export const PriceSection = styled.div`
  display: flex; 
  align-items: center;
  width: 75%;
  margin-left: 90px;
`;

export const VerticalLine = styled.hr`
  width: 100%;
  border-bottom: none;
  border-top: 2px solid #e1e1e1;
`;

export const StyledError = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15%;
  margin-top: 5%;
`