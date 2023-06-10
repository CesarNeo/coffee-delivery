import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { Text } from '../components/Text'
import { Title } from '../components/Title'

import motoboyImage from '../assets/motoboy.svg'
import motoboyFloorImage from '../assets/motoboy-floor.svg'

export function Success() {
  return (
    <main className="px-6 py-10 md:px-40 md:py-20">
      <Title size="L" className="text-theme-yellow-800">
        Uhu! Pedido confirmado
      </Title>
      <Text size="L" className="mt-1">
        Agora é só aguardar que logo o café chegará até você
      </Text>

      <div className="grid items-start gap-[102px] md:grid-cols-2">
        <div className="mt-10 flex flex-col gap-8 rounded-bl-[36px] rounded-br-md rounded-tl-md rounded-tr-[36px] border border-theme-yellow-500 p-10">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-theme-purple-500 p-2">
              <MapPin
                size={16}
                weight="fill"
                className="text-theme-white-100"
              />
            </div>
            <span className="max-w-xs leading-tight text-theme-gray-500">
              Entrega em <strong>Rua João Daniel Martinelli, 102</strong>{' '}
              Farrapos - Porto Alegre, RS
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-theme-yellow-500 p-2">
              <Timer size={16} weight="fill" className="text-theme-white-100" />
            </div>
            <div className="max-w-xs leading-tight">
              <span className="block text-theme-gray-500">
                Previsão de entrega
              </span>
              <strong className="text-theme-gray-500">20 min - 30 min</strong>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-theme-yellow-800 p-2">
              <CurrencyDollar size={16} className="text-theme-white-100" />
            </div>
            <div className="max-w-xs leading-tight">
              <span className="block text-theme-gray-500">
                Pagamento na entrega
              </span>
              <strong className="text-theme-gray-500">Cartão de crédito</strong>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={motoboyImage} alt="" className="z-10 animate-bounce" />
          <img
            src={motoboyFloorImage}
            alt=""
            className="absolute bottom-0 left-0 -z-0"
          />
        </div>
      </div>
    </main>
  )
}
