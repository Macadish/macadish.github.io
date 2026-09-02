/**
 * Hero slides. Adding, removing or reordering a slide happens here —
 * the component reads this list and needs no changes.
 *
 * `image` is imported so Astro optimises it at build time.
 * `chapter` groups the rail labels. `spec` is optional.
 */

import hero01 from '../assets/hero/hero-01.jpg';
import hero02 from '../assets/hero/hero-02.jpg';
import hero03 from '../assets/hero/hero-03.jpg';
import hero04 from '../assets/hero/hero-04.jpg';
import hero05 from '../assets/hero/hero-05.jpg';
import hero06 from '../assets/hero/hero-06.jpg';
import hero07 from '../assets/hero/hero-07.jpg';
import hero08 from '../assets/hero/hero-08.jpg';
import hero09 from '../assets/hero/hero-09.jpg';
import heroThin from '../assets/hero/hero-10-thin.jpg';

export interface HeroSlide {
  image: ImageMetadata;
  alt: string;
  /** Small label above the title. Omitted on the opening slide. */
  stage?: string;
  eyebrow?: string;
  title: string;
  /** Rendered as the h1 on the opening slide only. */
  lead?: boolean;
  /** Outlined button, opening slide only. */
  cta?: { label: string; href: string };
  body?: string;
  spec?: { value: string; label: string }[];
}

export const heroSlides: HeroSlide[] = [
  {
    image: hero01,
    alt: 'Five styles of pizza arranged on a dark steel bench.',
    eyebrow: 'Singapore · home kitchen',
    title: 'Macadish',
    lead: true,
    body: 'Making pizzas the way I like them.',
    cta: { label: 'Reservations', href: '/reservations/' },
    spec: [
      { value: '4', label: 'doughs' },
      { value: '58–90%', label: 'hydration' },
      { value: '1', label: 'bench' },
    ],
  },
  {
    image: hero02,
    alt: 'A contemporary Neapolitan pizza with a blistered, leopard-spotted rim.',
    stage: 'Contemporary Neapolitan',
    title: 'Contemporary Neapolitan',
    body: 'The classic with a modern spin — lighter, puffier, and crisper in the bite.',
    spec: [
      { value: '62–65%', label: 'hydration' },
      { value: '90 s', label: 'bake' },
    ],
  },
  {
    image: hero03,
    alt: 'A long rectangular pizza al taglio cut to show an open, airy crumb.',
    stage: 'Alla pala',
    title: 'Pizza alla pala & al taglio',
    body: 'Crispiness pushed as far as it goes, through very high hydration.',
    spec: [
      { value: '80–90%', label: 'hydration' },
      { value: 'by weight', label: 'sold' },
    ],
  },
  {
    image: hero04,
    alt: 'Dimpled focaccia with pooled olive oil beside a small pan pizza.',
    stage: 'Focaccia & padellino',
    title: 'Focaccia & padellino',
    body: 'Sometimes you want a good chew of bread — focaccia is just the thing.',
    spec: [
      { value: 'pan', label: 'baked' },
      { value: 'olive oil', label: 'base' },
    ],
  },
  {
    image: hero05,
    alt: 'A square Detroit pan pizza with a caramelised cheese crust, one corner lifted.',
    stage: 'Detroit, grandma, Sicilian',
    title: 'Detroit, grandma, Sicilian',
    body:
      'A pan lets us work the crust with oil and cheese to build frico edges.',
    spec: [
      { value: 'frico', label: 'edge' },
      { value: 'steel', label: 'pan' },
    ],
  },
  {
    image: heroThin,
    alt: 'A wide New York pizza with a folded slice beside a cracker-thin tavern pizza cut into squares.',
    stage: 'New York & Chicago',
    title: 'New York & Chicago',
    body:
      'Thin crust either way. Wide and foldable, or cracker-thin and cut into ' +
      'squares with the toppings run out to the rim.',
    spec: [
      { value: 'fold', label: 'New York' },
      { value: 'square', label: 'tavern' },
    ],
  },
  {
    image: hero06,
    alt: 'Two mounds of different flour being blended on a dark bench, dust in the air.',
    stage: 'Flour',
    title: 'Italian and Canadian flour',
    body:
      "Optimising for extensibility and strength to suit Singapore's climate, " +
      'while preserving flavour and texture.',
    spec: [
      { value: 'W 260–320', label: 'range' },
      { value: '2', label: 'flours' },
    ],
  },
  {
    image: hero07,
    alt: 'Dough balls resting in a proofing box, fermentation bubbles visible.',
    stage: 'Fermentation',
    title: 'Fermented 24 to 72 hours',
    body:
      'In the Italian tradition, long fermentation is key to unlocking flavour ' +
      'and improving digestibility. Our dough uses biga and poolish to extend ' +
      'fermentation and achieve a consistent texture.',
    spec: [
      { value: '24–72 h', label: '@ 4 °C' },
      { value: '0.12%', label: 'yeast' },
    ],
  },
  {
    image: hero08,
    alt: 'Italian and Singaporean ingredients laid out together on a dark bench.',
    stage: 'Flavour',
    title: 'Expressing Italian and local flavours',
    body:
      'Everything tastes better on good bread, and pizza is the best bread ' +
      'there is. Italian technique, local flavour.',
    spec: [
      { value: '2', label: 'traditions' },
      { value: '1', label: 'dough' },
    ],
  },
  {
    image: hero09,
    alt: 'A digital scale and probe thermometer beside a dough ball.',
    stage: 'Method',
    title: 'Constant adaptation and refinement',
    body:
      'Pizza making is as much a science as it is an art. The fun is knowing ' +
      'that whether it is the temperature, the flour or the handling, there is ' +
      'always something to improve.',
    spec: [
      { value: '61', label: 'bakes' },
      { value: '19', label: 'binned' },
    ],
  },
];
