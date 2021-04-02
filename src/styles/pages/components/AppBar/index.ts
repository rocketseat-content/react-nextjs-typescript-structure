import styled from 'styled-components'

export const AppBarContainer = styled.div`
  position: relative;

  & div.navigation {
    position: relative;
    width: 80px;
    height: 360px;
    background: #fff;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    transition: 0.5s;
    -webkit-transition: 0.5s;
    -moz-transition: 0.5s;
    -ms-transition: 0.5s;
    -o-transition: 0.5s;
  }
  & div.navigation.active {
    width: 300px;
  }

  & div.navigation ul {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
`
