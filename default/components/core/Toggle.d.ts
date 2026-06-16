import { CSSProperties } from "react";

/**
 * Square OS switch — a blue block slides across a hairline track.
 */
export interface ToggleProps {
  checked?: boolean;
  onChange?: (next: boolean) => void;
  /** uppercase label to the right */
  label?: string;
  disabled?: boolean;
  style?: CSSProperties;
}

export function Toggle(props: ToggleProps): JSX.Element;
