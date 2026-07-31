import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'

import Home from '@/pages/Home'

describe('Home page', () => {
  it('renders the campaign headline and featured updates', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    )

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /a serious public record of concern about development on wilton road/i,
      }),
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 2, name: /featured updates/i })).toBeInTheDocument()
    expect(screen.getByText(/campaign site launched to document the wilton road issue/i)).toBeInTheDocument()
  })
})
