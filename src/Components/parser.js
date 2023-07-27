const cheerio = require("cheerio");
const axios = require("axios");
url = "https://www.banki.ru/products/currency/cb/";

const getData = async (currensy) => {
  const array = [];
  const response = await axios.get(url);
  console.log(response);
  const regex = new RegExp(currensy);

  const $ = cheerio.load(response.data);
  console.log($);

  $("tr").each((e, i) => {
    if ($(i).text().match(regex)) {
      $(i)
        .children()
        .each((e, x) => {
          array.push($(x).html());
        });
    }
  });
};
