import useFilteredPublishedBulletin from "@/common/hooks/useFilteredPublishedBulletin";
import React from "react";
import { Spinner } from "../Common/Spinner";

const DivineService = () => {
  const { loading, publishedData } = useFilteredPublishedBulletin();

  return (
    <>
      <div id="divineservice">
        <section className="pt-10 dark:text-white " id="features">
          <div className="font-serif text-3xl pb-2 mb-5 text-[#304D30] text-center dark:text-orange-400 border-b border-[#304D30]">
            Divine Service{" "}
            <span className="text-base">(11:00 AM - 12:30 PM)</span>
          </div>
          {loading ? (
            <Spinner width={20} height={20} />
          ) : !publishedData ? (
            <p className="text-white flex items-center justify-center ">
              No data created for this week!
            </p>
          ) : (
            <div className="grid grid-cols-4 gap-2">
              <div className="col-span-3 text-sm "> Prelude</div>
              <div className="text-xs"> {publishedData?.prelude || "--"}</div>

              <div className="col-span-3 text-sm">
                Call to Worship: ({publishedData?.callToWorshipHymnNo || "--"})
              </div>
              <div className="text-xs">
                {" "}
                {publishedData?.callToWorshipBy || "--"}
              </div>
              <div className="col-span-3 text-sm"> Invocation</div>
              <div className="text-xs">
                {" "}
                {publishedData?.invocation || "--"}{" "}
              </div>
              <div className="col-span-3 text-sm">
                {" "}
                Welcome /Opening Hymn (
                {publishedData?.divineServiceOpeningHymnNo || "--"})
              </div>
              <div className="text-xs">
                {publishedData?.divineServiceOpeningHymnBy || "--"}
              </div>
              <div className="col-span-3 text-sm"> Pastoral Prayer</div>
              <div className="text-xs">
                {" "}
                {publishedData?.pastoralPrayerBy || "--"}
              </div>
              <div className="col-span-3 text-sm"> Stewardship </div>
              <div className="text-xs">
                {publishedData?.stewardshipBy || "--"}
              </div>
              <div className="col-span-3 text-sm">
                {" "}
                Musical Selection (Choir/Youth Choir)
              </div>
              <div className="text-xs">
                {publishedData?.musicalSelectionBy || "--"}
              </div>

              <div className="col-span-3 text-sm">
                Scripture Reading (
                {publishedData?.scripturalReadingBibleVerse || "--"})
              </div>
              <div className="text-xs">
                {publishedData?.scripturalReadingBibleVerseBy || "--"}
              </div>
              <div className="col-span-3 text-sm">
                Hymn of Consecration (
                {publishedData?.hymnOfConcecrationNo || "--"})
              </div>
              <div className="text-xs">
                {publishedData?.hymnOfConcecrationNoBy || "--"}
              </div>
              <div className="col-span-3 text-sm">
                Sermon Title{" "}
                <span className="font-bold">
                  {publishedData?.sermonTitle || "--"}
                </span>
              </div>
              <div className="text-xs"> {publishedData?.preacher || "--"} </div>

              <div className="col-span-3 text-sm">
                Closing Hymn (
                {publishedData?.divineServiceClosingHymnNo || "--"}){" "}
              </div>
              <div className="text-xs">
                {" "}
                {publishedData?.divineServiceClosingHymnBy || "--"}
              </div>
              <div className="col-span-3 text-sm">Benediction</div>
              <div className="text-xs">
                {publishedData?.benediction || "--"}
              </div>
              <div className="col-span-3 text-sm">Doxology</div>
              <div className="text-xs"> {publishedData?.doxology || "--"}</div>
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default DivineService;
