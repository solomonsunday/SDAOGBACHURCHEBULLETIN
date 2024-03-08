import { IBulletin } from "@/common/interfaces";
import { QueryParamDto, httpGetBulettins } from "@/services/requests";
import { useCallback, useState } from "react";

export const useGetbulletins = () => {
  const [bulletins, setBulletins] = useState<IBulletin[]>([]);
  const [nextPageToken, setNextPageToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  //   const { setError } = useErrorContext();

  const fetchBulletins = useCallback(async (query?: QueryParamDto) => {
    try {
      setLoading(true);
      const response = await httpGetBulettins({
        next_page_token: nextPageToken,
        ...query,
      });
      setBulletins(response.bulletins!);
      setNextPageToken(response.paginationToken!);
    } catch (error) {
      //@ts-ignore
      //   setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // useEffect(() => {
  //   fetchBulletins();
  // }, [fetchBulletins]);

  return { fetchBulletins, nextPageToken, bulletins, loading };
};
