import useFilteredPublishedBulletin from "@/common/hooks/useFilteredPublishedBulletin";
import React from "react";
import { Spinner } from "../Common/Spinner";

const PastorDesk = () => {
  const { loading, publishedData } = useFilteredPublishedBulletin();
  return (
    <div id="pastordesk">
      <section className="pt-10 pb-10" id="features">
        <div className="dark:text-orange-400 font-serif text-3xl pb-4 mb-5 text-[#304D30] text-center border-b border-[#304D30]">
          Pastor's Desk
        </div>
        {loading ? (
          <Spinner width={20} height={20} />
        ) : !publishedData ? (
          <p className="text-white flex items-center justify-center ">
            No data created for this week
          </p>
        ) : (
          <div className="space-y-3">
            <div className="text-lg font-semibold underline">
              <p className="dark:text-white">
                {publishedData.pastorDeskBibleVerse}
              </p>
            </div>
            <p className="text-orange-500">
              "{publishedData.pastorDeskBibleVerseDescription}"
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default PastorDesk;
