import Image from 'next/image'
import { Container, ModalItemInfo, ModalItemText } from './styles'
import { ModalQuantityButton } from '../ModalQuantityButton'
import { formattedPrice } from '@/utils/formatPrice'
import { ShopProductInfo } from '@/types/shopType'

interface ModalItemCardProps {
  data: ShopProductInfo
}

export function ModalItemCard({ data }: ModalItemCardProps) {
  return (
    <Container>
      <ModalItemInfo>
        <Image
          alt=""
          width={64}
          height={64}
          src={`${data.imageUrl}mobile/image-product.jpg`}
        />
        <ModalItemText>
          <p>{data.abbreviation}</p>
          <span>{formattedPrice(data.price)}</span>
        </ModalItemText>
      </ModalItemInfo>
      <ModalQuantityButton product={data} />
    </Container>
  )
}
