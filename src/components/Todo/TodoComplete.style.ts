import { CSSObject } from '@emotion/core';
import { Theme } from 'theme';

export default (theme: Theme): CSSObject => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'flex-end',

  '& .icon': {
    fontSize: 28,
    marginLeft: theme.padding.global,
  },

  '& .check': {
    color: 'rgba(0,0,0, 0.25)',
    display: 'flex',
    alignItems: 'center',

    '&.complete': {
      color: theme.palette.success,
    },
  },

  '& .multiple': {
    display: 'flex',
    justifyContent: 'flex-end',
  },
});
