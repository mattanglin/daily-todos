import { CSSObject } from '@emotion/core';
import { Theme } from 'theme';

export default (theme: Theme): CSSObject => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'flex-end',

  '& .icon': {
    fontSize: 28,
  },

  '& .check': {
    color: 'rgba(0,0,0, 0.25)',

    '&.complete': {
      color: theme.palette.success,
    },
  },
});
