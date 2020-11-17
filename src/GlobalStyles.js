import React from "react";
import { Global, css } from "@emotion/core";

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
          margin: 0;
        }
        :root {
          // --page-background-color: #262524;
          --font-archivoblack: "ArchivoBlack-Regular";
          --font-roboto: "Roboto-Regular";
          --font-robotolight: "Roboto-Light";
        }
        html {

          font-family: var(--font-roboto);
          height: 100vh;
          width: 100vw;
          background-color: var(--page-background-color);
          color: var(--font-color-white);
        }
        h1 {
          font-family: var(--font-archivoblack);
          color: var(--font-color-orange);
          font-size: 1.875rem;
        }
        h2 {
          font-family: var(--font-archivoblack);
          color: var(--font-color-white);
          font-size: 1.25rem;
        }

      `}
    />
  );
};

export default GlobalStyles;
