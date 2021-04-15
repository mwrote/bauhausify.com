import { css } from 'styled-components'
import { getCategoryColor } from '../base'

export default css`
  html,
  body {
    width: 100%;
    height: 100%;
    font-family: ${props => props.theme.typo.baseFont};
    font-size: ${props => props.theme.typo.baseSize}px;
    color: ${props => props.theme.colors.dark};
    white-space: initial;
    line-height: 1.15;
    min-width: 320px;
  }

  body {
    background-color: ${props => props.theme.colors.bg};
    line-height: 1.7;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 1.2rem;
    margin-bottom: 0.625rem;
    font-weight: bold;
    line-height: 1.4;
  }

  h1,
  h2 {
    font-size: 1.4em;
    line-height: 1.8em;
  }

  h3,
  h4,
  h5,
  h6 {
    font-size: 1rem;
  }

  ol,
  ul {
    padding-left: 1.7rem;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.dark};

    &:hover {
      color: ${props => props.theme.colors.link};
    }
  }

  hr {
    border-color: ${props => props.theme.colors.lightBorder};
    border: none;
    color: ${props => props.theme.colors.lightBorder};
    border-bottom: 1px solid ${props => props.theme.colors.lightBorder};
  }

  table {
    border: 1px solid ${props => props.theme.colors.lightBorder};

    tr {
      border-bottom: 1px solid ${props => props.theme.colors.lightBorder};

      & > th:first-child,
      & > td:first-child {
        padding-left: ${props => props.theme.metrics.baseMargin};
      }
    }

    th,
    td {
      padding-bottom: ${props => props.theme.metrics.baseMargin};
      padding-left: 0px;
      padding-right: ${props => props.theme.metrics.baseMargin};
      padding-top: ${props => props.theme.metrics.baseMargin};
    }
  }

  blockquote {
    padding: ${props => props.theme.metrics.baseMargin};
    position: relative;
    margin-left: ${props => props.theme.metrics.wideMargin};
    margin-right: ${props => props.theme.metrics.wideMargin};
    background-color: #fafafa;

    border-left: 3px double ${props => props.theme.colors.strongLight};
    font-family: Georgia, Times, 'Times New Roman', serif;
    font-style: italic;
    padding: 1em 2em;
    position: relative;
    transition: 0.2s border ease-in-out;
    z-index: 0;

    & > *:first-child {
      margin-top: 0;
    }

    & > *:last-child {
      margin-bottom: 0;
    }
  }

  b,
  strong {
    font-size: 0.95em;
  }

  a[target='_blank']:not(:empty)::after {
    ${tw`ml-1 mr-1`}
    content: "";
    display: inline-block;
    position: relative;
    background-image: url('data:image/svg+xml;charset=utf8,%3Csvg%20width%3D%2210%22%20height%3D%229%22%20viewBox%3D%220%200%2010%209%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%2210%22%20height%3D%229%22%20fill%3D%22white%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M4%201H2C1.44772%201%201%201.44772%201%202V7C1%207.55228%201.44772%208%202%208H8C8.55229%208%209%207.55228%209%207V6H10V7C10%208.10457%209.10457%209%208%209H2C0.89543%209%200%208.10457%200%207V2C0%200.89543%200.895431%200%202%200H4V1Z%22%20fill%3D%22black%22%2F%3E%3Crect%20x%3D%226%22%20width%3D%224%22%20height%3D%221%22%20fill%3D%22black%22%2F%3E%3Crect%20x%3D%226%22%20width%3D%224%22%20height%3D%221%22%20fill%3D%22black%22%2F%3E%3Crect%20x%3D%229%22%20width%3D%221%22%20height%3D%224%22%20fill%3D%22black%22%2F%3E%3Crect%20x%3D%229%22%20width%3D%221%22%20height%3D%224%22%20fill%3D%22black%22%2F%3E%3Crect%20x%3D%228.91418%22%20y%3D%220.378677%22%20width%3D%221%22%20height%3D%225.78022%22%20transform%3D%22rotate(45%208.91418%200.378677)%22%20fill%3D%22black%22%2F%3E%3C%2Fsvg%3E');
    width: 10px;
    height: 9px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
`
