import { ReactNode, CSSProperties } from "react";

/**
 * Square 1:1 button for a single glyph or hairline SVG icon.
 */
export interface IconButtonProps {
  /** an ASCII mark (→ × ▌) or a hairline SVG node */
  children: ReactNode;
  /** accessible label / tooltip */
  label: string;
  size?: "sm" | "md" | "lg";
  /** active = blue state */
  active?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: CSSProperties;
}

export function IconButton(props: IconButtonProps): JSX.Element;
