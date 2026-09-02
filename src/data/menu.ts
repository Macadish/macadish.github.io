/**
 * The menu, split into what it is and what it could be.
 *
 * Every item names its dough and then its ingredients — no descriptive copy.
 * Keep the ingredient lists short: they are set centred, so long lines wrap
 * badly and break the symmetry the layout depends on.
 *
 * Placeholder content: replace with real items before trading.
 */

export interface MenuItem {
  name: string;
  /** The dough it is built on. */
  style: string;
  /** Ingredients, comma separated, no full stop. */
  ingredients: string;
}

export interface GlossaryEntry {
  style: string;
  /** Shape first, then what it is like to eat. */
  character: string;
  /** Rendered as data, so keep it numeric. */
  hydration: string;
}

export interface MenuGroup {
  title: string;
  /** One short line under the group heading. */
  note: string;
  items: MenuItem[];
}

export const menu: MenuGroup[] = [
  {
    title: 'Classic',
    note: 'The canon, as it should be',
    items: [
      {
        name: 'Margherita',
        style: 'Contemporary Neapolitan',
        ingredients: 'San Marzano, fior di latte, basil, olive oil',
      },
      {
        name: 'Marinara',
        style: 'Contemporary Neapolitan',
        ingredients: 'San Marzano, garlic, oregano, olive oil',
      },
      {
        name: 'Mushroom & burrata',
        style: 'Contemporary Neapolitan',
        ingredients: 'Roasted mushroom, burrata, thyme, black pepper',
      },
      {
        name: 'Mortadella & pistachio',
        style: 'Alla pala',
        ingredients: 'Mortadella, stracciatella, pistachio, lemon zest',
      },
      {
        name: 'Potato & rosemary',
        style: 'Alla pala',
        ingredients: 'Potato, rosemary, olive oil, sea salt',
      },
    ],
  },
  {
    title: 'Creative',
    note: 'Rotating, usually two at a time',
    items: [
      {
        name: 'Pad kra pao',
        style: 'Contemporary Neapolitan',
        ingredients: 'Minced pork, holy basil, prik nam pla, crispy egg, mozzarella',
      },
      {
        name: 'Japanese beef shank curry',
        style: 'Contemporary Neapolitan',
        ingredients: 'Beef shank curry, bonito, mozzarella, spring onion',
      },
      {
        name: 'Chilli crab',
        style: 'Detroit',
        ingredients: 'Crab, chilli tomato, egg ribbon, brick cheese',
      },
      {
        name: 'Satay chicken',
        style: 'Contemporary Neapolitan',
        ingredients: 'Chicken thigh, peanut, cucumber, red onion',
      },
      {
        name: 'Laksa prawn',
        style: 'Teglia romana',
        ingredients: 'Laksa gravy, prawn, laksa leaf, mozzarella',
      },
    ],
  },
];

/**
 * What each style on the menu actually is. Every `style` used above should
 * have an entry here, or the term is left unexplained on the page.
 */
export const glossary: GlossaryEntry[] = [
  {
    style: 'Contemporary Neapolitan',
    character: 'Classic round pizza, crisp exterior, soft and airy interior',
    hydration: '75% hyd',
  },
  {
    style: 'Alla pala',
    character: 'Rectangular pizza, crisp exterior, light open crumb',
    hydration: '80% hyd',
  },
  {
    style: 'Detroit',
    character: 'Square pan pizza with a cheesy frico exterior',
    hydration: '70% hyd',
  },
];
