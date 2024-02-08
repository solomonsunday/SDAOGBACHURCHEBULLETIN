import { ISignUpUser } from "@/common/interfaces";
import { httpRegister } from "@/services/requests";
import { useCallback, useState } from "react";

export const useRegisterUser = () => {
  const [usersData, setUsersData] = useState<any>();
  const [loading, setLoading] = useState(false);
  //   const { setError } = useErrorContext();

  const setRegisterUser = useCallback(async (registerData: ISignUpUser) => {
    try {
      setLoading(true);
      const data = await httpRegister(registerData);
      if (data) {
        setUsersData(data);
      }
    } catch (error) {
      //@ts-ignore
      //   setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { setRegisterUser, usersData, loading };
};
