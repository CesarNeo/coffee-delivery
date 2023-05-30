import {
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  forwardRef,
} from 'react'

type InputTextProps = InputHTMLAttributes<HTMLInputElement> & {
  isOptional?: boolean
}

export const InputText: ForwardRefRenderFunction<
  HTMLInputElement,
  InputTextProps
> = ({ isOptional, className, ...rest }, ref) => {
  return (
    <div
      className={`flex items-center gap-1 overflow-hidden rounded border border-theme-white-500 bg-theme-white-400 p-3 focus-within:border-theme-yellow-800 ${className}`}
    >
      <input
        ref={ref}
        {...rest}
        className="peer flex-1 bg-transparent font-sans text-sm text-theme-gray-500 outline-none placeholder:text-theme-gray-400"
      />
      {isOptional && (
        <span className="text-xs italic text-theme-gray-400">Opcional</span>
      )}
    </div>
  )
}

export const Text = forwardRef(InputText)
