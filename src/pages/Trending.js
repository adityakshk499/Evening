import { useState, useEffect } from "react";

function Trending() {
  console.log("Inside Function");
  const [example, setExample] = useState(0);

  useEffect(() => {
    let intervalID = setInterval(() => {
      console.log("PLease login ");
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, [example]);

  return (
    <div>
      {console.log("Inside return ")}
      <button onClick={() => setExample(example + 1)}>Example {example}</button>
    </div>
  );
}

export default Trending;
