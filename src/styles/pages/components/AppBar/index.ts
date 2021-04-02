import styled from 'styled-components'

export const AppBarContainer = styled.div`
  position: fixed;
  z-index: 1000;
  left: 1rem;
  top: calc(50% - 180px);

  & > .navigation {
    position: relative;
    width: 80px;
    height: 360px;
    background: #fff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    transition: 0.5s;
  }

  & > .navigation ul {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  & > .navigation ul li {
    position: relative;
    list-style: none;
    width: 100%;
  }

  & > .navigation ul li:hover {
    background: ${props => props.theme.colors.primary.hover};
  }

  & > .navigation ul li a {
    position: relative;
    display: block;
    width: 100%;
    display: flex;
    text-decoration: none;
    color: ${props => props.theme.colors.primary.color};
    font-weight: 600;
  }

  & > .navigation ul li a .icon {
    position: relative;
    display: block;
    min-width: 80px;
    height: 60px;
    line-height: 60px;
    text-align: center;
  }

  & > .navigation ul li a .icon .fa {
    font-size: 24px;
  }

  & > .navigation ul li a .tittle {
    position: relative;
    display: block;
    height: 60px;
    line-height: 60px;
    white-space: nowrap;
  }

  & .toggle {
    position: absolute;
    top: calc(50% - 20px);
    right: -20px;

    height: 40px;
    width: 40px;
    background: ${props => props.theme.colors.primary.toggle};
    cursor: pointer;

    border: 5px solid ${props => props.theme.colors.background};
    border-radius: 50%;
  }

  & .toggle::before {
    content: '\f054';
    font-family: fontAwesome;
    position: absolute;

    width: 100%;
    height: 100%;

    line-height: 30px;
    text-align: center;
    font-size: 16px;
    color: ${props => props.theme.colors.background};
  }
  & .toggle.active::before {
    content: '\f053';
  }
  & > .navigation.active {
    width: 300px;
  }
`
