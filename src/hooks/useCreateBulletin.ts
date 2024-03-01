import { CreateBulletinDTO } from "@/common/interfaces";
import { httpCreateBulletin } from "@/services/requests";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";

export const useCreateBulletins = () => {
  const [bulletins, setBulletins] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  //   const { setError } = useErrorContext();

  const CreateBulletins = useCallback(async (data: CreateBulletinDTO) => {
    try {
      setLoading(true);
      const fetchData = await httpCreateBulletin(data);
      if (fetchData) {
        setBulletins(fetchData.data.data);
        toast.success("Bulletin created successfully");
      }
    } catch (error) {
      toast.error("failed to create bulletin");
      //@ts-ignore
      //   setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { CreateBulletins, bulletins, loading };
};
