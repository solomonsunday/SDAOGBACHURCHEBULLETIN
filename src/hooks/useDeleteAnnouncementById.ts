import { httpDeleteAnnouncementById } from "@/services/requests";
import { useCallback, useState } from "react";

export const useDeleteAnnouncementItem = () => {
  const [isBusy, setIsBusy] = useState(false);

  const deleteAnnouncementItem = useCallback(async (id: string) => {
    try {
      setIsBusy(true);
      await httpDeleteAnnouncementById(id);
    } catch (error) {
      //@ts-ignore
      //   setError(error.message);
    } finally {
      setIsBusy(false);
    }
  }, []);

  return { deleteAnnouncementItem, isBusy };
};
