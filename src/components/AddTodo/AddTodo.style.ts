import { CSSObject } from '@emotion/core';
import { Theme } from 'theme';

export default (theme: Theme): CSSObject => ({
  position: 'relative',
  marginTop: theme.padding.global,
});

export const addBtnStyle = (theme: Theme): CSSObject => ({
  backgroundColor: theme.palette.success,
  color: theme.palette.successOffset,
});