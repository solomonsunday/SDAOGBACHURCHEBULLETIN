"use client";
import { ISignUpUser } from "@/common/interfaces";
import NoAuthHeader from "@/components/Admin/NoAuthHeader";
import Button from "@/components/Admin/button";
import { Spinner } from "@/components/Common/Spinner";
import { useRegisterUser } from "@/hooks/useRegisterUser";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
// import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpUser>();

  const { setRegisterUser, usersData, loading } = useRegisterUser();

  console.log(usersData, "userData");

  const registerUser = (data: ISignUpUser) => {
    console.log(data, "data");
    setRegisterUser(data);
  };
  return (
    <>
      <NoAuthHeader />
      <div className="min-h-screen w-auto flex justify-center items-center bg-[#304D30] text-white">
        <form onSubmit={handleSubmit(registerUser)}>
          <div className="border border-slate-200 shadow-md p-10 rounded-2xl">
            <div className="text-center">
              <p className="text-orange-400 font-mono text-sm">
                SDA Church Ogba E-Bulletin
              </p>
            </div>
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
              <p className=" text-red-500 text-sm italic">
                Username is required
              </p>
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
              <label className="pb-10 text-sm font-medium">
                {" "}
                Confirm Password
              </label>
              <input
                {...register("confirmPassword", { required: true })}
                id="confirmPassword"
                type="password"
                className="focus:invalid:border-red-500 px-3 focus:outline-none focus:border-blue-300 w-full py-2 bg-transparent border border-gray-300 rounded-lg"
              />
            </div>
            {errors?.confirmPassword && (
              <p className=" text-red-500 text-sm italic ">
                Confirm Password is required
              </p>
            )}
            <div className="pt-5">
              {" "}
              <Button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-400"
                disabled={loading}
              >
                {loading ? <Spinner height={15} width={15} /> : "Register"}
              </Button>
            </div>

            <div className="text-center mt-0 pt-1 ">
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
    </>
  );
};

export default Register;
