import { ReactNode, CSSProperties, ElementType } from "react";

/**
 * The signature highlighter: renders text with G·A·B·R·I·E·L letters in blue.
 *
 * @startingPoint section="Brand" subtitle="GABRIEL per-letter blue highlight" viewport="700x150"
 */
export interface GNameProps {
  /** the text to render, split per character (plain text recommended) */
  children: import("react").ReactNode;
  /** override which letters are "hot" — defaults to GABRIEL */
  letters?: string;
  /** element/tag to render as (default span) */
  as?: ElementType;
  /** highlight color (default --accent) */
  hot?: string;
  /** non-highlight color (default --text) */
  cool?: string;
  style?: CSSProperties;
}

export function GName(props: GNameProps): JSX.Element;
