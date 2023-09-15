import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const API = "https://jsonplaceholder.typicode.com/posts";

  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      const res = await axios.get(url);
      setResponse(res.data);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData(API);
  }, [API]);

  return { isLoading, error, response };
};

export default useFetch;
