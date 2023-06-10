import { Title } from '../components/Title'
import * as Input from '../components/Input'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'
import { Text } from '../components/Text'
import { Root as SelectRadioContainer } from '@radix-ui/react-radio-group'
import { SelectRadioItem } from '../components/SelectRadioItem'
import { CoffeeCartItem } from '../components/CoffeeCartItem'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../hooks/cart'
import { formatPriceWithDollarSign } from '../utils/functions/format-price'
import { PaymentMethod } from '../types/payment'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  CheckoutOrderFormData,
  checkoutOrderAddressSchema,
} from '../utils/zod-validations/checkout-address'
import { ChangeEvent, useCallback } from 'react'
import { findAddressRequest } from '../services/http/address'

export function Checkout() {
  const navigate = useNavigate()
  const { coffee, addPaymentMethod, paymentMethod } = useCart()
  const {
    register,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm<CheckoutOrderFormData>({
    resolver: zodResolver(checkoutOrderAddressSchema),
  })

  const handleConfirmOrder = () => {
    handleSubmit((data) => {
      console.log(data)
    })()
    navigate('/success')
  }

  const totalCoffeePrice = coffee.reduce((acc, coffee) => {
    return acc + coffee.price * coffee.quantity!
  }, 0)
  const totalOrderPrice = formatPriceWithDollarSign(totalCoffeePrice + 3)
  const deliveryPrice = formatPriceWithDollarSign(3)
  const totalCoffeePriceFormatted = formatPriceWithDollarSign(totalCoffeePrice)

  function handlePaymentMethodChange(value: string) {
    const paymentMethod = value as PaymentMethod
    addPaymentMethod(paymentMethod)
  }

  const checkZipCode = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target
      if (!value) return

      const cep = value.replace(/\D/g, '')
      const address = await findAddressRequest(cep)

      if (address) {
        const { logradouro, complemento, uf, localidade, bairro } = address
        setValue('street', logradouro || '')
        setValue('complement', complemento || '')
        setValue('state', uf || '')
        setValue('city', localidade || '')
        setValue('neighborhood', bairro || '')
      }
    },
    [setValue],
  )

  return (
    <main className="flex flex-col gap-8 px-6 pb-20 pt-5 md:grid md:grid-cols-[2fr,1fr] md:px-40 md:pb-40 md:pt-10">
      <section>
        <Title size="XS">Complete seu pedido</Title>

        <div className="mt-4 w-full rounded-md bg-theme-white-300 p-5 md:p-10">
          <div className="flex items-start gap-3">
            <MapPinLine className="h-5 w-5 text-theme-yellow-800 md:h-[22px] md:w-[22px]" />

            <div>
              <Text size="M">Endereço de entrega</Text>
              <Text size="S" className="mt-1 text-theme-gray-500">
                Informe o endereço onde deseja receber seu pedido
              </Text>
            </div>
          </div>

          <div className="mt-8 flex w-full flex-col gap-4">
            <Input.Text
              type="number"
              placeholder="CEP"
              className="md:max-w-[200px]"
              {...register('zipCode')}
              error={errors.zipCode?.message}
              onBlur={checkZipCode}
            />
            <Input.Text
              type="text"
              placeholder="Rua"
              {...register('street')}
              error={errors.street?.message}
            />

            <div className="grid gap-3 md:grid-cols-[1fr,2fr]">
              <Input.Text
                type="number"
                placeholder="Número"
                {...register('number')}
                error={errors.number?.message}
              />
              <Input.Text
                type="text"
                placeholder="Complemento"
                isOptional
                {...register('complement')}
              />

              <Input.Text
                type="text"
                placeholder="Bairro"
                {...register('neighborhood')}
                error={errors.neighborhood?.message}
              />

              <div className="flex gap-3 md:items-center">
                <Input.Text
                  type="text"
                  placeholder="Cidade"
                  className="flex-1"
                  {...register('city')}
                  error={errors.city?.message}
                />
                <Input.Text
                  type="text"
                  placeholder="UF"
                  className="max-w-[60px]"
                  maxLength={2}
                  {...register('state')}
                  error={errors.state?.message}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 w-full rounded-md bg-theme-white-300 p-5 md:p-10">
          <div className="flex items-start gap-3">
            <CurrencyDollar size={22} className="text-theme-purple-500" />

            <div>
              <Text size="M">Pagamento</Text>
              <Text size="S" className="mt-1 text-theme-gray-500">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </Text>
            </div>
          </div>

          <SelectRadioContainer
            className="mt-8 flex flex-col gap-3 md:flex-row md:items-center"
            onValueChange={handlePaymentMethodChange}
            value={paymentMethod}
          >
            <SelectRadioItem value="creditCard">
              <CreditCard size={16} className="text-theme-purple-500" />
              cartão de crédito
            </SelectRadioItem>
            <SelectRadioItem value="debitCard">
              <Bank size={16} className="text-theme-purple-500" />
              cartão de débito
            </SelectRadioItem>
            <SelectRadioItem value="money">
              <Money size={16} className="text-theme-purple-500" />
              dinheiro
            </SelectRadioItem>
          </SelectRadioContainer>
        </div>
      </section>
      <section>
        <Title size="XS">Cafés selecionados</Title>

        <div className="mt-4 rounded-bl-[36px] rounded-br-md rounded-tl-md rounded-tr-[36px] bg-theme-white-300 p-5 md:p-10">
          <div className="flex flex-col gap-6">
            {coffee.map((coffee) => (
              <CoffeeCartItem key={coffee.id} coffee={coffee} />
            ))}
          </div>

          <div className="mt-6 flex w-full flex-col gap-3">
            <div className="flex items-center justify-between">
              <Text size="S" className="text-theme-gray-500">
                Total de itens
              </Text>
              <Text size="M" className="text-theme-gray-800">
                {totalCoffeePriceFormatted}
              </Text>
            </div>
            <div className="flex items-center justify-between">
              <Text size="S" className="text-theme-gray-500">
                Entrega
              </Text>
              <Text size="M" className="text-theme-gray-800">
                {deliveryPrice}
              </Text>
            </div>
            <div className="flex items-center justify-between">
              <Text size="L" weight="bold" className="text-theme-gray-600">
                Total
              </Text>
              <Text size="L" weight="bold" className="text-theme-gray-600">
                {totalOrderPrice}
              </Text>
            </div>
          </div>

          <button
            onClick={handleConfirmOrder}
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
