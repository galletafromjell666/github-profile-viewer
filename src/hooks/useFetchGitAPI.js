import { useState } from "react";

function useFetchGitAPI() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function fetchData(endpoint) {
    try {
      setError(false);
      setLoading(true);
      const url = `https://api.github.com/users/${endpoint}`;
      const response = await fetch(url);
      if (response.ok) {
        const result = await response.json();
        setData(result);
      } else {
        setError(res.statusText || "Opps, Something went wrong.");
      }
    } catch (e) {
      setError(e);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, Math.floor(Math.random() * (950 - 550 + 1)) + 550);
    }
  }

  return { data, isLoading, error, fetchData };
}

export default useFetchGitAPI;
