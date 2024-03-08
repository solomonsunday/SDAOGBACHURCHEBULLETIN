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
            <p className="dark:text-white">John 4:23-24</p>
          </div>
          <p className="text-orange-500">
            But the hour is coming, and now it, when the true worshipers will
            worship the Father in Spirit and Truth; for the Father is seeking
            such to worship Him. God is Spirit, and those who worship Him must
            worship in Spirit and truth. May our various expressions of worship
            be guided by the Holy Spirit, from our hearts, in Jesus Christ name.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PastorDesk;
