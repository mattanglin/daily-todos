/**
 * Media queries for responsive design.
 * Breakpoints are setup for mobile first design.
 */
const breakpoints = {
  s: 576,
  m: 768,
  l: 992,
  xl: 1200,
};

export const mediaQuery = {
  breakpoints,
  s: `@media(min-width: ${breakpoints.s}px)`,
  m: `@media(min-width: ${breakpoints.m}px)`,
  l: `@media(min-width: ${breakpoints.l}px)`,
  xl: `@media(min-width: ${breakpoints.xl}px)`,
};
