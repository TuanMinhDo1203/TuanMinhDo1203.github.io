import { motion } from "motion/react";
import type { ReactNode } from "react";
export function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.06 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}
export function SectionTitle({
  title,
  label,
  index,
  children,
}: {
  title: string;
  label?: string;
  index?: string;
  children?: ReactNode;
}) {
  return (
    <div className="section-heading">
      <div className="section-title-copy">
        {label && (
          <p className="eyebrow">
            {index && (
              <span className="section-index" aria-hidden="true">
                {index}
              </span>
            )}
            {label}
          </p>
        )}
        <h2>{title}</h2>
      </div>
      {children}
    </div>
  );
}
