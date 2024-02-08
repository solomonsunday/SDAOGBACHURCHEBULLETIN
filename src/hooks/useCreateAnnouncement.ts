import { IAnnouncement } from "@/common/interfaces";
import { httpCreateAnnouncement } from "@/services/requests";
import { useCallback, useState } from "react";

export const useCreateAnnouncement = () => {
  const [announcements, setAnnouncement] = useState<IAnnouncement[]>([]);
  const [loading, setLoading] = useState(false);
  //   const { setError } = useErrorContext();

  const createAnnouncement = useCallback(async (data: IAnnouncement) => {
    try {
      setLoading(true);
      const fetchData = await httpCreateAnnouncement(data);
      if (fetchData) {
        setAnnouncement(fetchData.data.data);
      }
    } catch (error) {
      //@ts-ignore
      //   setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { createAnnouncement, announcements, loading };
};
