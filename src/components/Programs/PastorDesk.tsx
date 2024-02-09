import React from "react";

const PastorDesk = () => {
  return (
    <div id="pastordesk">
      <section className="pt-10 pb-10" id="features">
        <div className="dark:text-orange-400 font-serif text-3xl pb-4 mb-5 text-[#304D30] text-center border-b border-[#304D30]">
          Pastor's Desk
        </div>
        <div className="space-y-3">
          <div className="underline text-lg font-semibold">
            <p className="dark:text-white">David O. Mckay</p>
          </div>
          <p className="text-orange-500">
            “ No other success can compensate for failure in the home. The
            poorest shack in which love prevails over a united family is of
            greater value to God and future humanity that any other riches. In
            such a home God can work miracles and will work miracles" David O.
            Mckay.
            <br /> It’s family week, let’s make the best out by participating
            and committing ourselves to living out the inspiring messages
          </p>
        </div>
      </section>
    </div>
  );
};

export default PastorDesk;
