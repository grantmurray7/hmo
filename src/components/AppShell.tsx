import type { PropsWithChildren } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { campaignMeta } from '@/content/site'
import { cn } from '@/lib/utils'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/updates', label: 'Updates' },
]

export function AppShell({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto flex min-h-screen w-full max-w-[1320px] flex-col px-5 pb-10 pt-4 md:px-8">
        <header className="border-b border-slate-200 py-5">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-2">
              <Link to="/" className="inline-flex items-center gap-3">
                <span className="h-8 w-1 rounded-full bg-slate-900" aria-hidden="true" />
                <div>
                  <p className="text-3xl font-semibold leading-none text-slate-900 md:text-4xl">
                    {campaignMeta.title}
                  </p>
                  <p className="max-w-2xl text-xs uppercase tracking-[0.24em] text-slate-500">
                    {campaignMeta.location}
                  </p>
                </div>
              </Link>
              <p className="max-w-3xl text-sm leading-6 text-slate-600">{campaignMeta.strapline}</p>
            </div>

            <nav className="flex flex-wrap items-center gap-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    cn(
                      'rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] transition',
                      isActive
                        ? 'border-slate-900 bg-slate-900 text-white'
                        : 'border-slate-300 text-slate-700 hover:border-slate-500 hover:bg-slate-50',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </header>

        <main className="flex-1 py-8 md:py-10">{children}</main>

        <footer className="border-t border-slate-200 py-5">
          <div className="grid gap-4 text-sm text-slate-500 md:grid-cols-[1.4fr_1fr]">
            <p>
              A simple campaign site with a homepage and updates section, ready for real content to
              be added.
            </p>
            <p className="text-left md:text-right">
              Hosted at <span className="text-slate-800">www.wiltonroadhmo.com</span>
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
