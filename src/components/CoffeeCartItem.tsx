import { FunctionComponent } from 'react'

import { Text } from './Text'
import * as Input from './Input'
import { Trash } from '@phosphor-icons/react'
import { Coffee } from '../types/coffee'
import { formatPriceWithDollarSign } from '../utils/functions/format-price'
import { useCart } from '../hooks/cart'

type CoffeeCartItemProps = {
  coffee: Coffee
}

export const CoffeeCartItem: FunctionComponent<CoffeeCartItemProps> = ({
  coffee,
}) => {
  const { removeCoffee } = useCart()

  const coffeePriceFormatted = formatPriceWithDollarSign(
    coffee.price * coffee.quantity!,
  )

  function handleRemoveCoffee() {
    removeCoffee(coffee.id)
  }

  return (
    <div>
      <div className="mb-6">
        <div className="flex items-center gap-5">
          <img src={coffee.image} alt={coffee.name} className="h-16 w-16" />
          <div>
            <div>
              <Text size="M">{coffee.name}</Text>
              <Text size="M" weight="bold" className="text-theme-gray-500">
                {coffeePriceFormatted}
              </Text>
            </div>

            <div className="mt-2 flex gap-2">
              <Input.Number coffee={coffee} />
              <button
                type="button"
                className="flex items-center gap-1 rounded-md bg-theme-white-500 p-2 text-xs uppercase text-theme-gray-500 transition-colors hover:bg-theme-gray-100 hover:text-theme-gray-600"
                onClick={handleRemoveCoffee}
              >
                <Trash size={16} className="text-theme-purple-500" />
                remover
              </button>
            </div>
          </div>
        </div>
      </div>

      <hr className="bg-theme-white-500" />
    </div>
  )
}
