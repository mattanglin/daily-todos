import { CSSObject } from '@emotion/core';
import { Theme } from 'theme';

export default (theme: Theme): CSSObject => ({
  width: '100%',
  padding: theme.padding.global,
  background: theme.palette.brand,
  color: theme.palette.brandOffset,
  fontWeight: 'bold',
  lineHeight: 2,
  fontSize: 16,
  border: 0,
  borderRadius: 4,
  cursor: 'pointer',
  outline: 'none',
});
