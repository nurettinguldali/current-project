function price_calculator(response) {
  const pizza_price = (response.data[1].quote.USD.price * 10000).toFixed(2);
  const pizza_price_dollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(pizza_price);
  console.log(
    "Pizza Price has been calculated and formatted. It is " + pizza_price_dollar
  );
  return pizza_price_dollar;
}
module.exports = price_calculator;
