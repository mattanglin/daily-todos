import { CSSObject } from '@emotion/core';
import { Theme } from 'theme';

export default (theme: Theme): CSSObject => ({
  position: 'relative',
  backgroundColor: '#ffffff',
  border: `1px solid ${theme.palette.primary}`,
  borderRadius: 4,
  color: theme.palette.primary,
  padding: theme.padding.global * 2,
  fontWeight: 'bold',
});
