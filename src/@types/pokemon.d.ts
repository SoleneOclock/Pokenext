// astuce on peut générer les interface à partir des données avec un site comme https://transform.tools/json-to-typescript ou meme demander à chatGPT

interface NameTranslations {
  fr: string;
  en: string;
  jp: string;
}

interface SpriteImages {
  regular: string;
  shiny: string;
  gmax: string | null;
}

interface Type {
  name: string;
  image: string;
}

interface Talent {
  name: string;
  tc: boolean;
}

interface Stats {
  hp: number;
  atk: number;
  def: number;
  spe_atk: number;
  spe_def: number;
  vit: number;
}

interface Resistance {
  name: string;
  multiplier: number;
}

interface Evolution {
  pre: null;
  next: {
      pokedex_id: number;
      name: string;
      condition: string;
  }[];
  mega: null;
}

interface GenderRatio {
  male: number;
  female: number;
}

export interface Pokemon {
  pokedex_id: number;
  generation: number;
  category: string;
  name: NameTranslations;
  sprites: SpriteImages;
  types: Type[];
  talents: Talent[];
  stats: Stats;
  resistances: Resistance[];
  evolution: Evolution;
  height: string;
  weight: string;
  egg_groups: string[];
  sexe: GenderRatio;
  catch_rate: number;
  level_100: number;
  formes: null;
}