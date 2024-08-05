import { Route, Router } from 'electron-router-dom'
import { Outlet } from 'react-router-dom'

import { DefaultLayout } from './@layouts/default'
import { Home } from './pages/home'
import { ProjectListPage } from './pages/projects'

export function AppRoutes() {
  return (
    <Router
      main={
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Outlet />}>
            <Route path="" element={<ProjectListPage />} />
          </Route>
        </Route>
      }
    />
  )
}
