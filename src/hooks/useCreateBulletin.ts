import { CreateBulletinDTO } from "@/common/interfaces";
import { httpCreateBulletin } from "@/services/requests";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";

export const useCreateBulletins = () => {
  const [bulletins, setBulletins] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  //   const { setError } = useErrorContext();

  const CreateBulletins = useCallback(async (data: CreateBulletinDTO) => {
    try {
      setLoading(true);
      const res = await httpCreateBulletin(data);
      console.log(res, "response");
      if (res) {
        setBulletins(res.data.data);
        toast.success("Bulletin created successfully");
      }
      router.push("/admin/bulletin");
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
