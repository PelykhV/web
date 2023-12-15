import styled from 'styled-components';
import Icon from '@ant-design/icons';

export const StyledHeader = styled.div`
  background-color: #000; 
  padding: 16px 0 4px;
  display: flex;
  justify-content: space-around;
  width: 100%;
  table-layout: fixed;
  border-spacing: 10px;
  color: #FFD700; 
`;

export const IconsWrapper = styled.div`
    display: flex;
    padding: 7px;
    > span {
        margin: 0 12px;
    }
`;

export const IconBase = styled(Icon)`
    font-size: 24px;
    color: ${({color}) => color};
    margin-left: 15px;
    display: flex;
    justify-content: space-around;
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;

    p {
        font-size: 1.5rem;
        margin-left: -5px;
    }
`;

export const YellowText = styled.span`
  color: #FFD700;
`;
