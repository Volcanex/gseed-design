import { CSSProperties } from "react";

export interface StatusItem {
  label: string;
  /** render in blue */
  hot?: boolean;
  /** show a leading square status dot */
  dot?: boolean;
}

/**
 * OS status bar — mono cells split by hairlines, optional block cursor.
 *
 * @startingPoint section="Core" subtitle="OS status bar with cells & cursor" viewport="700x120"
 */
export interface StatusLineProps {
  /** cells — plain strings or { label, hot, dot } */
  items: (string | StatusItem)[];
  /** show a trailing blinking block cursor */
  cursor?: boolean;
  align?: "left" | "right";
  style?: CSSProperties;
}

export function StatusLine(props: StatusLineProps): JSX.Element;
