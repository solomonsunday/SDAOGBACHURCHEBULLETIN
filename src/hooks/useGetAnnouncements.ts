import { IAnnouncement } from "@/common/interfaces";
import { httpGetAnnouncements } from "@/services/requests";
import { useCallback, useEffect, useState } from "react";

export const useGetAnnouncements = () => {
  const [announcements, setAnnouncement] = useState<IAnnouncement[]>([]);
  const [loading, setLoading] = useState(true);
  //   const { setError } = useErrorContext();

  const fetchAnnouncements = useCallback(async () => {
    try {
      setLoading(true);
      const data = await httpGetAnnouncements();
      if (data) {
        setAnnouncement(data.data.data);
      }
    } catch (error) {
      //@ts-ignore
      //   setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAnnouncements();
  }, [fetchAnnouncements]);

  return { fetchAnnouncements, announcements, loading };
};
