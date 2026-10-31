export default function SectionHead({
  eyebrow,
  title,
  center,
  maxWidth = 680,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  center?: boolean;
  maxWidth?: number;
  children?: React.ReactNode;
}) {
  return (
    <div className={`reveal mb-12 ${center ? "text-center mx-auto" : ""}`} style={{ maxWidth }}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", margin: "18px 0 16px" }}>{title}</h2>
      {children && <p style={{ color: "var(--ink-dim)", fontSize: "1.06rem" }}>{children}</p>}
    </div>
  );
}

export const B = ({ children }: { children: React.ReactNode }) => (
  <strong style={{ color: "var(--ink)", fontWeight: 600 }}>{children}</strong>
);

export const elevatedSection: React.CSSProperties = {
  borderTop: "1px solid var(--line)",
  background: "var(--bg-elev)",
  padding: "104px 0",
};
