import type { ReactWithChildren } from 'utils/types'

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

export type ColorOptions = 'primary' | 'secondary' | 'tertiary' | 'error' | 'warning' | 'success' | 'info' | 'default'
type TextColor = { color?: ColorOptions }
type TextDecorations = { bold?: boolean; italic?: boolean; underline?: boolean; strikethrough?: boolean }
type TextSizes =
  | { xs?: true; sm?: never; md?: never; lg?: never; xl?: never }
  | { xs?: never; sm?: true; md?: never; lg?: never; xl?: never }
  | { xs?: never; sm?: never; md?: true; lg?: never; xl?: never }
  | { xs?: never; sm?: never; md?: never; lg?: true; xl?: never }
  | { xs?: never; sm?: never; md?: never; lg?: never; xl?: true }

export type TextAttributes = TextDecorations & TextSizes & TextColor

export type TextProps = ReactWithChildren<SemanticTextTag & TextAttributes>

export type HeadingProps = ReactWithChildren<HeadingSemanticTextTag & TextAttributes>
