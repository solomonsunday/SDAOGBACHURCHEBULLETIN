import { BulletinStatusEnum, IBulletin } from "@/common/interfaces";
import { httpPublishBulletin } from "@/services/requests";
import { useCallback, useState } from "react";

export const usePublishBulletin = () => {
  const [message, setMessage] = useState<IBulletin[]>([]);
  const [loading, setLoading] = useState(false);

  const PublishBulletin = useCallback(
    async (id: string, status: BulletinStatusEnum) => {
      try {
        setLoading(true);
        const result = await httpPublishBulletin(id, status);
        if (result) {
          console.log(result, "result");
          setMessage(result.data.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return { PublishBulletin, message, loading };
};
