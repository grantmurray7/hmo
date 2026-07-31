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
    <div className="min-h-screen bg-ink text-stone-100">
      <div className="mx-auto flex min-h-screen w-full max-w-[1500px] flex-col px-5 pb-8 pt-4 md:px-8">
        <header className="border-b border-stone-800 py-5">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-2">
              <Link to="/" className="inline-flex items-center gap-3">
                <span className="h-8 w-1 bg-red-500" aria-hidden="true" />
                <div>
                  <p className="font-display text-3xl leading-none text-stone-50 md:text-4xl">
                    {campaignMeta.title}
                  </p>
                  <p className="max-w-2xl text-xs uppercase tracking-[0.24em] text-stone-400">
                    {campaignMeta.location}
                  </p>
                </div>
              </Link>
              <p className="max-w-3xl text-sm leading-6 text-stone-300">{campaignMeta.strapline}</p>
            </div>

            <nav className="flex flex-wrap items-center gap-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    cn(
                      'border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.26em] transition',
                      isActive
                        ? 'border-red-500 bg-red-500 text-white'
                        : 'border-stone-700 text-stone-200 hover:border-stone-500 hover:bg-stone-900',
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

        <footer className="border-t border-stone-800 py-5">
          <div className="grid gap-4 text-sm text-stone-400 md:grid-cols-[1.4fr_1fr]">
            <p>
              This site is designed as a public record of concerns, observations, and confirmed
              planning context. It should separate verified facts from matters still being checked.
            </p>
            <p className="text-left md:text-right">
              Hosted at <span className="text-stone-200">www.wiltonroadhmo.com</span>
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
