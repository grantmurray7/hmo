import { HashRouter, Route, Routes } from 'react-router-dom'

import { AppShell } from '@/components/AppShell'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'
import UpdateArticle from '@/pages/UpdateArticle'
import Updates from '@/pages/Updates'

export default function App() {
  return (
    <HashRouter>
      <AppShell>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/updates/:slug" element={<UpdateArticle />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppShell>
    </HashRouter>
  )
}
