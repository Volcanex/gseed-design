import { ReactNode, CSSProperties } from "react";

/**
 * Square hairline container with optional labelled header + index.
 *
 * @startingPoint section="Core" subtitle="Hairline card with header index" viewport="700x200"
 */
export interface CardProps {
  children: ReactNode;
  /** uppercase header label (omit for a bare card) */
  label?: string;
  /** right-aligned index in the header, e.g. "01 / 12" */
  index?: string | number;
  /** accent = blue hairline frame + blue label */
  accent?: boolean;
  /** body padding (CSS length / var) */
  pad?: string;
  style?: CSSProperties;
}

export function Card(props: CardProps): JSX.Element;
