export const formatter = (currency: string, amount: number) => {
  const formatter = new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency,
  })

  return formatter.format(amount)
}
