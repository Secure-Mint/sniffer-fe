export function formatNumber(amount: number, minimumFractionDigits: number = 0): string {
  if (isNaN(amount)) return "0.00";

  return new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits,
    maximumFractionDigits: minimumFractionDigits
  }).format(amount);
}
