import React, { useEffect } from "react";
import Input from "./Admin/input";
import { useForm } from "react-hook-form";
import { CreateBulletinDTO, IBulletin } from "@/common/interfaces";
import Button from "./Admin/button";
import { useCreateBulletins } from "@/hooks/useCreateBulletin";

interface ISchedule extends Pick<IBulletin, "start_date" | "end_date"> {}

const StartDateModal = ({
  visible = false,
  handleShowModal,
  bulletinData,
  dataToSet,
}: {
  visible?: boolean;
  handleShowModal: () => void;
  bulletinData: CreateBulletinDTO;
  dataToSet?: ISchedule;
}) => {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<CreateBulletinDTO>();
  const { CreateBulletins, loading } = useCreateBulletins();

  if (!visible) return null;

  useEffect(() => {
    if (dataToSet) {
      setValue("start_date", dataToSet?.start_date, {
        shouldDirty: true,
        shouldValidate: true,
      });

      setValue("end_date", dataToSet?.end_date, {
        shouldDirty: true,
        shouldValidate: true,
      });
    }
  }, [dataToSet]);

  const onSubmit = () => {
    const data = bulletinData;
    const scheduleDate = getValues();
    data.start_date = scheduleDate?.start_date.toString();
    data.end_date = scheduleDate?.end_date.toString();

    CreateBulletins(data);
    reset();
  };
  return (
    <div className="fixed inset-0 opacity-90 backdrop-blur-sm flex justify-center items-center bg-black">
      {/* <p className="text-center">When will this bul;etin be live</p> */}
      <div className="bg-white p-2 rounded w-[28rem] z-10">
        <div className="flex justify-between items-center space-y-3 pb-3  px-2">
          <div></div>
          <p className="flex justify-center font-bold ">
            Select the start date and end date for this bulletin?
          </p>
          <div
            className="font-bold capitalize text-red-900 cursor-pointer shadow-md px-2 hover:rotate-3"
            onClick={handleShowModal}
          >
            X
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="h-[3rem] w-full">
            <Input
              type="date"
              placeHolder="Start Date"
              {...register("start_date", {
                required: "Start date is required",
              })}
            />
          </div>
          {errors?.start_date && (
            <p className="text-red-500 italic">{errors.start_date.message}</p>
          )}
          <div className="h-[3rem] w-full">
            <Input
              type="date"
              placeHolder="End Date"
              {...register("end_date", { required: "End date is required" })}
            />
          </div>
          {errors?.end_date && (
            <p className="text-red-500 italic">{errors.end_date.message}</p>
          )}

          <div className="pb-2">
            <Button
              className="flex items-center justify-center bg-orange-500 rounded-md text-white hover:bg-orange-400 w-full"
              type="submit"
              disabled={loading}
            >
              {loading ? "Processing" : "Submit"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StartDateModal;
