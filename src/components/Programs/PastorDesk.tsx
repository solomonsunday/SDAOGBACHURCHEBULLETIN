import React from "react";

const PastorDesk = () => {
  return (
    <div id="pastordesk">
      <section className="pt-10 pb-10" id="features">
        <div className="dark:text-orange-400 font-serif text-3xl pb-4 mb-5 text-[#304D30] text-center border-b border-[#304D30]">
          Pastor's Desk
        </div>
        <div className="space-y-3">
          <div className="text-lg font-semibold underline">
            <p className="dark:text-white">
              Ellen G. White Testimonies for the Church p 387
            </p>
          </div>
          <p className="text-orange-500">
            “The idea of stewardship should have a practical bearing upon all
            the people of God…. Practical benevolence will give spiritual life
            to thousands of nominal professors’ of the truth who now mourn over
            their darkness. It will transform them from selfish, covetous
            worshipers of mammon, to earnest, faithful coworkers with Christ in
            the salvation of sinners.. "
          </p>
        </div>
      </section>
    </div>
  );
};

export default PastorDesk;
