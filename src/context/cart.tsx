import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { Coffee } from '../types/coffee'
import { toast } from 'react-hot-toast'
import { PaymentMethod } from '../types/payment'
import { produce } from 'immer'

type CartContextData = {
  coffee: Coffee[]
  paymentMethod: PaymentMethod
  addCoffee: (coffee: Coffee) => void
  removeCoffee: (coffeeId: number) => void
  addPaymentMethod: (paymentMethod: PaymentMethod) => void
  incrementCoffeeQuantity: (coffeeId: number) => void
  decrementCoffeeQuantity: (coffeeId: number) => void
}

export const CartContext = createContext<CartContextData>({} as CartContextData)

export function CartProvider({ children }: { children: ReactNode }) {
  const [coffee, setCoffee] = useState<Coffee[]>(() => {
    const coffeeLocalStorage = localStorage.getItem('@CoffeeDelivery:cart')

    if (coffeeLocalStorage) {
      return JSON.parse(coffeeLocalStorage)
    }

    return []
  })
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(() => {
    const paymentMethodLocalStorage = localStorage.getItem(
      '@CoffeeDelivery:paymentMethod',
    )

    if (paymentMethodLocalStorage) {
      return paymentMethodLocalStorage as PaymentMethod
    }

    return undefined
  })

  const addCoffee = useCallback(
    (coffeeData: Coffee) => {
      const coffeeExistsInCart = coffee.find(
        (coffeeCart) => coffeeCart.id === coffeeData.id,
      )

      if (coffeeExistsInCart) {
        setCoffee((state) => {
          return produce(state, (draft) => {
            draft.forEach((coffee) => {
              if (coffee.id === coffeeData.id) {
                coffee.quantity! += 1
              }
            })
          })
        })

        return
      }
      const newCoffee = { ...coffeeData, quantity: 1 }

      setCoffee((state) => {
        return produce(state, (draft) => {
          draft.push(newCoffee)
        })
      })

      toast.success(`${newCoffee.name} adicionado ao carrinho!`)
    },
    [coffee],
  )

  const removeCoffee = useCallback(
    (coffeeId: number) => {
      const coffeeIndex = coffee.findIndex((coffee) => coffee.id === coffeeId)

      if (coffeeIndex === -1) return

      setCoffee((state) => {
        return produce(state, (draft) => {
          draft.splice(coffeeIndex, 1)
        })
      })

      toast.error('Item removido do carrinho!')
    },
    [coffee],
  )

  const incrementCoffeeQuantity = useCallback(
    (coffeeId: number) => {
      const coffeeIndex = coffee.findIndex((coffee) => coffee.id === coffeeId)

      if (coffeeIndex === -1) return

      setCoffee((state) => {
        return produce(state, (draft) => {
          draft[coffeeIndex].quantity! += 1
        })
      })
    },
    [coffee],
  )

  const decrementCoffeeQuantity = useCallback(
    (coffeeId: number) => {
      const coffeeIndex = coffee.findIndex((coffee) => coffee.id === coffeeId)

      if (coffeeIndex === -1) return

      setCoffee((state) => {
        return produce(state, (draft) => {
          if (draft[coffeeIndex].quantity === 1) {
            draft.splice(coffeeIndex, 1)
            return
          }

          draft[coffeeIndex].quantity! -= 1
        })
      })
    },
    [coffee],
  )

  const addPaymentMethod = useCallback((newPaymentMethod: PaymentMethod) => {
    setPaymentMethod(newPaymentMethod)

    localStorage.setItem(
      '@CoffeeDelivery:paymentMethod',
      newPaymentMethod as string,
    )
  }, [])

  useEffect(() => {
    localStorage.setItem('@CoffeeDelivery:cart', JSON.stringify(coffee))
  }, [coffee])

  return (
    <CartContext.Provider
      value={{
        coffee,
        paymentMethod,
        addCoffee,
        removeCoffee,
        addPaymentMethod,
        incrementCoffeeQuantity,
        decrementCoffeeQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
