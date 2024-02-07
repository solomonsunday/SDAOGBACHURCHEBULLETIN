import { httpDeleteBulletinById } from "@/services/requests";
import { useCallback, useState } from "react";

export const useDeleteBulletinItem = () => {
  const [bulletins, setBulletins] = useState<any>([]);
  const [isBusy, setIsBusy] = useState(false);

  const DeleteBulletinItem = useCallback(async (id: string) => {
    try {
      setIsBusy(true);
      const result = await httpDeleteBulletinById(id);
      if (result) {
        setBulletins(result.data.data);
      }
    } catch (error) {
      //@ts-ignore
      //   setError(error.message);
    } finally {
      setIsBusy(false);
    }
  }, []);

  return { DeleteBulletinItem, bulletins, isBusy };
};
