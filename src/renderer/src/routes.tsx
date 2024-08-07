import { Route, Router } from 'electron-router-dom'
import { Outlet } from 'react-router-dom'

import { DefaultLayout } from './@layouts/default'
import { Home } from './pages/home'
import { ProjectListPage } from './pages/projects'
import { ReleaseListPage } from './pages/releases'
import { NewRelease } from './pages/releases/new-release'

export function AppRoutes() {
  return (
    <Router
      main={
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Outlet />}>
            <Route path="" element={<ProjectListPage />} />
          </Route>
          <Route path="/releases/" element={<Outlet />}>
            <Route path="" element={<ReleaseListPage />} />
            <Route path="new-release" element={<NewRelease />} />
          </Route>
        </Route>
      }
    />
  )
}
