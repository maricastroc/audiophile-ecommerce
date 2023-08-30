export interface InTheBoxProps {
  product: string
  quantity: number
}

export interface SuggestionProps {
  name: string
  link: string
  path: string
  category: string
}

export interface ProductInfo {
  title: string
  abbreviation: string
  description: string
  imageUrl: string
  isNewProduct: boolean
  imageOrientation?: string
  name: string
  category: string
  price?: number
  features?: string
  itemsInTheBox?: InTheBoxProps[]
  demoImageUrl?: string
  relatedProducts?: SuggestionProps[]
}
