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
            <p className="dark:text-white">Hebrew 13:4</p>
          </div>
          <p className="text-orange-500">
            “Marriage should be honoured by all, and the marriage bed kept
            pure, for God will judge the adulterer and all the sexually immoral.
            Happy Sabbath.”
          </p>
        </div>
      </section>
    </div>
  );
};

export default PastorDesk;
