import React from "react";

const SpecialFeature = () => {
  return (
    <section className="pt-5 dark:text-white" id="sabbathschool">
      <div className="gap-2 border-t-8 border-b-8 rounded-md border-[#304D30] p-3 ">
        <div className="font-serif dark:text-orange-400 text-3xl pb-2 mb-5 text-[#304D30] text-center border-b border-[#304D30]">
          Special Feature{" "}
          <span className="text-base">
            Anchors: Success Ajuonu & Dorcas Christopher
          </span>
        </div>
        <div className="col-span-3 text-sm capitalize ">
          <ul className="p-2 space-y-2 text-center">
            <li>
              {" "}
              Hymnal Session by Student Praise Team as Sabbath School Crew Exits
              (3 Hymns){" "}
            </li>
            <li> How well do you know your Hymnal</li>
            <li> Bible Verses in Songs</li>
            <li>
              {" "}
              ANNOUNCEMENTS -{" "}
              <span className="text-orange-500">Kelechi Nwachukwu</span>
            </li>
          </ul>
        </div>

        <div className="py-2">
          <div className="font-serif dark:text-orange-400 text-3xl pb-2 mb-5 text-[#304D30] text-center border-b border-[#304D30]">
            STUDENT THANKSGIVING & PRAYER SESSION
            <span className="text-base">
              {" "}
              (Anchors: Pastor Hapy Kona, Uchendu Imo & Success Ajuonu)
            </span>
          </div>
          <div className="col-span-3 text-sm capitalize">
            <ul className="p-2 space-y-2 text-center">
              <li>
                {" "}
                * Program Intent Introduction:{" "}
                <span className="text-orange-500">Pastor H. Kona</span>
              </li>
              <li>
                {" "}
                * Self-intro by the Students:{" "}
                <span className="text-orange-500">Uchendu Imo</span>
              </li>
              <li>
                * First Prayer for the Students:{" "}
                <span className="text-orange-500">Pastor H. Kona</span>
              </li>
              <li>
                {" "}
                * Family Thanksgiving & Prayers: (Groups of Students & Their
                Families and Friends)-{" "}
                <span className="text-orange-500">
                  Pastor H. Kona & Success Ajuonu
                </span>
              </li>
              <li>
                {" "}
                * Your Church Cares:{" "}
                <span className="text-orange-500">
                  {" "}
                  Uchendu Imo, Pastor H. Kona, Mrs Nwachukwu & Mrs Adedokun
                </span>
              </li>
              <li>
                {" "}
                *Prayer: <span className="text-orange-500">Pastor H. Kona</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialFeature;
