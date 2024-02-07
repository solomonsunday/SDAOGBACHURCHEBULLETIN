import { IBulletin } from "@/common/interfaces";
import { httpUpdateBulletinById } from "@/services/requests";
import { useCallback, useState } from "react";

export const useUpdateeBulletinById = () => {
  const [bulletins, setBulletins] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  //   const { setError } = useErrorContext();

  const UpdateBulletinData = useCallback(
    async (id: string, data: IBulletin) => {
      try {
        setLoading(true);
        const result = await httpUpdateBulletinById(id, data);
        if (result) {
          console.log(result, "result");
          setBulletins(result.data.data);
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

  return { UpdateBulletinData, bulletins, loading };
};
