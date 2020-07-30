export const pluralize = (
  count: number,
  noun: string,
  ending: string = 's',
  alt: string = ''
) => `${count} ${noun}${count !== 1 ? ending : alt}`;
