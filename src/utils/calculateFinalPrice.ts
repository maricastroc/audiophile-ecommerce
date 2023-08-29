export function calculateFinalPrice(value: number) {
  const shipping = 50
  const vat = (20 * value) / 100
  const total = value + vat + shipping
  return total
}
