import styled from 'styled-components';

export const LinkingWrapper = styled.div`
  .nav {
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 75px;
  }

  .nav-element {
    display: inline-block;
    padding: 5px 5px 10px 5px;
    position: relative;
    font-weight: bold;
    margin: 10px 30px;
    font-size: 24px;
    border: 2px solid #d1c3c3;
    border-radius: 15px;
    width: 8%;
    
    a {
      color: black;
      text-decoration: none;
      transition: all 0.3s;

      &:hover {
        font-size: 26px;
        color: #222292;
      }
    }

    .active {
      font-size: 26px;
      color: #222292;
    }
  }
`