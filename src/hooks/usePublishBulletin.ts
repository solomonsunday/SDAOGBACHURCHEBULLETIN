import { BulletinStatusEnum, IBulletin } from "@/common/interfaces";
import { httpPublishBulletin } from "@/services/requests";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";

export const usePublishBulletin = () => {
  const [message, setMessage] = useState<IBulletin[]>([]);
  const [loading, setLoading] = useState(false);

  const PublishBulletin = useCallback(
    async (id: string, status: BulletinStatusEnum) => {
      try {
        setLoading(true);
        const result = await httpPublishBulletin(id, status);
        if (result) {
          setMessage(result.data.data);
          toast.success("Updated Successfully");
        }
      } catch (error) {
        toast.error("Oops! An error occured");
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return { PublishBulletin, message, loading };
};
