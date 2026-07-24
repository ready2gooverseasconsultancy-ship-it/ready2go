import React from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  to?: string;
  href?: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-brand-orange text-white shadow-lg shadow-brand-orange/20 hover:bg-brand-blue hover:shadow-xl active:scale-[0.97]',
  secondary:
    'bg-brand-blue text-white shadow-lg shadow-brand-blue/20 hover:bg-brand-blue-700 hover:shadow-xl active:scale-[0.97]',
  outline:
    'border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white active:scale-[0.97]',
  ghost:
    'text-slate-700 hover:bg-slate-100 hover:text-brand-blue active:scale-[0.97]',
};

const sizeStyles: Record<Size, string> = {
  sm: 'px-5 py-2.5 text-xs font-bold uppercase tracking-[0.16em] rounded-full',
  md: 'px-6 py-3 text-sm font-bold rounded-full',
  lg: 'px-8 py-4 text-sm font-bold rounded-xl',
  xl: 'px-10 py-5 text-base font-bold rounded-2xl',
};

function ButtonInner({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  ...props
}: ButtonProps) {
  return (
    <button
      type={props.type ?? 'button'}
      disabled={disabled}
      onClick={props.onClick}
      className={`inline-flex items-center justify-center gap-2 font-bold transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </button>
  );
}

export function Button(props: ButtonProps) {
  if (props.to) {
    return (
      <Link to={props.to} className="inline-flex">
        <ButtonInner {...props} />
      </Link>
    );
  }
  if (props.href) {
    return (
      <a href={props.href} target="_blank" rel="noopener noreferrer" className="inline-flex">
        <ButtonInner {...props} />
      </a>
    );
  }
  return <ButtonInner {...props} />;
}
