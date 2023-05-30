import { Title } from '../components/Title'
import * as Input from '../components/Input'
import { CreditCard, CurrencyDollar, MapPinLine } from '@phosphor-icons/react'
import { Text } from '../components/Text'
import { Root as SelectRadioContainer } from '@radix-ui/react-radio-group'
import { SelectRadioItem } from '../components/SelectRadioItem'
import { CoffeeCartItem } from '../components/CoffeeCartItem'

export function Checkout() {
  return (
    <main className="grid grid-cols-[2fr,1fr] gap-8 px-40 pb-40 pt-10">
      <section>
        <Title size="XS">Complete seu pedido</Title>

        <div className="mt-4 w-full rounded-md bg-theme-white-300 p-10">
          <div className="flex items-start gap-3">
            <MapPinLine size={22} className="text-theme-yellow-800" />

            <div>
              <Text size="M">Endereço de entrega</Text>
              <Text size="S" className="mt-1 text-theme-gray-500">
                Informe o endereço onde deseja receber seu pedido
              </Text>
            </div>
          </div>

          <form className=" mt-8 flex w-full flex-col gap-4">
            <Input.Text
              type="text"
              placeholder="CEP"
              className="max-w-[200px]"
            />
            <Input.Text type="text" placeholder="Rua" />

            <div className="grid grid-cols-[1fr,2fr] gap-3">
              <Input.Text type="number" placeholder="Número" />
              <Input.Text type="text" placeholder="Complemento" isOptional />

              <Input.Text type="text" placeholder="Bairro" />

              <div className="flex items-center gap-3">
                <Input.Text
                  type="text"
                  placeholder="Cidade"
                  className="flex-1"
                />
                <Input.Text
                  type="text"
                  placeholder="UF"
                  className="max-w-[60px]"
                  maxLength={2}
                />
              </div>
            </div>
          </form>
        </div>

        <div className="mt-4 w-full rounded-md bg-theme-white-300 p-10">
          <div className="flex items-start gap-3">
            <CurrencyDollar size={22} className="text-theme-purple-500" />

            <div>
              <Text size="M">Pagamento</Text>
              <Text size="S" className="mt-1 text-theme-gray-500">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </Text>
            </div>
          </div>

          <SelectRadioContainer className="mt-8 flex items-center gap-3">
            <SelectRadioItem value="creditCard">
              <CreditCard size={16} className="text-theme-purple-500" />
              cartão de crédito
            </SelectRadioItem>
            <SelectRadioItem value="debitCard">
              <CreditCard size={16} className="text-theme-purple-500" />
              cartão de débito
            </SelectRadioItem>
            <SelectRadioItem value="money">
              <CreditCard size={16} className="text-theme-purple-500" />
              dinheiro
            </SelectRadioItem>
          </SelectRadioContainer>
        </div>
      </section>
      <section>
        <Title size="XS">Cafés selecionados</Title>

        <div className="mt-4 rounded-bl-[36px] rounded-br-md rounded-tl-md rounded-tr-[36px] bg-theme-white-300 p-10">
          <CoffeeCartItem />

          <div className="mt-6 flex w-full flex-col gap-3">
            <div className="flex items-center justify-between">
              <Text size="S" className="text-theme-gray-500">
                Total de itens
              </Text>
              <Text size="M" className="text-theme-gray-800">
                R$ 29,90
              </Text>
            </div>
            <div className="flex items-center justify-between">
              <Text size="S" className="text-theme-gray-500">
                Entrega
              </Text>
              <Text size="M" className="text-theme-gray-800">
                R$ 3,00
              </Text>
            </div>
            <div className="flex items-center justify-between">
              <Text size="L" weight="bold" className="text-theme-gray-600">
                Total
              </Text>
              <Text size="L" weight="bold" className="text-theme-gray-600">
                R$ 29,90
              </Text>
            </div>
          </div>

          <button
            type="button"
            className="mt-8 w-full rounded-md bg-theme-yellow-500 px-2 py-3 text-center text-sm font-bold uppercase text-theme-white-100 transition-colors duration-200 hover:bg-theme-yellow-800"
          >
            confirmar pedido
          </button>
        </div>
      </section>
    </main>
  )
}
