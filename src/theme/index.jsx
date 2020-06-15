import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #eeeeee;
    font-family: ${props => props.theme.fontFamily};
    color: ${props => (props.darkColor ? '#444444' : '#ffffff')};
  }
  button[type='button']{
    border-radius: 28px;
    display: flex;
  }
`

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #444444;
`;