import clsx from 'clsx'
import { FunctionComponent, ReactNode } from 'react'

type TitleProps = {
  children: ReactNode
  size?: 'XL' | 'L' | 'M' | 'S' | 'XS'
  className?: string
}

export const Title: FunctionComponent<TitleProps> = ({
  children,
  size = 'XL',
  className,
}) => {
  return (
    <h1
      className={clsx(`font-alt leading-snug ${className}`, {
        'text-5xl font-extrabold': size === 'XL',
        'text-3xl font-extrabold': size === 'L',
        'text-2xl font-extrabold': size === 'M',
        'text-xl font-bold': size === 'S',
        'text-lg font-bold': size === 'XS',
      })}
    >
      {children}
    </h1>
  )
}
