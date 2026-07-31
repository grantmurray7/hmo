import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col justify-center rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
        Page not found
      </p>
      <h1 className="mt-4 text-5xl font-semibold leading-none text-slate-900">
        That campaign page could not be found.
      </h1>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
        The link may be outdated, or that update may not have been published yet.
      </p>
      <div className="mt-6">
        <Link
          to="/updates"
          className="inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
        >
          Return to updates
        </Link>
      </div>
    </div>
  )
}
