import { CSSObject } from '@emotion/core';
import { Theme } from 'theme';

export default (theme: Theme): CSSObject => ({
  margin: 'auto',
  maxWidth: theme.mediaQuery.breakpoints.xl,
  padding: theme.padding.global,
  width: '100%',
});
