import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export function DefaultLayout() {
  return (
    <div className="text-theme-gray-600">
      <Header />
      <Outlet />
    </div>
  )
}
