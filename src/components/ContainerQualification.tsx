import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import clsx from 'clsx'
import { FunctionComponent } from 'react'
import { Text } from './Text'

type ContainerQualificationProps = {
  description: string
  icon: 'coffee' | 'package' | 'shopping-cart' | 'timer'
}

const qualificationIcons = {
  coffee: <Coffee size={16} weight="fill" />,
  package: <Package size={16} weight="fill" />,
  'shopping-cart': <ShoppingCart size={16} weight="fill" />,
  timer: <Timer size={16} weight="fill" />,
}

export const ContainerQualification: FunctionComponent<
  ContainerQualificationProps
> = ({ description, icon }) => {
  return (
    <div className="flex items-center gap-3">
      <div
        className={clsx(
          'flex items-center justify-center rounded-full p-2 text-theme-white-200',
          {
            'bg-theme-purple-500': icon === 'coffee',
            'bg-theme-gray-500': icon === 'package',
            'bg-theme-yellow-800': icon === 'shopping-cart',
            'bg-theme-yellow-500': icon === 'timer',
          },
        )}
      >
        {qualificationIcons[icon]}
      </div>
      <Text size="M" className="whitespace-nowrap">
        {description}
      </Text>
    </div>
  )
}
