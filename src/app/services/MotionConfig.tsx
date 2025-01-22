import { LazyMotion, domMax } from "motion/react";
import type { ReactNode } from "react";

export function MotionSetup({ children }: { children: ReactNode }) {
	return <LazyMotion features={domMax}>{children}</LazyMotion>;
}
