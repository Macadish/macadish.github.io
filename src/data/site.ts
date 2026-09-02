/**
 * Single source of truth for contact details and the form endpoint.
 * Change them here, not in the pages.
 */

export const site = {
  /** Formspree POST URL. Empty string disables every form on the site. */
  formEndpoint: 'https://formspree.io/f/xjyvrgno',
  /** Not rendered anywhere — the contact form is the public channel.
   *  Shown only as a fallback if formEndpoint is emptied. */
  email: 'jon@macadish.com',
  instagram: 'macadish',
} as const;

export const instagramUrl = `https://www.instagram.com/${site.instagram}/`;
