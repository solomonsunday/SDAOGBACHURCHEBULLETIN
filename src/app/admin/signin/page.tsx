"use client";
import { ISignIn } from "@/common/interfaces";
import NoAuthHeader from "@/components/Admin/NoAuthHeader";
import Button from "@/components/Admin/button";
import { Spinner } from "@/components/Common/Spinner";
import { useLoginUser } from "@/hooks/useUserLogin";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
// import { useForm } from "react-hook-form";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignIn>();

  const { loginUser, loading } = useLoginUser();

  const handleLoginUser = (data: ISignIn) => {
    console.log(data, "data");
    loginUser(data);
  };
  return (
    <>
      <NoAuthHeader />
      <div className="min-h-screen w-auto flex justify-center items-center bg-[#304D30] text-white">
        <form onSubmit={handleSubmit(handleLoginUser)}>
          <div className="border border-slate-200 shadow-md p-10 rounded-2xl">
            <div className="text-center">
              <p className="text-orange-400 font-mono text-sm">
                SDA Church Ogba E-Bulletin
              </p>
            </div>
            <div className="flex justify-center font-bold text-orange-500">
              Signin
            </div>

            <div className="">
              <label className="pb-10 text-xs">Username</label>
              <input
                {...register("userName", { required: true })}
                id="userName"
                type="userName"
                className="focus:invalid:border-red-500 px-3 focus:outline-none focus:border-blue-300 w-full py-2 bg-transparent border border-gray-300 rounded-lg"
              />
            </div>
            {errors?.userName && (
              <p className="text-sm italic text-red-500">
                Username is required
              </p>
            )}
            <div className="pt-5">
              <label className="pb-10 text-xs">Password</label>
              <input
                {...register("password", { required: true })}
                id="password"
                type="password"
                className="focus:invalid:border-red-500 px-3 focus:outline-none focus:border-blue-300 w-full py-2 bg-transparent border border-gray-300 rounded-lg"
              />
            </div>
            {errors?.password && (
              <p className=" text-red-500 text-sm italic ">
                Password is required
              </p>
            )}
            <div className="text-right mt-0 pt-0 pb-5 cursor-pointer hover:underline">
              <p className="text-xs">Forget password</p>
            </div>
            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-400"
              disabled={loading}
            >
              {loading ? <Spinner height={15} width={15} /> : "Login"}
            </Button>
            <div className="text-center mt-0 pt-0 ">
              <p className="text-sm">
                Don't have an account yet?
                <Link href="/admin/register">
                  <span className="text-orange-500 hover:underline cursor-pointer px-1">
                    Register
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;
