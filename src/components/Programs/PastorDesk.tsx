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
              Ellen G. White Testimonies for the Church p. 266.
            </p>
          </div>
          <p className="text-orange-500">
            'This is the recipe that Christ has prescribed for the fainthearted,
            doubting, trembling soul. Let the sorrowful ones, who walk
            mournfully before the Lord, arise and help someone who needs help'
          </p>
        </div>
      </section>
    </div>
  );
};

export default PastorDesk;
