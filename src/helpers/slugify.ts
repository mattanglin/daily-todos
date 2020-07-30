/**
 * slugify function to convert title strings to url slugs
 * NOTE: These are not unique
 */
export const slugify = (title: string) => {
  // convert to lowercase
  return title.toLowerCase()
    // replace all spaces with dashes
    .replace(/[\s]+/g, '-')
    // remove all other non alphnumerics
    .replace(/[^a-z0-9-]/g, '');

};
