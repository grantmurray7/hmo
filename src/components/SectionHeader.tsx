type SectionHeaderProps = {
  eyebrow: string
  title: string
  description: string
}

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <header className="space-y-3 border-b border-stone-800 pb-5">
      <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-red-300">
        {eyebrow}
      </p>
      <h2 className="max-w-3xl font-display text-4xl leading-none text-stone-100 md:text-5xl">
        {title}
      </h2>
      <p className="max-w-2xl text-sm leading-6 text-stone-300">{description}</p>
    </header>
  )
}
