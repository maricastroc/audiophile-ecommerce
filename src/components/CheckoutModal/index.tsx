import * as Dialog from '@radix-ui/react-dialog'
import {
  Overlay,
  Description,
  Title,
  Content,
  RemoveButton,
  ShopItemsContainer,
  CloseButton,
} from './styles'
import { ModalItemCard } from '../ModalItemCard'
import { useContext } from 'react'
import { ProductsContext } from '@/contexts/ProductsContext'

export function CheckoutModal() {
  const { shopList } = useContext(ProductsContext)
  console.log(shopList)

  return (
    <Dialog.Portal>
      <Overlay className="DialogOverlay" />
      <Content className="DialogContent">
        <Title className="DialogTitle">
          <h3>Cart</h3>
          <RemoveButton>Remove all</RemoveButton>
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
        </Description>
        <CloseButton>Checkout</CloseButton>
      </Content>
    </Dialog.Portal>
  )
}
