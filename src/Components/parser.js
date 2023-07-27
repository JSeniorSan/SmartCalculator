const getData = async (currensy) => {
  const cheerio = require("cheerio");
  const axios = require("axios");
  const url = "https://www.banki.ru/products/currency/cb/";
  const array = [];
  const response = await axios.get(url);
  console.log(response);

  const $ = cheerio.load(response.data);
  console.log($);
  const regex = new RegExp(currensy);

  $("tr").each((_e, i) => {
    if ($(i).text().match(regex)) {
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
