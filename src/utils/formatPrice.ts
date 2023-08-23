export function formattedPrice(priceInDollars: number) {
  const formattedPrice = priceInDollars.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return formattedPrice
}
