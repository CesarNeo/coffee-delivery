import { Minus, Plus } from '@phosphor-icons/react'
import { Text } from '../Text'
import { FunctionComponent } from 'react'
import { useCart } from '../../hooks/cart'
import { Coffee } from '../../types/coffee'

type InputNumberProps = {
  coffee: Coffee
}

export const Number: FunctionComponent<InputNumberProps> = ({ coffee }) => {
  const {
    incrementCoffeeQuantity,
    decrementCoffeeQuantity,
    coffee: coffeeInCart,
    addCoffee,
  } = useCart()

  const coffeeExistsInCart = coffeeInCart.find(
    (coffeeCart) => coffeeCart.id === coffee.id,
  )

  const coffeeInCartQuantity = coffeeExistsInCart
    ? coffeeExistsInCart.quantity
    : 0

  function handleIncrement() {
    if (!coffeeExistsInCart) {
      addCoffee(coffee)
      return
    }
    incrementCoffeeQuantity(coffee.id)
  }

  function handleDecrement() {
    decrementCoffeeQuantity(coffee.id)
  }

  return (
    <div className="flex items-center gap-2 rounded-md bg-theme-white-500 p-2">
      <button
        className="text-theme-purple-500 transition-colors hover:text-theme-purple-800"
        type="button"
        onClick={handleDecrement}
      >
        <Minus size={14} weight="bold" />
      </button>
      <Text size="M" className="text-theme-gray-700">
        {coffeeInCartQuantity}
      </Text>
      <button
        className="text-theme-purple-500 transition-colors hover:text-theme-purple-800"
        type="button"
        onClick={handleIncrement}
      >
        <Plus size={14} weight="bold" />
      </button>
    </div>
  )
}
