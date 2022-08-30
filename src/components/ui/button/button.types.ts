export type LiteralUnion<T extends U, U = string> = T | (U & {});

export type ButtonStatus = LiteralUnion<
  'basic' | 'primary' | 'success' | 'info' | 'warning' | 'error' | 'disabled'
>;

export type ButtonAppearance = LiteralUnion<'filled' | 'outlined' | 'ghost'>;

export type ButtonSize = LiteralUnion<'tiny' | 'small' | 'regular' | 'large'>;
