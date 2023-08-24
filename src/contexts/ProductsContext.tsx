import { ShopProductInfo } from '@/types/shopType'
import { createContext, ReactNode, useEffect, useState } from 'react'

interface ProductsContextData {
  shopList: ShopProductInfo[]
  handleAddProduct: (product: ShopProductInfo, quantity: number) => void
  handleRemoveProduct: (product: ShopProductInfo, quantity: number) => void
}

export const ProductsContext = createContext<ProductsContextData>(
  {} as ProductsContextData,
)

interface ProductsContextProviderProps {
  children: ReactNode
}

export function ProductsContextProvider({
  children,
}: ProductsContextProviderProps) {
  const storedShopList =
    typeof window !== 'undefined' ? localStorage.getItem('shopList') : null
  const initialShopList = storedShopList ? JSON.parse(storedShopList) : []

  const [shopList, setShopList] = useState<ShopProductInfo[]>(initialShopList)

  useEffect(() => {
    const storedShopList = localStorage.getItem('shopList')
    if (storedShopList) {
      setShopList(JSON.parse(storedShopList))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('shopList', JSON.stringify(shopList))
  }, [shopList])

  function handleAddProduct(product: ShopProductInfo, quantityToAdd: number) {
    const existingProduct = shopList.find(
      (item) => item.title === product.title,
    )

    if (existingProduct) {
      const updatedShopList = shopList.map((item) =>
        item.title === product.title
          ? { ...item, quantity: item.quantity + quantityToAdd }
          : item,
      )
      setShopList(updatedShopList)
    } else {
      setShopList((prevShopList) => [
        ...prevShopList,
        { ...product, quantity: quantityToAdd },
      ])
    }
  }

  function handleRemoveProduct(
    product: ShopProductInfo,
    quantityToRemove: number,
  ) {
    const existingProduct = shopList.find(
      (item) => item.title === product.title,
    )

    if (existingProduct) {
      if (existingProduct.quantity > 1) {
        const updatedShopList = shopList.map((item) =>
          item.title === product.title
            ? { ...item, quantity: item.quantity - quantityToRemove }
            : item,
        )
        setShopList(updatedShopList)
      } else {
        const updatedShopList = shopList.filter(
          (item) => item.title !== product.title,
        )
        setShopList(updatedShopList)
      }
    }
  }

  const ProductsContextValue: ProductsContextData = {
    shopList,
    handleAddProduct,
    handleRemoveProduct,
  }

  return (
    <ProductsContext.Provider value={ProductsContextValue}>
      {children}
    </ProductsContext.Provider>
  )
}
