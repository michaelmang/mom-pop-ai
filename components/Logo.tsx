import { Italianno } from 'next/font/google'

const logoScript = Italianno({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <span
      className={`${logoScript.className} text-[2rem] sm:text-[2.15rem] leading-none text-[#C4A574] ${className}`}
    >
      Michael Mangialardi
    </span>
  )
}
