import { Global, css } from '@emotion/react'

const globalStyles = css`
  body {
    margin: 0;
    padding: 0;
    font-family: "Inter", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

const GlobalStyles = () => <Global styles={globalStyles} />

export default GlobalStyles