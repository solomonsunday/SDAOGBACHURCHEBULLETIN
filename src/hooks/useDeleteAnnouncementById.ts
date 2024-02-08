import { httpDeleteAnnouncementById } from "@/services/requests";
import { useCallback, useState } from "react";

export const useDeleteAnnouncementItem = () => {
  const [announcement, setAnnouncement] = useState<any>({});
  const [isBusy, setIsBusy] = useState(false);

  const deleteAnnouncementItem = useCallback(async (id: string) => {
    try {
      setIsBusy(true);
      const result = await httpDeleteAnnouncementById(id);
      if (result) {
        setAnnouncement(result.data.data);
      }
    } catch (error) {
      //@ts-ignore
      //   setError(error.message);
    } finally {
      setIsBusy(false);
    }
  }, []);

  return { deleteAnnouncementItem, announcement, isBusy };
};
