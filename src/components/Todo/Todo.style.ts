import { CSSObject } from '@emotion/core';
import { Theme } from 'theme';

export default (theme: Theme): CSSObject => ({

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
  },

  '& .inner.view': {
    cursor: 'pointer',
  },

  '& .manage .actions': {
    display: 'flex',
    justifyContent: 'flex-end',

    '& button': {
      padding: 0,
      width: 32,
      height: 32,
      paddingLeft: theme.padding.global,
      paddingRight: theme.padding.global,
      marginLeft: theme.padding.global,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
  }
});

export const deleteBtn = (theme: Theme): CSSObject => ({
  backgroundColor: theme.palette.danger,
  color: theme.palette.dangerOffset,
});

export const resetBtn = (theme: Theme): CSSObject => ({
  backgroundColor: theme.palette.warning,
  color: theme.palette.warningOffset,
});
