import { CSSProperties, ChangeEvent } from "react";

/**
 * Hairline mono text input with uppercase label and blue focus rule.
 *
 * @startingPoint section="Forms" subtitle="Mono input field — box & underline" viewport="700x150"
 */
export interface FieldProps {
  /** uppercase label above the input */
  label?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  /** box = framed, line = underline only */
  variant?: "box" | "line";
  disabled?: boolean;
  /** optional sideways/right index label (e.g. "01") */
  index?: string | number;
  style?: CSSProperties;
}

export function Field(props: FieldProps): JSX.Element;
