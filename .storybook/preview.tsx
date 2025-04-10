import React from "react";
import type { Preview } from "@storybook/react";
import { GlobalStyle } from "../src/styles/global";
import StyledComponentsRegistry from "../src/lib/styledComponentsRegistry";

const preview: Preview = {
  decorators: [
    (Story) => (
      <StyledComponentsRegistry>
        <GlobalStyle />
        <Story />
      </StyledComponentsRegistry>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
