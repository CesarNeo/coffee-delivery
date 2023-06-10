import clsx from 'clsx'
import { FunctionComponent, ReactNode } from 'react'

type TextProps = {
  children: ReactNode
  size?: 'L' | 'M' | 'S' | 'XS'
  weight?: 'bold' | 'normal'
  className?: string
}

export const Text: FunctionComponent<TextProps> = ({
  children,
  size = 'M',
  weight = 'normal',
  className,
}) => {
  return (
    <p
      className={clsx(`leading-snug ${className}`, {
        'text-lg font-bold md:text-xl': size === 'L' && weight === 'bold',
        'text-lg font-normal md:text-xl': size === 'L' && weight === 'normal',
        'text-base font-bold': size === 'M' && weight === 'bold',
        'text-base font-normal': size === 'M' && weight === 'normal',
        'text-sm': size === 'S',
        'text-xs font-bold': size === 'XS',
      })}
    >
      {children}
    </p>
  )
}
