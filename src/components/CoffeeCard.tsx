import { FunctionComponent } from 'react'

import * as Input from './Input'
import { Text } from './Text'
import { Title } from './Title'
import { ShoppingCart } from '@phosphor-icons/react'

type CoffeeCardProps = {
  coffee: {
    id: number
    name: string
    description: string
    image: string
    tag: string[]
    price: number
  }
}

const CoffeeTag: FunctionComponent<{ tag: string }> = ({ tag }) => {
  return (
    <div className="flex items-center rounded-full bg-theme-yellow-100 px-2 py-1">
      <span className="text-[10px] font-bold uppercase text-theme-yellow-800">
        {tag}
      </span>
    </div>
  )
}

export const CoffeeCard: FunctionComponent<CoffeeCardProps> = ({ coffee }) => {
  const coffeePriceFormatted = coffee.price
    .toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
    })
    .replace('.', ',')

  return (
    <div className="flex min-h-[310px] w-full max-w-[256px] flex-col items-center justify-between rounded-bl-[36px] rounded-br-md rounded-tl-md rounded-tr-[36px] bg-theme-white-300 px-5 pb-5 text-center">
      <div>
        <img
          src={coffee.image}
          alt={coffee.name}
          className="mx-auto -mt-5 h-32 w-32"
        />
        <div className="mt-3 flex w-full justify-center gap-1">
          {coffee.tag.map((tag) => (
            <CoffeeTag key={tag} tag={tag} />
          ))}
        </div>
        <Title size="S" className="mt-4 text-theme-gray-600">
          {coffee.name}
        </Title>
        <Text size="S" className="mt-2 text-theme-gray-400">
          {coffee.description}
        </Text>
      </div>

      <footer className="mx-auto flex items-center">
        <div className="mr-6 flex items-baseline gap-1">
          <Text size="S" className="text-theme-gray-500">
            R$
          </Text>
          <Title size="M" className="text-theme-gray-500">
            {coffeePriceFormatted}
          </Title>
        </div>

        <Input.Number />

        <button
          type="button"
          className="ml-2 flex h-[38px] w-[38px] items-center justify-center rounded-md bg-theme-purple-800 text-theme-white-300 transition-colors hover:bg-theme-purple-500"
        >
          <ShoppingCart size={22} weight="fill" />
        </button>
      </footer>
    </div>
  )
}
