import { IBulletin } from "@/common/interfaces";
import { httpGetBulletinById } from "@/services/requests";
import { useCallback, useState } from "react";

export const useGetBulletinById = () => {
  const [bulletin, setBulletin] = useState<IBulletin>();
  const [isLoading, setIsLoading] = useState(false);
  //   const { setError } = useErrorContext();

  const fetchBulletinById = useCallback(async (id: string) => {
    try {
      setIsLoading(true);
      const data = await httpGetBulletinById(id);
      if (data) {
        setBulletin(data.data);
      }
    } catch (error) {
      //@ts-ignore
      //   setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { fetchBulletinById, bulletin, isLoading };
};
