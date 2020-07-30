import React from 'react';
import { Global, css } from '@emotion/core';

const styles = {
  html: {
    minHeight: '100%',
  },
  'html, body, #root, .app': {
    // height: '100%',
    display: 'flex',
    flex: 1,
  },
  body: {
    margin: 0,
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
  '*': {
    boxSizing: 'border-box' as 'border-box',
  },
  '.app': {
    display: 'flex',
    justifyContent: 'center',
  },

  // TODO: Global heading styles
  h1: {
    margin: 0,
    fontSize: 28
  }
};

const GlobalStyle = () => <Global styles={css(styles)} />;

export default GlobalStyle;
