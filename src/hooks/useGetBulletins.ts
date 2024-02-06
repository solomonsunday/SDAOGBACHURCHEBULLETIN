import { httpGetBulettins } from "@/services/requests";
import { useCallback, useEffect, useState } from "react";

export const useGetbulletins = () => {
  const [bulletins, setBulletins] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  //   const { setError } = useErrorContext();

  const fetchBulletins = useCallback(async () => {
    try {
      setLoading(true);
      const data = await httpGetBulettins();
      if (data) {
        setBulletins(data.data.data);
      }
    } catch (error) {
      //@ts-ignore
      //   setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBulletins();
  }, [fetchBulletins]);

  return { bulletins, loading };
};
