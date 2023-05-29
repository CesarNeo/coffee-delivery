import { Minus, Plus } from '@phosphor-icons/react'
import { Text } from '../Text'

export const Number = () => {
  return (
    <div className="flex items-center gap-2 rounded-md bg-theme-white-500 p-2">
      <button className="text-theme-purple-500 transition-colors hover:text-theme-purple-800">
        <Minus size={14} weight="bold" />
      </button>
      <Text size="M" className="text-theme-gray-700">
        1
      </Text>
      <button className="text-theme-purple-500 transition-colors hover:text-theme-purple-800 ">
        <Plus size={14} weight="bold" />
      </button>
    </div>
  )
}
