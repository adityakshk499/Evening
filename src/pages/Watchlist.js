import { useSelector } from "react-redux";
import Cards from "../components/Cards";

function Watchlist() {
  var data = useSelector((store) => store.watchlistSlice);
  console.log(data);
  return data.length == 0 ? (
    <div> No data </div>
  ) : (
    <div>
      <Cards apiData={data} />
    </div>
  );
}

export default Watchlist;
