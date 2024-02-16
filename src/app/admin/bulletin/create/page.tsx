"use client";

import BackButton from "@/components/Admin/backButton";
import Button from "@/components/Admin/button";
import Container from "@/components/Admin/Container";
import AdminLayout from "@/components/Admin/layout";
import { useForm } from "react-hook-form";
import Input from "@/components/Admin/input";
import { useCreateBulletins } from "@/hooks/useCreateBulletin";
import { Spinner } from "@/components/Common/Spinner";
import { IBulletin } from "@/common/interfaces";
import { useGetAnnouncements } from "@/hooks/useGetAnnouncements";
import { useEffect, useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import CreatableSelect from "react-select/creatable";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

export default function CreateBulletin() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<IBulletin>();
  const { CreateBulletins, loading } = useCreateBulletins();
  const { announcements, fetchAnnouncements } = useGetAnnouncements();
  const [selectedAnnouncements, setSelectedAnnouncements] = useState<string[]>(
    []
  );
  console.log(selectedAnnouncements, "selectedAnnouncements");
  useEffect(() => {
    fetchAnnouncements();
  }, [fetchAnnouncements]);

  const submitData = (data: IBulletin) => {
    try {
      // console.log(data, "created-data");
      CreateBulletins(data);
    } catch (error) {
      console.log(error);
    } finally {
      reset();
    }
  };
  return (
    <AdminLayout>
      <Container className=" md:px-[3.125rem] px-[2.5rem] pt-6 pb-7 ">
        <form onSubmit={handleSubmit(submitData)}>
          <div className=" flex flex-wrap gap-5 justify-between ml-[.125rem] mr-[.625rem]">
            <BackButton text="Create Bulletin Information" />

            <Button
              type="submit"
              className=" w-28 disabled:bg-slate-500"
              disabled={loading}
            >
              Save
            </Button>
          </div>
          {loading ? (
            <div className="flex justify-center items-center h-96">
              {" "}
              <Spinner color="orange" />
            </div>
          ) : (
            <div className=" mt-4 flex flex-wrap gap-5 justify-between">
              <div className="w-full flex flex-wrap gap-5 justify-between  md:flex-row flex-col h-fit rounded-lg gap-y-3 gap-x-3 pb-8 pt-6 px-3 bg-white font-poppins">
                <div className="font-semibold text-2xl">
                  <h2>Welcome</h2>
                </div>
                <div className=" md:w-full w-full grid grid-cols-3 gap-4 gap-y-3">
                  <div className=" h-[3.75rem]">
                    <Input
                      type="text"
                      placeHolder="theme for this quarter"
                      {...register("themeForTheQuarter", {})}
                    />
                  </div>
                  <div className=" h-[3.75rem]">
                    <Input
                      type="text"
                      placeHolder="topic for the week"
                      {...register("topicForTheWeek", {})}
                    />
                  </div>
                  <div className=" h-[3.75rem]">
                    <Input
                      type="text"
                      placeHolder="memory test"
                      {...register("lessonMemoryTest", {})}
                    />
                  </div>
                  <div className=" h-[3.75rem]">
                    <Input
                      type="text"
                      placeHolder="zoom link account"
                      {...register("onLineZoomLink", {})}
                    />
                  </div>
                </div>

                <div className="font-semibold text-2xl">
                  <h2>Sabbath School</h2>
                </div>
                <div className=" md:w-full w-full grid grid-cols-3 gap-4 gap-y-3">
                  <div className=" h-[3.75rem]">
                    <Input
                      type="text"
                      placeHolder="Singspiration time"
                      {...register("singspirationTime", {})}
                    />
                  </div>
                  <div className=" h-[3.75rem]">
                    <Input
                      type="text"
                      placeHolder="Song Leader"
                      {...register("songLeader", {})}
                    />
                  </div>
                  <div className=" h-[3.75rem]">
                    <Input
                      type="text"
                      placeHolder="Opening Prayer by"
                      {...register("openingPrayerBy", {})}
                    />
                  </div>
                  <div className=" h-[3.75rem]">
                    <Input
                      type="text"
                      placeHolder="Welcome /Supt's Openning Remark by"
                      {...register("openningRemarkBy", {})}
                    />
                  </div>
                  <div className=" h-[3.75rem]">
                    <Input
                      type="text"
                      placeHolder="Welcome / Opening Hymn"
                      {...register("openingHymn", {})}
                    />
                  </div>
                  <div className=" h-[3.75rem]">
                    <Input
                      type="text"
                      placeHolder="Welcome / Opening Hymn by"
                      {...register("openingHymnBy", {})}
                    />
                  </div>{" "}
                  <div className=" h-[3.75rem]">
                    <Input
                      type="text"
                      placeHolder="keeping On Course by"
                      {...register("keepingOnCourseBy", {})}
                    />
                  </div>{" "}
                  <div className=" h-[3.75rem]">
                    <Input
                      type="text"
                      placeHolder="Mission Spotlight by"
                      {...register("missionSpotlightBy", {})}
                    />
                  </div>{" "}
                  <div className=" h-[3.75rem]">
                    <Input
                      type="text"
                      placeHolder="study Time, Lession Introduction by"
                      {...register("lessonIntroductionBy", {})}
                    />
                  </div>
                  <div className=" h-[3.75rem]">
                    <Input
                      type="text"
                      placeHolder="Unit Activities (35 Minutes) by"
                      {...register("unitActivities", {})}
                    />
                  </div>{" "}
                  <div className=" h-[3.75rem]">
                    <Input
                      type="text"
                      placeHolder="Lesson Summary by"
                      {...register("lessonSummaryBy", {})}
                    />
                  </div>{" "}
                  <div className=" h-[3.75rem]">
                    <Input
                      type="text"
                      placeHolder="Friend's Time by"
                      {...register("friendTimeBy", {})}
                    />
                  </div>
                  <div className=" h-[3.75rem]">
                    <Input
                      type="text"
                      placeHolder="Special Features"
                      {...register("specialFeature", {})}
                    />
                  </div>
                  <div className=" h-[3.75rem]">
                    <Input
                      type="text"
                      placeHolder="Announcement / Closing Remark by"
                      {...register("annnouncementClosingRemarkBy", {})}
                    />
                  </div>
                  <div className=" h-[3.75rem]">
                    <Input
                      type="text"
                      placeHolder="Closing Hymn No"
                      {...register("SSClosingHymnNo", {})}
                    />
                  </div>
                  <div className=" h-[3.75rem]">
                    <Input
                      type="text"
                      placeHolder="Closing Hymn by"
                      {...register("SSClosingHymnBy", {})}
                    />
                  </div>
                  <div className=" h-[3.75rem]">
                    <Input
                      type="text"
                      placeHolder="Sabbath School Closing Prayer by"
                      {...register("SSclosingPrayerBy", {})}
                    />
                  </div>
                </div>
                {/* <div className="border-b border-slate-500"></div> */}

                <div className="font-semibold text-2xl">
                  <h2>Divine Service</h2>
                </div>

                <div className=" md:w-full w-full grid grid-cols-3 gap-4 gap-y-3">
                  <div className=" h-[3.75rem]">
                    <Input
                      type="text"
                      placeHolder="Prelude"
                      {...register("prelude", {})}
                    />
                  </div>
                  <div className=" h-[3.75rem]">
                    <Input
                      type="text"
                      placeHolder="Call To Worship Hymn No"
                      {...register("callToWorshipHymnNo", {})}
                    />
                  </div>
                  <div className=" h-[3.75rem]">
                    <Input
                      type="text"
                      placeHolder="Call To Worship By"
                      {...register("callToWorshipBy", {})}
                    />
                  </div>
                  <div className=" h-[3.75rem]">
                    <Input
                      type="text"
                      placeHolder="Invocation"
                      {...register("invocation", {})}
                    />
                  </div>
                  <div className=" h-[3.75rem]">
                    <Input
                      type="text"
                      placeHolder="Opening Hymn No"
                      {...register("divineServiceOpeningHymnNo", {})}
                    />
                  </div>
                  <div className=" h-[3.75rem]">
                    <Input
                      type="text"
                      placeHolder="Welcome / Opening Hymn by"
                      {...register("divineServiceOpeningHymnBy", {})}
                    />
                  </div>{" "}
                  <div className=" h-[3.75rem]">
                    <Input
                      type="text"
                      placeHolder="Pastoral Prayer By"
                      {...register("pastoralPrayerBy", {})}
                    />
                  </div>{" "}
                  <div className=" h-[3.75rem]">
                    <Input
                      type="text"
                      placeHolder="Stewardship By"
                      {...register("stewardshipBy", {})}
                    />
                  </div>{" "}
                  <div className=" h-[3.75rem]">
                    <Input
                      type="text"
                      placeHolder="Musical Selection By"
                      {...register("musicalSelectionBy", {})}
                    />
                  </div>
                  <div className=" h-[3.75rem]">
                    <Input
                      type="text"
                      placeHolder="Spiritual Reading Bible Verse"
                      {...register("spiritualReadingBibleVerse", {})}
                    />
                  </div>{" "}
                  <div className=" h-[3.75rem]">
                    <Input
                      type="text"
                      placeHolder="Spiritual Reading Bible VerseBy"
                      {...register("spiritualReadingBibleVerseBy", {})}
                    />
                  </div>{" "}
                  <div className=" h-[3.75rem]">
                    <Input
                      type="text"
                      placeHolder="Hymn Of Concecration No"
                      {...register("hymnOfConcecrationNo", {})}
                    />
                  </div>
                  <div className=" h-[3.75rem]">
                    <Input
                      type="text"
                      placeHolder="Sermon Title"
                      {...register("sermonTitle", {})}
                    />
                  </div>
                  <div className=" h-[3.75rem]">
                    <Input
                      type="text"
                      placeHolder="Preacher"
                      {...register("preacher", {})}
                    />
                  </div>
                  <div className=" h-[3.75rem]">
                    <Input
                      type="text"
                      placeHolder="Hymn Of Concecration No By"
                      {...register("hymnOfConcecrationNoBy", {})}
                    />
                  </div>
                  <div className=" h-[3.75rem]">
                    <Input
                      type="text"
                      placeHolder="Closing Hymn No"
                      {...register("divinceServiceClosingHymnNo", {})}
                    />
                  </div>
                  <div className=" h-[3.75rem]">
                    <Input
                      type="text"
                      placeHolder="Closing Hymn By"
                      {...register("divinceServiceClosingHymnBy", {})}
                    />
                  </div>
                  <div className=" h-[3.75rem]">
                    <Input
                      type="text"
                      placeHolder="Benediction"
                      {...register("benediction", {})}
                    />
                  </div>
                  <div className=" h-[3.75rem]">
                    <Input
                      type="text"
                      placeHolder="Doxology"
                      {...register("doxology", {})}
                    />
                  </div>
                </div>

                <div className="font-semibold text-2xl">
                  <h2>Pastor's Desk</h2>
                </div>

                <div className=" md:w-full w-full grid grid-cols-2 gap-4 gap-y-3">
                  <div className=" h-[3.75rem]">
                    <Input
                      type="text"
                      placeHolder="Bible Verse"
                      {...register("pastorDeskBibleVerse", {})}
                    />
                  </div>
                  <div className=" h-[3.75rem]">
                    <Input
                      type="text"
                      placeHolder="Bible Verse Description"
                      {...register("pastorDeskBibleVerseDescription", {})}
                    />
                  </div>
                </div>

                <div className="font-semibold text-2xl">
                  <h2>Announcements</h2>
                </div>
                <div className=" h-[3.75rem] w-full">
                  {/* <Input
                    type="text"
                    placeHolder="announcement description"
                    {...register("content", { required: true })}
                  /> */}
                  {/* <Multiselect
                    isObject={false}
                    onKeyPressFn={function noRefCheck() {}}
                    onRemove={function noRefCheck() {}}
                    onSearch={function noRefCheck() {}}
                    onSelect={function noRefCheck() {}}
                    options={announcements.map((item) => item.content)}
                    placeholder="Select Announcements"
                    selectedValues={[]}
                  /> */}
                  <div className="mb-12">
                    <div className="flex items-center mt-1">
                      <CreatableSelect
                        isMulti={true}
                        className="w-full mb-6"
                        instanceId="announcement"
                        placeholder="Select permissions"
                        hideSelectedOptions={true}
                        minMenuHeight={10}
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        value={announcements.map((item) => {
                          return {
                            label: item.content,
                            value: item.content,
                          };
                        })}
                        theme={
                          {
                            borderRadius: 10,
                            spacing: {
                              baseUnit: 6.3,
                              menuGutter: 4,
                            },
                          } as any
                        }
                        options={announcements.map((item) => {
                          return {
                            label: item.createdDate,
                            value: item.content,
                          };
                        })}
                        onChange={(announcements) => {
                          const anounce = announcements.map(
                            (item) => item.value
                          );
                          setSelectedAnnouncements(anounce);
                          // setValue("permissions", announcements);
                        }}
                      />
                      {isValid && (
                        <CheckCircleIcon className="h-6 mt-1 text-green-500 -ml-9" />
                      )}
                    </div>

                    {errors.content?.type === "required" && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.content?.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </form>
      </Container>
    </AdminLayout>
  );
}
