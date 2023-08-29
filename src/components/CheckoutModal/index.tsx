import * as Dialog from '@radix-ui/react-dialog'
import {
  Overlay,
  Description,
  Title,
  Content,
  RemoveButton,
  ShopItemsContainer,
  CloseButton,
  TotalContainer,
} from './styles'
import { ModalItemCard } from '../ModalItemCard'
import { useContext } from 'react'
import { ProductsContext } from '@/contexts/ProductsContext'
import { formattedPrice } from '@/utils/formatPrice'
import { useRouter } from 'next/router'

export function CheckoutModal() {
  const {
    shopList,
    calculateTotalPrice,
    calculateProductsQuantity,
    handleClearShopList,
  } = useContext(ProductsContext)

  const router = useRouter()

  const productsQuantity = calculateProductsQuantity()

  async function redirectToCheckout() {
    const basePath = router.basePath

    productsQuantity > 0 && (await router.push(`${basePath}/checkout`))
  }

  return (
    <Dialog.Portal>
      <Overlay className="DialogOverlay" />
      <Content className="DialogContent">
        <Title className="DialogTitle">
          <h3>{`Cart (${productsQuantity})`}</h3>
          <RemoveButton onClick={() => handleClearShopList(shopList)}>
            Remove all
          </RemoveButton>
        </Title>
        <Description className="DialogDescription">
          <ShopItemsContainer>
            {shopList.map((item, index) => {
              if (item.quantity > 0) {
                return <ModalItemCard key={index} data={item} />
              }
              return null
            })}
          </ShopItemsContainer>
          <TotalContainer>
            <p>Total</p>
            <span>{formattedPrice(calculateTotalPrice())}</span>
          </TotalContainer>
        </Description>
        <CloseButton
          onClick={redirectToCheckout}
          disabled={productsQuantity === 0}
        >
          Checkout
        </CloseButton>
      </Content>
    </Dialog.Portal>
  )
}
