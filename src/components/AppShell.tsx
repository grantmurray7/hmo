import { useState, type PropsWithChildren } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

import { campaignMeta } from '@/content/site'
import { cn } from '@/lib/utils'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/updates', label: 'Updates' },
]

export function AppShell({ children }: PropsWithChildren) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto flex min-h-screen w-full max-w-[1320px] flex-col px-5 pb-10 pt-4 md:px-8">
        <header className="py-5">
          <div className="flex items-start justify-between gap-6">
            <Link to="/" className="inline-flex items-center">
              <img
                src="/main%20logo.png"
                alt={campaignMeta.title}
                className="h-[7.5rem] w-auto object-contain md:h-[9rem]"
              />
            </Link>

            <button
              type="button"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((value) => !value)}
              className="mt-2 inline-flex rounded-full p-2 text-[#a61f2d] md:hidden"
            >
              {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>

            <nav className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    cn(
                      'text-sm font-bold uppercase tracking-[0.22em] text-[#a61f2d] transition hover:opacity-70',
                      isActive
                        ? 'opacity-100'
                        : 'opacity-75',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>

          {isMobileMenuOpen ? (
            <nav className="mt-4 flex flex-col items-end gap-3 border-t border-slate-200 pt-4 md:hidden">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'text-sm font-bold uppercase tracking-[0.22em] text-[#a61f2d] transition hover:opacity-70',
                      isActive ? 'opacity-100' : 'opacity-75',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          ) : null}
        </header>

        <main className="flex-1 py-8 md:py-10">{children}</main>

        <footer className="border-t border-slate-200 py-5">
          <div className="grid gap-4 text-sm text-slate-500 md:grid-cols-[1.4fr_1fr]">
            <p>
              Residents are organising to oppose HMO overdevelopment at The Wilton and to protect
              the residential character of Wilton Road.
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
