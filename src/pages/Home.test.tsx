import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'

import Home from '@/pages/Home'

describe('Home page', () => {
  it('renders the protest hero and campaign section', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    )

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /stop the hmo development on wilton road, redhill/i,
      }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /wilton road is a private residential road, not a place for hmo overdevelopment/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByText(/opposing hmo overdevelopment on our private road/i)).toBeInTheDocument()
  })
})
