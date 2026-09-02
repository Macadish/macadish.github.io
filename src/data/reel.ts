/**
 * Photos other people have taken, and screenshots of reviews.
 *
 * The section renders only when this array has entries, so it stays off the
 * site until there is real material. Drop images into src/assets/reel/,
 * import them here, and always credit the person who took the photo.
 */

export interface ReelItem {
  image: ImageMetadata;
  alt: string;
  /** Who took it. Shown under the image. */
  credit: string;
  /** Optional link to the original post. */
  href?: string;
}

export const reel: ReelItem[] = [];
