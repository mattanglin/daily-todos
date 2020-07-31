import { CSSObject } from '@emotion/core';
import { Theme } from 'theme';

export default (theme: Theme): CSSObject => ({
  flex: 1,
  maxWidth: theme.mediaQuery.breakpoints.xl,
  position: 'relative',

  '& .header': {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: theme.height.header,
    zIndex: theme.zIndex.header,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.brand,
    color: theme.palette.brandText,
  },

  '& .navigation': {
    height: theme.height.footer,
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    zIndex: theme.zIndex.navigation,
    background: 'teal',
  },

  '& .main': {
    minHeight: '100%',
    position: 'relative',
    zIndex: theme.zIndex.main,

    paddingTop: theme.height.header,
    paddingBottom: theme.height.footer + 10,
  },

  // We move the nav to the left for large screens
  [theme.mediaQuery.m]: {
    display: 'flex',
    height: 'auto',

    '& .navigation': {
      marginTop: theme.height.header,
      position: 'relative',
      height: 'auto',
      maxWidth: 200,
    },

    '& .main': {
      flex: 1,
      height: 'auto'
    }

  }
});
