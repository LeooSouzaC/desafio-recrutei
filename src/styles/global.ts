'use client'

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  background-color: #e7edf0;
}

::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-thumb {
  background-color: #bbb;
  border-radius: 4px;
}
::-webkit-scrollbar-track {
  background: transparent;
}

`;
