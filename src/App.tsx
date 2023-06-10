import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/cart'
import { Toaster } from 'react-hot-toast'

export function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <CartProvider>
        <Router />
      </CartProvider>
    </BrowserRouter>
  )
}
