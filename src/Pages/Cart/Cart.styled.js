import styled from 'styled-components';


export const CartStyled = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

export const ImageStyled = styled.img `
  width: 300px;
  border-radius: 25px;
`

export const DataInfo = styled.div `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #e1e1e1;
  border-radius: 5%;
  padding: 20px;
  margin-top: 10px;
  h4 {
    margin-left: 40px;
  }
  h3 {
    margin-left: 40px;
  }
`

export const DataButtonStyled = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 40px;
  p {
    padding: 20px;
  }
`

export const VerticalLine = styled.hr`
  width: 99%;
  border-bottom: none;
  border-top: 2px solid #e1e1e1;
`;

export const CartButtonStyled = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`