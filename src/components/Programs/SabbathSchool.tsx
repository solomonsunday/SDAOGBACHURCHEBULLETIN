import useFilteredPublishedBulletin from "@/common/hooks/useFilteredPublishedBulletin";
import React from "react";
import { Spinner } from "../Common/Spinner";

const SabbathSchool = () => {
  const { loading, publishedData } = useFilteredPublishedBulletin();

  return (
    <>
      <section className="pt-10 dark:text-white " id="sabbathschool">
        <div className="font-serif dark:text-orange-400 text-3xl pb-2 mb-5 text-[#304D30] text-center border-b border-[#304D30]">
          Sabbath School <span className="text-base">(8:45 - 10:45 AM)</span>
        </div>
        {loading ? (
          <Spinner width={20} height={20} />
        ) : !publishedData ? (
          <p className="text-white flex items-center justify-center ">
            No data created for this week!
          </p>
        ) : (
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-3 text-sm capitalize">
              {" "}
              Singspiration ({publishedData?.singspirationTime || "--"})
            </div>
            <div className="text-xs capitalize">
              {publishedData?.songLeader || "--"}
            </div>

            <div className="col-span-3 text-sm capitalize">
              Opening Remark (Welcome & Prayer)
            </div>
            <div className="text-xs">
              {publishedData?.openningRemarkBy || "--"}
            </div>

            <div className="col-span-3 text-sm capitalize">
              Welcome & Prayer
            </div>
            <div className="text-xs">
              {publishedData?.openingPrayerBy || "--"}
            </div>

            <div className="col-span-3 text-sm capitalize">
              Welcome / Supt's Opening Remark
            </div>
            <div className="text-xs">
              {" "}
              {publishedData?.openningRemarkBy || "--"}{" "}
            </div>

            <div className="col-span-3 text-sm capitalize">
              {" "}
              Welcome / Opening Hymn ({publishedData?.openingHymn || "--"})
            </div>
            <div className="text-xs capitalize">
              {" "}
              {publishedData?.openingHymnBy || "--"}
            </div>

            <div className="col-span-3 text-sm capitalize">
              {" "}
              Keeping on Course
            </div>
            <div className="text-xs capitalize">
              {" "}
              {publishedData?.keepingOnCourseBy}
            </div>

            <div className="col-span-3 text-sm capitalize">
              {" "}
              Mission Spotlight{" "}
            </div>
            <div className="text-xs capitalize">
              {" "}
              {publishedData?.missionSpotlightBy || "--"}{" "}
            </div>

            <div className="col-span-3 text-sm capitalize">
              {" "}
              Family Presentation{" "}
            </div>
            <div className="text-xs capitalize">
              {publishedData?.FamilyPresentationBy || "--"}
            </div>
            <div className="col-span-3 text-sm capitalize">
              {" "}
              Study Time, Lesson Introduction
            </div>
            <div className="text-xs capitalize">
              {" "}
              {publishedData?.lessonIntroductionBy || "--"}{" "}
            </div>
            <div className="col-span-3 text-sm capitalize">
              Unit Activities / Lesson Study (40 Mins)
            </div>
            <div className="text-xs capitalize">
              {" "}
              {publishedData?.lessonIntroductionBy || "--"}{" "}
            </div>
            <div className="col-span-3 text-sm capitalize">Lesson Summary</div>
            <div className="text-xs capitalize">
              {" "}
              {publishedData?.lessonSummaryBy || "--"}
            </div>
            <div className="col-span-3 text-sm capitalize">Friend's time</div>
            <div className="text-xs capitalize">
              {" "}
              {publishedData?.friendTimeBy || "--"}
            </div>
            <div className="col-span-3 text-sm capitalize">
              Lesson Preview/Announcement / Closing Remark
            </div>
            <div className="text-xs capitalize">
              {publishedData?.annnouncementClosingRemarkBy || "--"}
            </div>
            <div className="col-span-3 text-sm capitalize">
              Closing Hymn ({publishedData?.ssClosingHymnNo || "--"})
            </div>
            <div className="text-xs">
              {publishedData?.ssClosingHymnBy || "--"}
            </div>

            <div className="col-span-3 text-sm capitalize">Closing Prayer</div>
            <div className="text-xs">
              {publishedData?.ssClosingPrayerBy || "--"}
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default SabbathSchool;
