type LogoProps = {
  className?: string
}

function LoupeI({ className = "" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 24 38"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="12" cy="9" r="7.5" stroke="currentColor" strokeWidth="3.2" />
      <line x1="12" y1="16.5" x2="12" y2="36" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
    </svg>
  )
}

export default function KilaLogo({ className = "" }: LogoProps) {
  return (
    <span className={`inline-flex items-center font-bold leading-none ${className}`}>
      <span>K</span>
      <LoupeI className="h-[0.85em] w-auto mx-[0.03em] self-start translate-y-[0.08em]" />
      <span className="-ml-[0.06em]">la</span>
    </span>
  )
}