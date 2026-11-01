const SectionTitle = ({ children }) => (
  <div className="mb-8 md:mb-12">
    <h2 className="text-[clamp(2rem,4.2vw,3.125rem)] leading-tight">
      {children}
    </h2>
    <span
      aria-hidden
      className="mt-3 block h-1 w-16 rounded-full bg-gradient-to-r from-brand to-glow"
    />
  </div>
);

export default SectionTitle;
