import { ReactNode, CSSProperties } from "react";

/**
 * Square hairline mono chip for labels, sources, indices, metadata.
 *
 * @startingPoint section="Core" subtitle="Mono metadata chips — default, hot, solid" viewport="700x150"
 */
export interface TagProps {
  children: ReactNode;
  /** default = grey hairline, hot = blue hairline, solid = blue fill */
  tone?: "default" | "hot" | "solid";
  /** show a leading square status dot */
  dot?: boolean;
  style?: CSSProperties;
}

export function Tag(props: TagProps): JSX.Element;
