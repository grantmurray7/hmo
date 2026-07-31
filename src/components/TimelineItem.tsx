type TimelineItemProps = {
  date: string
  title: string
  detail: string
}

export function TimelineItem({ date, title, detail }: TimelineItemProps) {
  return (
    <li className="grid gap-4 border-t border-stone-800 py-5 md:grid-cols-[160px_1fr]">
      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-red-300">{date}</p>
      <div className="space-y-2">
        <h3 className="font-display text-2xl leading-none text-stone-100">{title}</h3>
        <p className="max-w-2xl text-sm leading-6 text-stone-300">{detail}</p>
      </div>
    </li>
  )
}
