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
            “True education means more than the pursual of a certain course of
            study. It means more than a preparation for the life that now is. It
            has to do with the whole being and with the whole period of
            existence possible to man. I is the harmonious development of the
            physical, the mental, and the spiritual powers."
          </p>
        </div>
      </section>
    </div>
  );
};

export default PastorDesk;
