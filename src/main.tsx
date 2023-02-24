import getQuotes from "./utils/getQuotes";
import { ButtonBase } from "@mui/material";
import { useEffect, useState } from "react";

import "./style.scss";

export default function Main() {
  const [data, setData] = useState<Quote>();
  const [color, setColor] = useState<string>();

  useEffect(() => {
    generateQuote();
  }, []);

  const generateQuote = async () => {
    setData(await getQuotes());
    setColor("#" + Math.floor(Math.random() * 16777215).toString(16));
  };

  return (
    <div className="main" style={{ background: color }}>
      <div className="container" style={{ color: color }}>
        <div className="quote">
          <p>
            <b>❝</b>
            {data?.text}
          </p>
          <div className="quote-author">
            - {data?.author || "Secret Author"}
          </div>
          <ButtonBase
            className="quote-button"
            onClick={() => {
              generateQuote();
            }}
          >
            Next Quote
          </ButtonBase>
        </div>
      </div>
    </div>
  );

  interface Quote {
    text?: string;
    author?: string;
  }
}
