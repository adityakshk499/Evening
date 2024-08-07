import { useState, useEffect } from "react";
import Cards from "../components/Cards";
function Trending() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const options = { method: "GET", headers: { accept: "application/json" } };

    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false",
      options
    )
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  }, []);

  if (data.length === 0) {
    return <div>Dummy UI Loading </div>;
  } else {
    return (
      <div>
        <Cards apiData={data} />
      </div>
    );
  }
}

export default Trending;
