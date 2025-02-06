import { useEffect, useState } from "react";

export const useFetch = ({ route }) => {
  const URL = "http://localhost:8080/api/v1";

  const [dataR, setDataR] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      setLoading(true);
      const endpoit = `${URL}/${route}`;
      console.log("ruta: ", endpoit);
      const response = await fetch(endpoit);

      if (!response.ok) {
        throw new Error("Error to get data");
      }
      const data = await response.json();
      console.log(data);

      setDataR(data);

      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (!route) return;
    getData();
  }, [route]);

  return { dataR, loading, error };
};
