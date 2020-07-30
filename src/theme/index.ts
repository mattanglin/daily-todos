// This is where we define our applications theme to be provided to all components...
import { height } from './height'
import { mediaQuery } from './mediaQuery';
import { padding } from './padding';
import { width } from './width';
import { zIndex } from './zIndex';

const theme = {
  height,
  mediaQuery,
  padding,
  width,
  zIndex,
}

export type Theme = typeof theme;

export default theme;
