import { ShoppingCart } from '@phosphor-icons/react'

import coffeeDeliveryLogo from '../assets/coffee-delivery-logo.svg'
import { Text } from './Text'
import { useCart } from '../hooks/cart'

export const Header = () => {
  const { coffee } = useCart()

  return (
    <header className="flex items-center justify-between px-40 py-8">
      <a href="/">
        <img src={coffeeDeliveryLogo} alt="Coffee Delivery logo" />
      </a>

      <nav className="flex gap-3">
        <a
          href="/checkout"
          className="relative flex h-10 w-10 items-center justify-center rounded-md bg-theme-yellow-100 text-theme-yellow-800 transition-all hover:bg-theme-yellow-500 hover:text-theme-white-100"
        >
          <ShoppingCart size={22} weight="fill" />
          {coffee.length > 0 && (
            <div className="absolute -right-2 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-theme-yellow-800">
              <Text size="XS" className="text-theme-white-100">
                {coffee.length}
              </Text>
            </div>
          )}
        </a>
      </nav>
    </header>
  )
}
