import React from "react"
import { withRouter } from 'storybook-addon-react-router-v6';
import StyleLoader from "../src/styleLoader";
import { Store } from "../src/store"
export const decorators = [withRouter, (Story) => <Store><StyleLoader /><Story /></Store>];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
