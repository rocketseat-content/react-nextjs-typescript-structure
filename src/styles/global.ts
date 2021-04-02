import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  };

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  };
`
