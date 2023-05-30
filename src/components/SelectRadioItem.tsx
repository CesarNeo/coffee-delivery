import * as RadioGroup from '@radix-ui/react-radio-group'
import { ComponentProps, FunctionComponent } from 'react'

type SelectRadioItemProps = ComponentProps<typeof RadioGroup.Item>

export const SelectRadioItem: FunctionComponent<SelectRadioItemProps> = (
  props,
) => {
  return (
    <RadioGroup.Item
      className="group min-w-[178px] rounded-md border border-transparent bg-theme-white-500 p-4 transition-colors hover:bg-theme-gray-100 data-[state=checked]:border-theme-purple-500"
      {...props}
    >
      <span className="flex items-center gap-3 text-xs uppercase text-theme-gray-500 transition-colors group-hover:text-theme-gray-600">
        {props.children}
      </span>
    </RadioGroup.Item>
  )
}
