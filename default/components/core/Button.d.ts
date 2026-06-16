import { ReactNode, CSSProperties } from "react";

/**
 * Square, hairline, monospaced action button. The G workhorse.
 *
 * @startingPoint section="Core" subtitle="Square mono button — primary, secondary, ghost" viewport="700x150"
 */
export interface ButtonProps {
  children: ReactNode;
  /** primary = blue hairline (default), secondary = grey hairline, ghost = no border */
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  /** optional leading glyph / icon node */
  iconLeft?: ReactNode;
  /** optional trailing glyph / icon node */
  iconRight?: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  style?: CSSProperties;
}

export function Button(props: ButtonProps): JSX.Element;
