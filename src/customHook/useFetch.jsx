import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [result, setResult] = useState(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        
        if (!json.status) {
            throw new Error("Internal Server Error");
        }

        const data = await json.data;
        setResult(data);
        setHidden(true);
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
  }, [url]);

  return { result, hidden };
};

export default useFetch;
