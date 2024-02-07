"use client";

import BackButton from "@/components/Admin/backButton";
import Button from "@/components/Admin/button";
import Container from "@/components/Admin/Container";
import AdminLayout from "@/components/Admin/layout";
import { useForm } from "react-hook-form";
import Input from "@/components/Admin/input";
import { Spinner } from "@/components/Common/Spinner";
import { useEffect } from "react";
import { useGetBulletinById } from "@/hooks/useGetBulletinById";
import { useUpdateeBulletinById } from "@/hooks/useUpdateBulletinById";
import { useRouter } from "next/navigation";

export default function EditBulletin({ params }: { params: { slug: string } }) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    // formState: { errors, isValid },
  } = useForm();
  const { fetchBulletinById, bulletin, isLoading } = useGetBulletinById();
  const { UpdateBulletinData, loading } = useUpdateeBulletinById();
  const bulletinId = params.slug;
  console.log(bulletin, "bulletin");

  useEffect(() => {
    fetchBulletinById(bulletinId);
  }, [bulletinId]);

  useEffect(() => {
    if (!bulletin) return;
    setValue("themeForTheQuarter", bulletin?.themeForTheQuarter, {
      shouldDirty: true,
      shouldValidate: true,
    });
    setValue("topicForTheWeek", bulletin?.topicForTheWeek, {
      shouldDirty: true,
      shouldValidate: true,
    });
    setValue("lessonMemoryTest", bulletin?.lessonMemoryTest, {
      shouldDirty: true,
      shouldValidate: true,
    });
    setValue("onLineZoomLink", bulletin?.onLineZoomLink, {
      shouldDirty: true,
      shouldValidate: true,
    });

    setValue("singspirationTime", bulletin?.singspirationTime, {
      shouldDirty: true,
      shouldValidate: true,
    });
    setValue("songLeader", bulletin?.songLeader, {
      shouldDirty: true,
      shouldValidate: true,
    });
    setValue("openingPrayerBy", bulletin?.openingPrayerBy, {
      shouldDirty: true,
      shouldValidate: true,
    });
    setValue("openningRemarkBy", bulletin?.openningRemarkBy, {
      shouldDirty: true,
      shouldValidate: true,
    });
    setValue("openingHymnBy", bulletin?.openingHymnBy, {
      shouldDirty: true,
      shouldValidate: true,
    });
    setValue("openingHymn", bulletin?.openingHymn, {
      shouldDirty: true,
      shouldValidate: true,
    });
    setValue("missionSpotlightBy", bulletin?.missionSpotlightBy, {
      shouldDirty: true,
      shouldValidate: true,
    });
    setValue("lessonIntroductionBy", bulletin?.lessonIntroductionBy, {
      shouldDirty: true,
      shouldValidate: true,
    });
    setValue("unitActivities", bulletin?.unitActivities, {
      shouldDirty: true,
      shouldValidate: true,
    });
    setValue("lessonSummaryBy", bulletin?.lessonSummaryBy, {
      shouldDirty: true,
      shouldValidate: true,
    });
    setValue("friendTimeBy", bulletin?.friendTimeBy, {
      shouldDirty: true,
      shouldValidate: true,
    });
    setValue(
      "annnouncementClosingRemarkBy",
      bulletin?.annnouncementClosingRemarkBy,
      {
        shouldDirty: true,
        shouldValidate: true,
      }
    );
    setValue("SSClosingHymnNo", bulletin?.SSClosingHymnNo, {
      shouldDirty: true,
      shouldValidate: true,
    });
    setValue("SSClosingHymnBy", bulletin?.SSClosingHymnBy, {
      shouldDirty: true,
      shouldValidate: true,
    });
    setValue("SSclosingPrayerBy", bulletin?.SSclosingPrayerBy, {
      shouldDirty: true,
      shouldValidate: true,
    });
    setValue("prelude", bulletin?.prelude, {
      shouldDirty: true,
      shouldValidate: true,
    });
    setValue("callToWorshipHymnNo", bulletin?.callToWorshipHymnNo, {
      shouldDirty: true,
      shouldValidate: true,
    });
    setValue("callToWorshipBy", bulletin?.callToWorshipBy, {
      shouldDirty: true,
      shouldValidate: true,
    });
    setValue("invocation", bulletin?.invocation, {
      shouldDirty: true,
      shouldValidate: true,
    });
    setValue(
      "divineServiceOpeningHymnNo",
      bulletin?.divineServiceOpeningHymnNo,
      {
        shouldDirty: true,
        shouldValidate: true,
      }
    );
    setValue(
      "divineServiceOpeningHymnBy",
      bulletin?.divineServiceOpeningHymnBy,
      {
        shouldDirty: true,
        shouldValidate: true,
      }
    );
    setValue("pastoralPrayerBy", bulletin?.pastoralPrayerBy, {
      shouldDirty: true,
      shouldValidate: true,
    });
    setValue("stewardshipBy", bulletin?.stewardshipBy, {
      shouldDirty: true,
      shouldValidate: true,
    });
    setValue("musicalSelectionBy", bulletin?.musicalSelectionBy, {
      shouldDirty: true,
      shouldValidate: true,
    });
    setValue("hymnOfConcecrationNo", bulletin?.hymnOfConcecrationNo, {
      shouldDirty: true,
      shouldValidate: true,
    });
    setValue("hymnOfConcecrationNoBy", bulletin?.hymnOfConcecrationNoBy, {
      shouldDirty: true,
      shouldValidate: true,
    });
    setValue("preacher", bulletin?.preacher, {
      shouldDirty: true,
      shouldValidate: true,
    });
    setValue("sermonTitle", bulletin?.sermonTitle, {
      shouldDirty: true,
      shouldValidate: true,
    });
    setValue(
      "divinceServiceClosingHymnNo",
      bulletin?.divinceServiceClosingHymnNo,
      {
        shouldDirty: true,
        shouldValidate: true,
      }
    );
    setValue(
      "divinceServiceClosingHymnBy",
      bulletin?.divineServiceOpeningHymnBy,
      {
        shouldDirty: true,
        shouldValidate: true,
      }
    );
    setValue("benediction", bulletin?.benediction, {
      shouldDirty: true,
      shouldValidate: true,
    });
    setValue("doxology", bulletin?.doxology, {
      shouldDirty: true,
      shouldValidate: true,
    });
    setValue("pastorDeskBibleVerse", bulletin?.pastorDeskBibleVerse, {
      shouldDirty: true,
      shouldValidate: true,
    });
    setValue(
      "pastorDeskBibleVerseDescription",
      bulletin?.pastorDeskBibleVerseDescription,
      {
        shouldDirty: true,
        shouldValidate: true,
      }
    );
    setValue("keepingOnCourseBy", bulletin?.keepingOnCourseBy, {
      shouldDirty: true,
      shouldValidate: true,
    });
    setValue("specialFeature", bulletin?.specialFeature, {
      shouldDirty: true,
      shouldValidate: true,
    });
    setValue(
      "spiritualReadingBibleVerse",
      bulletin?.spiritualReadingBibleVerse,
      {
        shouldDirty: true,
        shouldValidate: true,
      }
    );
    setValue(
      "spiritualReadingBibleVerseBy",
      bulletin?.spiritualReadingBibleVerseBy,
      {
        shouldDirty: true,
        shouldValidate: true,
      }
    );
  }, [bulletin]);

  const submitData = (data: any) => {
    try {
      UpdateBulletinData(bulletinId, data);
      console.log(data, "data");
    } catch (error) {
      console.log(error);
    } finally {
      router.push("/admin/bulletin");
      // Todo: make bulletin list page auto fetch data after an update and delete without refreshing it
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
              {loading ? "Updating..." : "Update"}
            </Button>
          </div>
          {isLoading ? (
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
              </div>
            </div>
          )}
        </form>
      </Container>
    </AdminLayout>
  );
}
