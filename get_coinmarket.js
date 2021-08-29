function get_coinmarketcap(response) {
  const price_calculator = require("./price_calculator.js");

  const axios = require("axios");
  axios
    .get(process.env.BITCOIN_API_URL, {
      params: {
        id: 1,
      },
      headers: {
        "X-CMC_PRO_API_KEY": process.env.BITCOIN_API_KEY,
      },
    })
    .then((bitcoinPriceResponse) => {
      if (bitcoinPriceResponse.data.status.error_code == 0) {
        console.log("success");
        //console.log(response.data);
        const pizza_price_dollar = price_calculator(bitcoinPriceResponse);
        console.log("The price for the bitcoin pizza is " + pizza_price_dollar);
        response.render("index.ejs", { price: pizza_price_dollar });
      }
    })
    .catch((err) => {
      console.log("API call error:", err.message);
    });
}
module.exports = get_coinmarketcap;
