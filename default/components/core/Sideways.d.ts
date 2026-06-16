import { ReactNode, CSSProperties } from "react";

/**
 * Vertical edge microtype — the brand's signature margin ticker.
 */
export interface SidewaysProps {
  children: ReactNode;
  /** up = reads bottom-to-top (default), down = top-to-bottom */
  direction?: "up" | "down";
  /** font-size (default 10px) */
  size?: string;
  color?: string;
  /** letter-spacing (default 0.32em) */
  tracking?: string;
  style?: CSSProperties;
}

export function Sideways(props: SidewaysProps): JSX.Element;
