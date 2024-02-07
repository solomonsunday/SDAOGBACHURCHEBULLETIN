import { httpGetAnnouncementById } from "@/services/requests";
import { useCallback, useState } from "react";

export const useGetAnnouncementById = () => {
  const [announcement, getAnnouncement] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  //   const { setError } = useErrorContext();

  const fetchAnnouncementById = useCallback(async (id: string) => {
    try {
      setIsLoading(true);
      const data = await httpGetAnnouncementById(id);
      if (data) {
        getAnnouncement(data.data);
      }
    } catch (error) {
      //@ts-ignore
      //   setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { fetchAnnouncementById, announcement, isLoading };
};
