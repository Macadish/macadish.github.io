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

export interface HeroSlide {
  image: ImageMetadata;
  alt: string;
  chapter: string;
  /** Shown as "03 — Styles". Omitted on the opening slide. */
  stage?: string;
  eyebrow?: string;
  title: string;
  /** Rendered as the h1 on the opening slide only. */
  lead?: boolean;
  body?: string;
  spec?: { value: string; label: string }[];
}

export const heroSlides: HeroSlide[] = [
  {
    image: hero01,
    alt: 'Five styles of pizza arranged on a dark steel bench.',
    chapter: 'Macadish',
    eyebrow: 'Singapore · home kitchen',
    title: 'Macadish',
    lead: true,
    body:
      'Pizza built the long way — blended flour, days of cold fermentation, ' +
      'and a bench that will not settle on one dough.',
    spec: [
      { value: '4', label: 'doughs' },
      { value: '58–90%', label: 'hydration' },
      { value: '1', label: 'bench' },
    ],
  },
  {
    image: hero02,
    alt: 'A contemporary Neapolitan pizza with a blistered, leopard-spotted rim.',
    chapter: 'Styles',
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
    chapter: 'Styles',
    stage: 'Alla pala',
    title: 'Pizza alla pala & al taglio',
    body: 'Hydration pushed high enough that the base goes properly crisp.',
    spec: [
      { value: '80–90%', label: 'hydration' },
      { value: 'by weight', label: 'sold' },
    ],
  },
  {
    image: hero04,
    alt: 'Dimpled focaccia with pooled olive oil beside a small pan pizza.',
    chapter: 'Styles',
    stage: 'Focaccia & padellino',
    title: 'Focaccia & padellino',
    body: 'Crisp traded for the chew of proper bread.',
    spec: [
      { value: 'pan', label: 'baked' },
      { value: 'olive oil', label: 'base' },
    ],
  },
  {
    image: hero05,
    alt: 'A square Detroit pan pizza with a caramelised cheese crust, one corner lifted.',
    chapter: 'Styles',
    stage: 'Detroit, grandma, Sicilian',
    title: 'Detroit, grandma, Sicilian',
    body:
      'Pan pizza graduated — cheesier, crisper, and a long way from the chain version.',
    spec: [
      { value: 'frico', label: 'edge' },
      { value: 'steel', label: 'pan' },
    ],
  },
  {
    image: hero06,
    alt: 'Two mounds of different flour being blended on a dark bench, dust in the air.',
    chapter: 'How',
    stage: 'Flour',
    title: 'Italian and Canadian flour',
    body:
      'Canadian strength, Italian extensibility — blended per style. ' +
      'One bench cannot cover this range on one flour.',
    spec: [
      { value: 'W 260–320', label: 'range' },
      { value: '2', label: 'flours' },
    ],
  },
  {
    image: hero07,
    alt: 'Dough balls resting in a proofing box, fermentation bubbles visible.',
    chapter: 'How',
    stage: 'Fermentation',
    title: 'Fermented 48 to 72 hours',
    body:
      'The one thing every style shares. Long, cold, and the reason all four ' +
      'taste like they came from the same kitchen.',
    spec: [
      { value: '48–72 h', label: '@ 4 °C' },
      { value: '0.12%', label: 'yeast' },
    ],
  },
  {
    image: hero08,
    alt: 'Italian and Singaporean ingredients laid out together on a dark bench.',
    chapter: 'How',
    stage: 'Flavour',
    title: 'Italian method, Singaporean pantry',
    body: 'Local flavours across the range — as precise about sambal as about San Marzano.',
    spec: [
      { value: '2', label: 'traditions' },
      { value: '1', label: 'dough' },
    ],
  },
  {
    image: hero09,
    alt: 'A digital scale and probe thermometer beside a dough ball.',
    chapter: 'How',
    stage: 'Method',
    title: 'Optimised by experiment',
    body:
      'Each style dialled in separately, one variable at a time. ' +
      'Breadth is not guesswork; it is four times the work.',
    spec: [
      { value: '61', label: 'bakes' },
      { value: '19', label: 'binned' },
    ],
  },
];
