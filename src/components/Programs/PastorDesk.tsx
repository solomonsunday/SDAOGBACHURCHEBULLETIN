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
            {/* <p className="dark:text-white"> -</p> */}
          </div>
          <p className="text-orange-500">
            'We are too busy to pray, and so are too busy to have power. We have
            great deal of activity, but we accomplish little; many services but
            few conversions; much machinery but few results R.A. Torrey. When
            was the last time you whisper a prayer to God. When was the last
            time you spend quality time on your knees in fervent prayers? May we
            experience the power of prayer in our lives as individuals, families
            and a Church, in Jesus Christ name Happy Sabbath'
          </p>
        </div>
      </section>
    </div>
  );
};

export default PastorDesk;
