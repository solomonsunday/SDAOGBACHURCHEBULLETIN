"use client";
import { ISignIn, IUser } from "@/common/interfaces";
import { httpLogin } from "@/services/requests";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

export const useLoginUser = () => {
  const [userData, setUserData] = useState<IUser>();
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  //   const { setError } = useErrorContext();

  const router = useRouter();

  const loginUser = useCallback(async (data: ISignIn) => {
    try {
      setLoading(true);
      const res = await httpLogin(data);
      if (res) {
        setUserData(res.data.data);
        console.log(res.data.data, " user");
        sessionStorage.setItem("token", res.data.data.token);
        sessionStorage.setItem("user", JSON.stringify(res.data.data.user));
        setIsAuthenticated(true);
        router.push("/admin/dashboard");
      }
    } catch (error) {
      //@ts-ignore
      //   setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { loginUser, isAuthenticated, setIsAuthenticated, userData, loading };
};
