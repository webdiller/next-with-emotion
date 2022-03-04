import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";
import {
  blue,
  blueHover,
  lightBlue,
  lightBlueHover,
  black,
  blackHover,
} from "./colors";

export const globalStyles = (
  <Global
    styles={css`
      @font-face {
        font-family: "VerdanaDev";
        src: url("./fonts/Verdana/Verdana.woff2") format("woff2"),
          url("./fonts/Verdana/Verdana.woff") format("woff");
        font-weight: 400;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: "VerdanaDev";
        src: url("./fonts/Verdana/Verdana-Bold.woff2") format("woff2"),
          url("./fonts/Verdana/Verdana-Bold.woff") format("woff");
        font-weight: 700;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: "GeorgiaDev";
        src: url("./fonts/Georgia/Georgia.woff2") format("woff2"),
          url("./fonts/Georgia/Georgia.woff") format("woff"),
          url("./fonts/Georgia/Georgia.ttf") format("ttf");
        font-weight: 400;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: "GeorgiaDev";
        src: url("./fonts/Georgia/Georgia-Bold.woff2") format("woff2"),
          url("./fonts/Georgia/Georgia-Bold.woff") format("woff"),
          url("./fonts/Georgia/Georgia-Bold.ttf") format("ttf");
        font-weight: 700;
        font-style: normal;
        font-display: swap;
      }
      body {
        font-family: "VerdanaDev", "GeorgiaDev", sans-serif;
        height: 100%;
        line-height: 1.35;
        font-size: 18px;
        width: 100%;
        font-weight: 400;
        margin: 0;
        padding: 0;
      }
      p,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      a,
      input,
      input::placeholder,
      textarea,
      textarea::placeholder,
      button,
      span,
      div {
        line-height: inherit;
        font-family: inherit;
        font-size: inherit;
      }
      img {
        display: block;
        max-width: 100%;
      }
      input,
      textarea {
        padding-top: 0;
        padding-bottom: 0;
      }
      * {
        box-sizing: border-box;
      }
    `}
  />
);

export const Title = styled.p`
  font-size: 28px;
  font-family: Verdana, serif;
  color: #63552d;
  margin: 0;
`;
