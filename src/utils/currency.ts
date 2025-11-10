export function formatUSD(amount: number, minimumFractionDigits: number = 2): string {
  if (isNaN(amount)) return "$0.00";

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits,
    maximumFractionDigits: minimumFractionDigits
  }).format(amount);
}
