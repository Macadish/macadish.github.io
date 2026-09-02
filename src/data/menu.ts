/**
 * The menu. Groups render in the order given; items within a group in the
 * order given. `style` appears only when an item departs from its group's
 * dough — leave it out when it matches, or the label is just noise.
 *
 * Placeholder content: replace with real items before trading.
 */

export interface MenuItem {
  name: string;
  /** Only when the dough differs from the group. */
  style?: string;
  description: string;
}

export interface MenuGroup {
  title: string;
  /** Right-aligned figures on the group rule. */
  spec: string;
  items: MenuItem[];
}

export const menu: MenuGroup[] = [
  {
    title: 'Contemporary Neapolitan',
    spec: '62% · 90 s @ 470 °C',
    items: [
      {
        name: 'Margherita',
        description:
          'San Marzano, fior di latte, basil. The cornicione is the whole argument.',
      },
      {
        name: 'Marinara',
        description: 'Tomato, garlic, oregano, no cheese. The dough with nowhere to hide.',
      },
      {
        name: 'Mushroom & burrata',
        style: '96-hour dough',
        description: 'Roasted mushroom, burrata torn over the top after the bake.',
      },
    ],
  },
  {
    title: 'Alla pala, by the slice',
    spec: '80–85% hydration',
    items: [
      {
        name: 'Mortadella & pistachio',
        description: 'Cut with scissors, folded, eaten standing up.',
      },
      {
        name: 'Potato & rosemary',
        description: 'Sliced thin, olive oil, salt. Nothing else needs to happen.',
      },
    ],
  },
  {
    title: 'Experiments',
    spec: 'rotating · usually two at a time',
    items: [
      {
        name: 'Pad kra pao',
        style: 'Neo-Neapolitan',
        description:
          'Minced pork with holy basil, prik nam pla in place of tomato, crispy egg. ' +
          'Cheese here is glue, not the hero.',
      },
      {
        name: 'Japanese beef shank curry',
        style: 'Neo-Neapolitan',
        description: 'Slow-cooked beef shank curry, bonito flakes on the way out.',
      },
    ],
  },
  {
    title: 'Local',
    spec: 'seasonal',
    items: [
      {
        name: 'Chilli crab',
        style: 'Detroit',
        description:
          'Crab in chilli-tomato, egg ribbons, frico edge to scrape up what escapes.',
      },
      {
        name: 'Satay chicken',
        style: 'Neo-Neapolitan',
        description:
          'Charred chicken thigh, peanut, cucumber and red onion added cold at the pass.',
      },
      {
        name: 'Laksa prawn',
        style: 'Teglia romana',
        description:
          'Laksa gravy reduced until it will sit on a base, prawn, laksa leaf.',
      },
    ],
  },
];
