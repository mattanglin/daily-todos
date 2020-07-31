import { CSSObject } from '@emotion/core';
import { Theme } from 'theme';

export default (theme: Theme): CSSObject => ({
  position: 'relative',

  '& .inner': {
    position: 'relative',
    backgroundColor: '#ffffff',
    border: `1px solid ${theme.palette.primary}`,
    borderRadius: 4,
    color: theme.palette.primary,
    padding: theme.padding.global,
    paddingLeft: theme.padding.global * 2,
    paddingRight: theme.padding.global * 2,
    minHeight: theme.padding.global * 8,
    fontWeight: 'bold',
    marginBottom: theme.padding.global,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',

    '& input': {
      border: 'none',
      color: 'inherit',
      font: 'inherit',
      fontSize: 'inherit',
      fontWeight: 'inherit',
      boxSizing: 'border-box',
      outline: 'none',
      padding: 0,
      borderBottom: '1px solid rgba(0,0,0,.25)',
      transfrom: 'translate(0, 1px)',
    },
  },

  '& .actions': {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridColumnGap: theme.padding.global,
    marginTop: theme.padding.global,
  }
});

export const cancelBtnStyle = (theme: Theme): CSSObject => ({
  backgroundColor: theme.palette.danger,
  color: theme.palette.dangerOffset,
});