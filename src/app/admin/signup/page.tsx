"use client";
import { ISignUpUser } from "@/common/interfaces";
import Button from "@/components/Admin/button";
import { useRegisterUser } from "@/hooks/useRegisterUser";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
// import { useForm } from "react-hook-form";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpUser>();

  const { setRegisterUser, usersData } = useRegisterUser();

  console.log(usersData, "userData");

  const registerUser = (data: ISignUpUser) => {
    console.log(data, "data");
    setRegisterUser(data);
  };
  return (
    <div className="min-h-screen w-auto flex justify-center items-center bg-[#304D30] text-white">
      <form onSubmit={handleSubmit(registerUser)}>
        <div className="border border-slate-200 shadow-md p-10 rounded-2xl">
          <div className="flex justify-center font-bold text-orange-500">
            Resgister
          </div>
          <div className="">
            <label className="pb-10 text-sm font-medium">Firstname</label>
            <input
              {...register("firstName", { required: true })}
              id="firstName"
              type="text"
              className="focus:invalid:border-red-500 px-3 focus:outline-none focus:border-blue-300 w-full py-2 bg-transparent border border-gray-300 rounded-lg"
            />
          </div>
          {errors?.firstName && (
            <p className=" text-red-500 text-sm italic ">
              Firstname is required
            </p>
          )}
          <div className="pt-5">
            <label className="pb-10 text-sm font-medium">Lastname</label>
            <input
              {...register("lastName", { required: true })}
              id="lastname"
              type="text"
              className="focus:invalid:border-red-500 px-3 focus:outline-none focus:border-blue-300 w-full py-2 bg-transparent border border-gray-300 rounded-lg"
            />
          </div>
          {errors?.lastName && (
            <p className=" text-red-500 text-sm italic ">
              Lastname is required
            </p>
          )}
          <div className="pt-5">
            <label className="pb-10 text-sm font-medium">Username</label>
            <input
              {...register("userName", { required: true })}
              id="username"
              type="text"
              className="focus:invalid:border-red-500 px-3 focus:outline-none focus:border-blue-300 w-full py-2 bg-transparent border border-gray-300 rounded-lg"
            />
          </div>
          {errors?.userName && (
            <p className=" text-red-500 text-sm italic">Username is required</p>
          )}
          <div className="pt-5">
            <label className="pb-10 text-sm font-medium">Password</label>
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
          <div className="pt-5">
            {" "}
            <Button
              type="submit"
              className="w-full bg-orange-400 hover:bg-orange-500"
            >
              Register
            </Button>
          </div>

          <div className="text-center mt-0 pt-0 ">
            <p className="text-sm">
              Already have an account?
              <Link href="/admin/signin">
                <span className="text-orange-500 hover:underline cursor-pointer px-1">
                  Signin
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
