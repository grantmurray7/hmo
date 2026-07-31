import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'

import Home from '@/pages/Home'

describe('Home page', () => {
  it('renders the simplified hero and empty updates section', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    )

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /a simple public campaign site for wilton road/i,
      }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 2, name: /professional, simple, and ready for real content/i }),
    ).toBeInTheDocument()
    expect(screen.getAllByText(/blank image/i).length).toBeGreaterThan(0)
  })
})
