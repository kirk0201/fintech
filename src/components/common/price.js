export default function Price(price) {
  const priceNumber = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return priceNumber;
}
