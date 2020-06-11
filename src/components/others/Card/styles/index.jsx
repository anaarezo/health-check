import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${props => props.theme.fontFamily};
    color: ${props => (props.darkColor ? '#444444' : '#ffffff')};
  }
`

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #444444;
`;


// position: relative;
//     display: -ms-flexbox;
//     display: flex;
//     -ms-flex-direction: column;
//     flex-direction: column;
//     min-width: 0;
//     word-wrap: break-word;
//     background-color: #fff;
//     background-clip: border-box;
//     border: 1px solid rgba(0,0,0,.125);
//     border-radius: .25rem;