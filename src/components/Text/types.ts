import type { ReactWithChildren } from 'utils/types/general'

type HeadingSemanticTextTag =
  | { h1?: true; h2?: never; h3?: never; h4?: never; h5?: never; h6?: never; p?: never; span?: never }
  | { h1?: never; h2?: true; h3?: never; h4?: never; h5?: never; h6?: never; p?: never; span?: never }
  | { h1?: never; h2?: never; h3?: true; h4?: never; h5?: never; h6?: never; p?: never; span?: never }
  | { h1?: never; h2?: never; h3?: never; h4?: true; h5?: never; h6?: never; p?: never; span?: never }
  | { h1?: never; h2?: never; h3?: never; h4?: never; h5?: true; h6?: never; p?: never; span?: never }
  | { h1?: never; h2?: never; h3?: never; h4?: never; h5?: never; h6?: true; p?: never; span?: never }

type ParagraphSemanticTextTag =
  | { h1?: never; h2?: never; h3?: never; h4?: never; h5?: never; h6?: never; p?: true; span?: never }
  | { h1?: never; h2?: never; h3?: never; h4?: never; h5?: never; h6?: never; p?: never; span?: true }

type SemanticTextTag = HeadingSemanticTextTag | ParagraphSemanticTextTag

export type ColorOptions = 'grey' | 'error' | 'warning' | 'success' | 'info' | 'default'
type TextColor = { color?: ColorOptions }

type TextDecorations = { italic?: boolean; underline?: boolean; strikethrough?: boolean }

export type TextSizeOptions = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number
type TextSizes = { size?: TextSizeOptions }

export type TextWeight =
  | { regular?: true; medium?: never; semiBold?: never; bold?: never; extraBold?: never; black?: never }
  | { regular?: never; medium?: true; semiBold?: never; bold?: never; extraBold?: never; black?: never }
  | { regular?: never; medium?: never; semiBold?: true; bold?: never; extraBold?: never; black?: never }
  | { regular?: never; medium?: never; semiBold?: never; bold?: true; extraBold?: never; black?: never }
  | { regular?: never; medium?: never; semiBold?: never; bold?: never; extraBold?: true; black?: never }
  | { regular?: never; medium?: never; semiBold?: never; bold?: never; extraBold?: never; black?: true }

export type TextAttributes = TextDecorations & TextSizes & TextColor & TextWeight & { className?: string }

export type TextProps = ReactWithChildren<SemanticTextTag & TextAttributes>

export type HeadingProps = ReactWithChildren<HeadingSemanticTextTag & TextAttributes>
