import { Route, Router } from 'electron-router-dom'

import { DefaultLayout } from './@layouts/default'
import { Home } from './pages/home'

export function AppRoutes() {
  return (
    <Router
      main={
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      }
    />
  )
}
