/**
 * Style comparison. Same variables across every dough — the differences
 * between rows are the content, so keep the columns identical.
 *
 * Placeholder figures: replace with your own measurements.
 */

export interface StyleRow {
  name: string;
  character: string;
  /** 0–1, drives the inline bar. Keep proportional to `hydration`. */
  hydration: number;
  flourW: string;
  proof: string;
  oven: string;
  bake: string;
}

export const styles: StyleRow[] = [
  {
    name: 'Neapolitan',
    character: 'fast, blistered, soft',
    hydration: 0.62,
    flourW: '260–270',
    proof: '24 h',
    oven: '470 °C',
    bake: '90 s',
  },
  {
    name: 'Roman tonda',
    character: 'thin, crisp, dry',
    hydration: 0.58,
    flourW: '220–240',
    proof: '24 h',
    oven: '330 °C',
    bake: '4 min',
  },
  {
    name: 'Alla pala',
    character: 'long, airy, hand-stretched',
    hydration: 0.78,
    flourW: '300–320',
    proof: '48 h',
    oven: '300 °C',
    bake: '9 min',
  },
  {
    name: 'Teglia romana',
    character: 'very wet, open, pan-baked',
    hydration: 0.82,
    flourW: '320–350',
    proof: '48 h',
    oven: '290 °C',
    bake: '14 min',
  },
  {
    name: 'Sicilian',
    character: 'thick, tender, oiled pan',
    hydration: 0.75,
    flourW: '280–300',
    proof: '18 h',
    oven: '270 °C',
    bake: '22 min',
  },
];
