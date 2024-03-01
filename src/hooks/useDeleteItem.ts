import { httpDeleteBulletinById } from "@/services/requests";
import { useCallback, useState } from "react";
import { useGetbulletins } from "./useGetBulletins";

export const useDeleteBulletinItem = () => {
  const [isBusy, setIsBusy] = useState(false);
  const { fetchBulletins } = useGetbulletins();

  const DeleteBulletinItem = useCallback(async (id: string) => {
    try {
      setIsBusy(true);
      await httpDeleteBulletinById(id);
      fetchBulletins();
    } catch (error) {
      //@ts-ignore
      //   setError(error.message);
    } finally {
      setIsBusy(false);
    }
  }, []);

  return { DeleteBulletinItem, isBusy };
};
