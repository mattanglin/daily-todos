import { CSSObject } from '@emotion/core';
import { Theme } from 'theme';

export default (theme: Theme): CSSObject => ({
  position: 'relative',

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