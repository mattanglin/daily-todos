import { CSSObject } from '@emotion/core';
import { Theme } from 'theme';

export default (theme: Theme): CSSObject => ({
  position: 'relative',

  '& input': {
    position: 'relative',
    border: 'none',
    borderRadius: 'none',
    font: 'inherit',
    backgroundColor: 'inherit',
    color: 'inherit',
    textAlign: 'center',
    boxSizing: 'border-box',
    borderBottom: '1px solid rgba(255,255,255, 0.25)',
    transform: 'translate(0, 1px)',

    '&:focus': {
      outline: 'none',
      borderColor: 'rgba(255,255,255,0.75)',
    },
  }
});
