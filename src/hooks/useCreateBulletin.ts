import { IBulletin } from "@/common/interfaces";
import { httpCreateBulletin } from "@/services/requests";
import { useCallback, useState } from "react";

export const useCreateBulletins = () => {
  const [bulletins, setBulletins] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  //   const { setError } = useErrorContext();

  const CreateBulletins = useCallback(async (data: IBulletin) => {
    try {
      setLoading(true);
      const fetchData = await httpCreateBulletin(data);
      if (fetchData) {
        setBulletins(fetchData.data.data);
      }
    } catch (error) {
      //@ts-ignore
      //   setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { CreateBulletins, bulletins, loading };
};
