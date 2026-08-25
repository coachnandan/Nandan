// Button — Reusable premium button component
import { motion } from 'framer-motion';

const variants = {
  primary: 'bg-forest text-ivory hover:bg-forest/90 shadow-lg hover:shadow-xl',
  ghost: 'bg-transparent text-charcoal border border-border hover:bg-forest hover:text-ivory hover:border-forest',
  champagne: 'bg-gold text-ivory hover:bg-forest shadow-gold hover:shadow-xl',
  outline: 'bg-transparent text-ivory border border-ivory/30 hover:bg-ivory/10',
};

const sizes = {
  sm: 'px-6 py-2.5 text-xs',
  md: 'px-8 py-3.5 text-xs',
  lg: 'px-12 py-4 text-sm',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  icon,
  fullWidth = false,
}) {
  const cls = `
    inline-flex items-center justify-center gap-2
    rounded-full font-sans font-medium tracking-widest uppercase
    transition-all duration-300 ease-out
    relative overflow-hidden
    ${variants[variant]}
    ${sizes[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `;

  const inner = (
    <>
      {children}
      {icon && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={`group ${cls}`}
        whileHover={{ y: -2 }}
        whileTap={{ y: 0 }}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={`group ${cls}`}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
    >
      {inner}
    </motion.button>
  );
}
