import { useState, useEffect } from "react";

export const getPayload = async (response: Response) => {
  let payload;
  try {
    payload = await response.json();
  } catch (e) {
    payload = {};
  }
  return payload;
};

export const getFetchResponse = async (response: Response) => {
  const payload = await getPayload(response);
  return Promise.resolve(payload);
};

export const executeFetch = async <Data>(url: string) => {
  try {
    const response = await fetch(url);
    return await getFetchResponse(response);
  } catch (e) {
    return `Error: ${e}`;
  }
};

function useFetch<Data>(url: string) {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const execute = async function (url: string) {
    setLoading(true);
    const result = await executeFetch<Data>(url);
    if (typeof result === "string") {
      setError(result);
    } else {
      setData(result);
      setError(null);
    }
    setLoading(false);
  };

  useEffect(() => {
    execute(url);
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
