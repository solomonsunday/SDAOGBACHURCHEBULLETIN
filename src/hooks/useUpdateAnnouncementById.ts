import { IAnnouncement } from "@/common/interfaces";
import { httpUpdateAnnouncementById } from "@/services/requests";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";

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
          setAnnouncement(result.data.data);
          toast.success("Announcement updated successfully");
        }
      } catch (error) {
        toast.error("Failed to update announcement");
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return { UpdateAnnouncementData, announcement, loading };
};
