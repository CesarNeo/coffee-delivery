import { FunctionComponent } from 'react'

import { Text } from './Text'
import * as Input from './Input'
import { Trash } from '@phosphor-icons/react'

type CoffeeCartItemProps = {}

export const CoffeeCartItem: FunctionComponent<CoffeeCartItemProps> = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-5">
        <img
          src="../../src/assets/coffee/expresso.png"
          alt=""
          className="h-16 w-16"
        />
        <div>
          <Text size="M">Expresso Tradicional</Text>

          <div className="mt-2 flex gap-2">
            <Input.Number />
            <button className="flex items-center gap-1 rounded-md bg-theme-white-500 p-2 text-xs uppercase text-theme-gray-500 transition-colors hover:bg-theme-gray-100 hover:text-theme-gray-600">
              <Trash size={16} className="text-theme-purple-500" />
              remover
            </button>
          </div>
        </div>
      </div>
      <Text size="M" weight="bold" className="text-theme-gray-500">
        R$ 9,90
      </Text>
    </div>
  )
}
