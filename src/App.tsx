import { ContainerQualification } from './components/ContainerQualification'
import { Header } from './components/Header'
import { Text } from './components/Text'
import { Title } from './components/Title'

import coffeeDeliveryBanner from './assets/coffee-delivery-banner.png'
import { CoffeeCard } from './components/CoffeeCard'
import { COFFEE_DATA } from './utils/constants/coffee'

function App() {
  return (
    <main className="pb-40">
      <Header />
      <div className="grid grid-cols-2 items-center gap-14 bg-[url('./assets/background.svg')] bg-cover bg-center bg-no-repeat px-40 pb-28 pt-24">
        <div>
          <Title className="max-w-[588px] text-theme-gray-700">
            Encontre o café perfeito para qualquer hora do dia
          </Title>
          <Text size="L" weight="normal" className="mt-4 max-w-[588px]">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </Text>

          <div className="mt-16 grid grid-cols-2 gap-10 gap-y-5">
            <ContainerQualification
              icon="shopping-cart"
              description="Compra simples e segura"
            />
            <ContainerQualification
              icon="package"
              description="Embalagem mantém o café intacto"
            />
            <ContainerQualification
              icon="timer"
              description="Entrega rápida e rastreada"
            />
            <ContainerQualification
              icon="coffee"
              description="O café chega fresquinho até você"
            />
          </div>
        </div>

        <img
          src={coffeeDeliveryBanner}
          alt="Coffee Delivery"
          className="h-full max-h-[360px] w-full max-w-[476px]"
        />
      </div>

      <div className="mt-8 px-40">
        <Title size="L" className="text-theme-gray-700">
          Nossos cafés
        </Title>

        <div className="mt-14 grid grid-cols-[repeat(auto-fill,256px)] gap-x-8 gap-y-10">
          {COFFEE_DATA.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default App
