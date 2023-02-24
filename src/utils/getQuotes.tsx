import axios from "axios";
import randomNumber from "./randomNumber";

export default async function getQuotes() {
  try {
    const res = await axios.get(`https://type.fit/api/quotes`);
    let quote = res.data[randomNumber(0, 999)];
    return {
      text: quote.text,
      author: quote.author,
    };
  } catch (err) {
    console.log(err);
  }
}
