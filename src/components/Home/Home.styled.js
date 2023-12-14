import styled from 'styled-components';
import {Button} from 'antd';

export const SectionWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  background-color: #ceedef;
  height: 100%;
  width: 100%;
  justify-content: space-between;

  .main_photo {
    width: 51%;
  }
`;

export const StyledText = styled.div`
  padding-top: 70px;
  color: black;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  padding-right: 50px;
  padding-left: 50px;

  h1 {
    font-size: 40px;
    color: black;
  }
`
export const StyledButton = styled(Button)`
  background: transparent;
  border-radius: 20px;
  border: 2px solid black;
  color: black;
  margin-top: 20px;
  width: 250px;
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
`