export function formatNumber(value = 0) {
    return new Intl.NumberFormat("en-IN", { maximumFractionDigits: 2 }).format(value);
}