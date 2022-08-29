export type LiteralUnion<T extends U, U = string> = T | (U & {});

export type TextType = LiteralUnion<
  'bold' | 'light' | 'italic' | 'regular' | 'semi-bold'
>;

export type TextStatus = LiteralUnion<
  'basic' | 'primary' | 'success' | 'info' | 'warning' | 'error' | 'disabled'
>;

export type TextAppearance = LiteralUnion<'default' | 'alternative' | 'hint'>;

export type TextVariants = LiteralUnion<
  | 'small'
  | 'regular'
  | 'large'
  | 'title-small'
  | 'title-regular'
  | 'title-large'
>;
