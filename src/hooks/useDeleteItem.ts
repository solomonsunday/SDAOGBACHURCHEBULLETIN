import { httpDeleteBulletinById } from "@/services/requests";
import { useCallback, useState } from "react";

export const useDeleteBulletinItem = () => {
  const [isBusy, setIsBusy] = useState(false);

  const DeleteBulletinItem = useCallback(async (id: string) => {
    try {
      setIsBusy(true);
      return await httpDeleteBulletinById(id);
    } catch (error) {
      //@ts-ignore
      //   setError(error.message);
    } finally {
      setIsBusy(false);
    }
  }, []);

  return { DeleteBulletinItem, isBusy };
};
