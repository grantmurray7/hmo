import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col justify-center border border-stone-800 bg-stone-950/70 p-8">
      <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-red-300">
        Page not found
      </p>
      <h1 className="mt-4 font-display text-5xl leading-none text-stone-100">
        That update could not be found.
      </h1>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-300">
        The link may be outdated, or the update may have been renamed as the archive develops.
      </p>
      <div className="mt-6">
        <Link
          to="/updates"
          className="inline-flex border border-red-500 bg-red-500 px-5 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-white transition hover:bg-red-400"
        >
          Return to updates
        </Link>
      </div>
    </div>
  )
}
