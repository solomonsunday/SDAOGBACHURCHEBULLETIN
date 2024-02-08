import { IAnnouncement } from "@/common/interfaces";
import { httpUpdateAnnouncementById } from "@/services/requests";
import { useCallback, useState } from "react";

export const useUpdateeAnnouncementById = () => {
  const [announcement, setAnnouncement] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  //   const { setError } = useErrorContext();

  const UpdateAnnouncementData = useCallback(
    async (id: string, data: IAnnouncement) => {
      try {
        setLoading(true);
        const result = await httpUpdateAnnouncementById(id, data);
        if (result) {
          console.log(result, "result");
          setAnnouncement(result.data.data);
        }
      } catch (error) {
        //@ts-ignore
        //   setError(error.message);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return { UpdateAnnouncementData, announcement, loading };
};
