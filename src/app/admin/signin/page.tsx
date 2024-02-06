"use client";
import { ILoginUser } from "@/common/interfaces";
import Button from "@/components/Admin/button";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
// import { useForm } from "react-hook-form";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginUser>();

  const loginUser = (data: ILoginUser) => {
    console.log(data, "data");
  };
  return (
    <div className="min-h-screen w-auto flex justify-center items-center bg-[#304D30] text-white">
      <form onSubmit={handleSubmit(loginUser)}>
        <div className="border border-slate-200 shadow-md p-10 rounded-2xl">
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
            <p className="text-sm italic text-red-500">Username is required</p>
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
            className="w-full hover:bg-orange-500  bg-orange-400"
          >
            Login
          </Button>
          <div className="text-center mt-0 pt-0 ">
            <p className="text-sm">
              Don't have an account yet?
              <Link href="/admin/signup">
                <span className="text-orange-500 hover:underline cursor-pointer px-1">
                  Sign up
                </span>
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
