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
            <p className="dark:text-white"> 1 Timothy 4:12</p>
          </div>
          <p className="text-orange-500">
            “ Let no one despise your Youth, but be an example to the believers
            in word, in conduct, in love, in spirit, in faith, in purity. It’s
            the conclusion of our AYM week of prayer. May our Youth reflect
            Christ in their conducts speeches in Jesus name.”
          </p>
        </div>  
      </section>
    </div>
  );
};

export default PastorDesk;
