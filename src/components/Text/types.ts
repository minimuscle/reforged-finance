import type { ReactWithChildren } from 'utils/types/general'

type HeadingSemanticTextTag =
  | { h1?: boolean; h2?: never; h3?: never; h4?: never; h5?: never; h6?: never; p?: never; span?: never }
  | { h1?: never; h2?: boolean; h3?: never; h4?: never; h5?: never; h6?: never; p?: never; span?: never }
  | { h1?: never; h2?: never; h3?: boolean; h4?: never; h5?: never; h6?: never; p?: never; span?: never }
  | { h1?: never; h2?: never; h3?: never; h4?: boolean; h5?: never; h6?: never; p?: never; span?: never }
  | { h1?: never; h2?: never; h3?: never; h4?: never; h5?: boolean; h6?: never; p?: never; span?: never }
  | { h1?: never; h2?: never; h3?: never; h4?: never; h5?: never; h6?: boolean; p?: never; span?: never }

type ParagraphSemanticTextTag =
  | { h1?: never; h2?: never; h3?: never; h4?: never; h5?: never; h6?: never; p?: boolean; span?: never }
  | { h1?: never; h2?: never; h3?: never; h4?: never; h5?: never; h6?: never; p?: never; span?: boolean }

type SemanticTextTag = HeadingSemanticTextTag | ParagraphSemanticTextTag

export type ColorOptions = 'grey' | 'error' | 'warning' | 'success' | 'info' | 'default'
type TextColor = { color?: ColorOptions | string }

type TextDecorations = { italic?: boolean; underline?: boolean; strikethrough?: boolean }

export type TextSizeOptions = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number
/**
 * @param xs: 12px
 */
type TextSizes = {
  /**
   * xs: '12px',
   * sm: '14px',
   * md: '16px',
   * lg: '18px',
   * xl: '20px',
   */
  size?: TextSizeOptions
}

export type TextWeight =
  | { regular?: boolean; medium?: never; semiBold?: never; bold?: never; extraBold?: never; black?: never }
  | { regular?: never; medium?: boolean; semiBold?: never; bold?: never; extraBold?: never; black?: never }
  | { regular?: never; medium?: never; semiBold?: boolean; bold?: never; extraBold?: never; black?: never }
  | { regular?: never; medium?: never; semiBold?: never; bold?: boolean; extraBold?: never; black?: never }
  | { regular?: never; medium?: never; semiBold?: never; bold?: never; extraBold?: boolean; black?: never }
  | { regular?: never; medium?: never; semiBold?: never; bold?: never; extraBold?: never; black?: boolean }

export type TextAttributes = TextDecorations & TextSizes & TextColor & TextWeight & { className?: string }

export type TextProps = ReactWithChildren<SemanticTextTag & TextAttributes>

export type HeadingProps = ReactWithChildren<HeadingSemanticTextTag & TextAttributes>
