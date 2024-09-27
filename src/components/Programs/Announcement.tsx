import useFilteredPublishedBulletin from "@/common/hooks/useFilteredPublishedBulletin";
import React from "react";
import { Spinner } from "../Common/Spinner";

const Announcement = () => {
  const { loading, publishedData } = useFilteredPublishedBulletin();
  console.log(publishedData, "announcement");

  return (
    <section className="pt-10 " id="announcement">
      <div className="dark:text-orange-400 font-serif text-3xl pb-2 mb-5 text-[#304D30] text-center border-b border-[#304D30]">
        Combined Announcement
      </div>
      {loading ? (
        <Spinner width={20} height={20} />
      ) : !publishedData ? (
        <p className="text-white flex items-center justify-center ">
          No data created for this week!
        </p>
      ) : (
        <div className="space-y-4 dark:text-white">
          <ol className="space-y-4 list-decimal">
            {publishedData.announcements?.map((item) => {
              console.log(item, "announcement");
              return <li key={item.id}>{item?.content}</li>;
            })}
          </ol>
        </div>
      )}
    </section>
  );
};

export default Announcement;
