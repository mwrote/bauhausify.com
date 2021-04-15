import { css } from 'styled-components'
import Color from 'color'

export default css`
  .gatsby-highlight {
    position: relative;
    background-color: ${props =>
      Color(props.theme.colors.coding)
        .desaturate(0.5)
        .lighten(3.45)
        .hex()};
    margin: 0.5em 0;
    border: 1px solid
      ${props =>
        Color(props.theme.colors.coding)
          .desaturate(0.5)
          .lighten(2.9)
          .hex()};

    // scrollbar
    pre::-webkit-scrollbar {
      height: 0.5rem;
      width: 0.5rem;
    }
    pre::-webkit-scrollbar-track {
      background-color: ${props =>
        Color(props.theme.colors.coding)
          .desaturate(0.8)
          .lighten(3)
          .hex()};
      border: none;
    }
    pre::-webkit-scrollbar-thumb {
      background-color: ${props =>
        Color(props.theme.colors.coding)
          .desaturate(0.3)
          .lighten(0.25)
          .hex()};
      border-radius: 0;
      box-shadow: none;
    }

    pre[class*='language-'] {
      margin: 0;
      background-color: transparent;
      border: none;
      padding-left: 0;
      padding-right: 0;
      padding-left: ${props => props.theme.metrics.wideMargin};
      padding-right: ${props => props.theme.metrics.wideMargin};
      cursor: text;
    }
    pre[class*='language-js'] {
      content: 'js';
    }
  }

  .gatsby-remark-code-titles {
    font-size: 12px;
    font-weight: bold;
    padding: 2px 8px;
    color: ${props => props.theme.colors.light};
    background-color: ${props =>
      Color(props.theme.colors.coding)
        .desaturate(0.3)
        .lighten(0.25)
        .hex()};
    z-index: 10;

    + .gatsby-highlight {
      margin-top: 0;
    }
  }

  .embed-codepen {
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.05);
  }

  .emoji-icon {
    display: inline-flex;
    width: 1.2rem;
    justify-content: center;
    align-items: center;
  }

  .gatsby-remark-autolink-headers-icon {
    padding-right: 0;
  }
`
