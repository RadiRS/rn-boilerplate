import Variables from '@/config/theme/variables';
import { DefaultVariables, Fonts, Gutters, Layout } from '@/config/theme/index';

export type ThemeVariables = {
  Colors: typeof Variables.Colors;
  NavigationColors: typeof Variables.NavigationColors;
  FontSize: typeof Variables.FontSize;
  MetricsSizes: typeof Variables.MetricsSizes;
  FontsFamily: typeof Variables.FontsFamily;
};

export type Theme<F, G, L> = ThemeVariables & {
  Fonts: F;
  Gutters: G;
  Layout: L;
  Variables?: Partial<ThemeVariables>;
};

export type ThemeNavigationColors = {
  primary: string;
  background: string;
  card: string;
  text: string;
  border: string;
  notification: string;
};

export type ThemeNavigationTheme = {
  dark: boolean;
  colors: ThemeNavigationColors;
};

const fonts = Fonts(DefaultVariables);
const gutters = Gutters(DefaultVariables);
const layout = Layout(DefaultVariables);

export type CommonParams<C> = ThemeVariables &
  Pick<
    Theme<typeof fonts, typeof gutters, typeof layout, C>,
    'Layout' | 'Gutters' | 'Fonts'
  >;
