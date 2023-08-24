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
  description: string
  imageUrl: string
  newProduct: boolean
  orientation?: string
  name: string
  category: string
  price?: number
  features?: string
  inTheBox?: InTheBoxProps[]
  demoImage?: string
  mayAlsoLike?: SuggestionProps[]
}
