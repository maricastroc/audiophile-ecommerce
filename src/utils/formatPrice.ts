export function formattedPrice(priceInDollars: number) {
  const formattedPrice = priceInDollars?.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  const withoutTrailingZeros = formattedPrice?.replace(/\.00$/, '')

  return withoutTrailingZeros
}
