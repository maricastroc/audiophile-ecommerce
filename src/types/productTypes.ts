export interface InTheBoxProps {
  product: string
  quantity: number
}

export interface ImagesProps {
  link: string
  position: number
}

export interface ProductInfo {
  title: string
  description: string
  imageUrl: string
  newProduct: boolean
  orientation?: string
  name: string
  category: string
  price?: number
  features?: string
  inTheBox?: InTheBoxProps[]
  images?: ImagesProps[]
}
