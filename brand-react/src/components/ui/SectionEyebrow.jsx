// SectionEyebrow — Gold label above section headings
export default function SectionEyebrow({ children, center = false, light = false }) {
  return (
    <div className={`flex items-center gap-3 mb-5 ${center ? 'justify-center' : ''}`}>
      <span className={`block w-10 h-px flex-shrink-0 ${light ? 'bg-gold/60' : 'bg-gold'}`} />
      <span
        className={`text-xs font-medium tracking-[0.18em] uppercase ${
          light ? 'text-gold' : 'text-gold'
        }`}
      >
        {children}
      </span>
      {center && <span className={`block w-10 h-px flex-shrink-0 ${light ? 'bg-gold/60' : 'bg-gold'}`} />}
    </div>
  );
}
