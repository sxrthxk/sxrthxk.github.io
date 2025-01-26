export function Heading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1 className={`text-5xl md:text-6xl font-extrabold ${className}`}>
      {children}
    </h1>
  );
}
