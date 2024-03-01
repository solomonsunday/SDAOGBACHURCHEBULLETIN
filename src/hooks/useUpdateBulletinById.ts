import { CreateBulletinDTO, IBulletin } from "@/common/interfaces";
import { httpUpdateBulletinById } from "@/services/requests";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";

export const useUpdateeBulletinById = () => {
  const [bulletins, setBulletins] = useState<IBulletin[]>([]);
  const [loading, setLoading] = useState(false);
  //   const { setError } = useErrorContext();

  const UpdateBulletinData = useCallback(
    async (id: string, data: CreateBulletinDTO) => {
      try {
        setLoading(true);
        const result = await httpUpdateBulletinById(id, data);
        if (result) {
          setBulletins(result.data.data);
          toast.success("Updated successfully!");
        }
      } catch (error) {
        toast.error("Failed to update bulletin");
        //@ts-ignore
        //   setError(error.message);
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return { UpdateBulletinData, bulletins, loading };
};
