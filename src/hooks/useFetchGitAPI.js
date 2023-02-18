import { useState } from "react";

function useFetchGitAPI() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData(endpoint) {
    try {
      setLoading(true);
      const url = `https://api.github.com/users/${endpoint}`;
      const response = await fetch(url);
      if (response.ok) {
        const result = await response.json();
        console.log("data set", result);
        setData(result);
      } else {
        setError(res.statusText || "Oh no :(.");
      }
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }

  return { data, loading, error, fetchData };
}

export default useFetchGitAPI;
