import axios from "axios";

const getData = async (currency) => {
  const cheerio = require("cheerio");
  // const axios = require("axios");
  let url = "https://www.banki.ru/products/currency/cb/";
  const array = [];
  const response = await axios.get(url).then((x) => {
    console.log(x);
    console.log(x.data);

    return x.data;
  });

  let $ = cheerio.load(response);
  console.log($);
  const regex = new RegExp(currency);

  $("tr").each((_e, i) => {
    if ($(i).text().match(regex)) {
      console.log($(i).children().html());

      $(i)
        .children()
        .each((_e, x) => {
          array.push($(x).html());
        });
    }
  });

  return array[3];
};
export default getData;
